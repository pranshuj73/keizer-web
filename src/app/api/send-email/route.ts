import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";

const ContactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().trim().min(2, "Company name is required"),
  project: z
    .string()
    .trim()
    .min(50, "Project description must be at least 50 characters"),
});

const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 60,
});

export async function POST(request: Request) {
  try {
    await rateLimiter.consume(
      request.headers.get("x-forwarded-for") || "unknown",
    );

    const body = await request.json();
    const result = ContactFormSchema.safeParse(body);

    if (!result.success) {
      const errorMessages = result.error.errors.map((error) => error.message);
      return NextResponse.json({ errors: errorMessages }, { status: 400 });
    }

    const { name, email, company, project } = result.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Project Details: ${project}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Project Details:</strong></p>
          <blockquote>${project}</blockquote>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Project inquiry sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error && error.name === "RateLimiterError") {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 },
      );
    }

    console.error("Failed to process project inquiry:", error);
    return NextResponse.json(
      { error: "Failed to send project inquiry" },
      { status: 500 },
    );
  }
}
