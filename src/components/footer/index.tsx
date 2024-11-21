import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  const navigationLinks = [
    { label: "Keizer", href: "#" },
    { label: "Project", href: "#ourprojects" },
    { label: "Strategy", href: "#services" },
    { label: "About Us", href: "#aboutus" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/keizerworks" },
    { label: "Twitter", href: "https://x.com/keizerHq" },
  ];

  return (
    <footer id="footer" className="text-white">
      <div className="max-w-[1536px] mx-auto md:px-[100px] px-[24px] py-[60px]">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          <div>
            <Image
              src="/assets/logos/keizer-logo-name.svg"
              width={175}
              height={79.82}
              alt="keizer-brand-logo"
              className="md:translate-x-0 translate-x-[-15px]"
            />
            <p className="max-w-[300px] text-neutral-400 mt-4">
              We growing up your business with personal AI manager.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-[64px]">
            <div>
              <h3 className="text-[20px] mb-3 font-semibold">Navigate</h3>

              <ul className="md:space-y-[10px] space-y-[12px]">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-neutral-400 active:text-neutral-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] mb-3 font-semibold">Socials</h3>
              <ul className="space-y-[10px]">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-400  active:text-neutral-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[35px] flex items-center font-semibold justify-center text-white bg-[#2d2dc3] text-center">
        © keizerworks 2024 All rights reserved
      </div>
    </footer>
  );
};

export default FooterSection;
