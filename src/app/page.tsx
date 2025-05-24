import Image from "next/image";
import Link from "next/link";

interface main {
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  direction?: "row" | "row-reverse" | "column" | "column-reverse"; // Strictly typed
  // direction?: "row-reverse";
}
interface social {
  image: string;
  alt: string;
  width: number;
  height: number;
  href: string;
}
interface navList {
  link: string;
  href: string;
}
export default function Home() {
  const mainDetails: main[] = [
    {
      title: "Your title here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
      image: "/images/Feature1 SVG.svg",
      alt: "Logo",
      width: 400,
      height: 400,
    },
    {
      title: "Your title here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
      image: "/images/Feature2 SVG.svg",
      alt: "Logo",
      width: 400,
      height: 400,
      direction: "row-reverse",
    },
    {
      title: "Your title here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
      image: "/images/Feature3 SVG.svg",
      alt: "Logo",
      width: 400,
      height: 400,
    },
  ];
  const footerNav: navList[] = [
    { link: "Home", href: "/" },
    { link: "About", href: "/About" },
    { link: "Docs", href: "/Docs.html" },
    { link: "GitHub", href: "/Github" },
  ];
  const socialMedia: social[] = [
    {
      image: "/images/Facebook (2).svg",
      alt: "Facebook",
      width: 24,
      height: 24,
      href: "/",
    },
    {
      image: "/images/LinkedIn.svg",
      alt: "Twitter",
      width: 24,
      height: 24,
      href: "/",
    },

    {
      image: "/images/Githug.svg",
      alt: "Github",
      width: 24,
      height: 24,
      href: "/",
    },
    {
      image: "/images/twitter.svg",

      alt: "LinkedIn",
      width: 24,
      height: 24,
      href: "/",
    },

    {
      image: "/images/At.svg",
      alt: "Pinterest",
      width: 24,
      height: 24,
      href: "/",
    },

    {
      image: "/images/Wifi.svg",
      alt: "wifi",
      width: 24,
      height: 24,
      href: "/",
    },
    {
      image: "/images/Youtube.svg",
      alt: "Youtube",
      width: 24,
      height: 24,
      href: "/",
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="logo-div">
          <Image
            src="/images/Starter-logo-large.svg"
            alt="Logo"
            width={30}
            height={30}
            className="logo"
          />
          <h1 className="start"> Starter </h1>
        </div>

        <div className="nav-link-div">
          <Link href="/Github" className="nav-link">
            GitHub
          </Link>
          <Link href="/Signin" className="nav-link">
            SignIn
          </Link>
        </div>
      </nav>
      <header>
        <h1 className="h1_tag">
          The Modern Landing page for{" "}
          <span style={{ color: "#03A9F4" }}>
            {" "}
            <br />
            React developers
          </span>
        </h1>
        <p className="hero_ptag">
          The easiest way to build a React landing page in seconds. .
        </p>
        <a href="/path/to/theme.zip" download className="her0-button">
          Download Your Free Theme
        </a>
      </header>
      <main className="main_container ">
        <h2 className="title">Your title here</h2>
        <p className="main_ptags">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </p>
        {/* <div className="main-container">
          {mainDetails.map((item, index) => (
            <div
              key={index}
              className="main-item"
              style={{ flexDirection: item.direction || "row" || "column" }}
            >
              <div>
                <h3 className="mainsss">{item.title}</h3>
                <p className="main_ptags">{item.description}</p>
              </div>
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="responsive-image"
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
          ))}
        </div> */}
        <div className="main-container">
          {mainDetails.map((item, index) => (
            <div
              key={index}
              className="main-item"
              style={{ flexDirection: item.direction || "row" }}
            >
              <div className="text-content">
                <h3 className="mainsss">{item.title}</h3>
                <p className="main_ptags">{item.description}</p>
              </div>
              <div className="image-container">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="responsive-image"
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
        <section>
          <div>
            <p className="section-p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="section-p2">Start your Free Trial.</p>
          </div>
          <button className="footer-button">Get Started</button>
        </section>
      </main>
      <footer>
        <div className="logo-div">
          <Image
            src="/images/Starter-logo-large.svg"
            alt="Logo"
            width={30}
            height={30}
          />
          <h1 className="start">Starter</h1>
        </div>
        <nav className="fnavbar">
          {footerNav.map((linked, i) => (
            <Link href={linked.href} key={i}>
              {linked.link}
            </Link>
          ))}
        </nav>
        <div className="social-media">
          {socialMedia.map((social, i) => (
            <Link href={social.href} key={i}>
              <Image
                src={social.image}
                alt={social.alt}
                width={social.width}
                height={social.height}
              />
            </Link>
          ))}
        </div>
        <p>
          &copy; 2021 Nextjs Starter. Powered with ♥ by <span>HAGBAZZ</span>{" "}
        </p>
      </footer>
    </div>
  );
}
