import Image from "next/image";

const navigation = [
  { label: "view work", href: "#work", className: "workLink" },
  { label: "about", href: "#about", className: "aboutLink" },
  { label: "contact", href: "#contact", className: "contactLink" },
];

export default function Home() {
  return (
    <main className="portfolioLanding">
      <nav className="portfolioNav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={`navLink ${item.className}`}
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="portrait" aria-hidden="true">
        <Image
          src="/moi.gif"
          alt=""
          width={1080}
          height={1920}
          priority
          unoptimized
        />
      </div>

      <section className="introduction" aria-labelledby="portfolio-owner">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1 id="portfolio-owner">Wojtek Płudowski</h1>
        <p className="role">Graphic &amp; Motion Designer</p>
        <p className="description">
          creating digital products,
          <br />
          brands and visual experiences.
        </p>
      </section>

      <p className="scrollHint" aria-hidden="true">
        scroll to explore <span>↓</span>
      </p>
    </main>
  );
}
