import { DM_Mono, Space_Grotesk } from "next/font/google";

export const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--space-grotesk",
});
export const dM_Mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--dm-mono",
});
