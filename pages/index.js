import Head from "next/head";
import Link from "next/link";
import homestyles from "../styles/Home.module.css";
import hstyles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={homestyles.container}>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={homestyles.main}>
        <div className={homestyles.main__inner}>
          <nav className={homestyles.nav}>
            <div className={homestyles.logo_wrap}>
              <Link href="/">
                <a id="nav_h">
                  SEGUN <span>- EDITION 2020</span>
                </a>
              </Link>

              <Link href="/">
                <a id="nav_a">ABOUT</a>
              </Link>
            </div>
          </nav>
        </div>

        <header className={homestyles.header}>
          <h1>
            <span className={homestyles.h1}>Segun Sowunmi is a designer</span>
            <span id={homestyles.italics} className={homestyles.h1}>
              specialized in Identity, Interior{" "}
            </span>
            <span className={homestyles.h1}>
              and product currently based in Abuja.
            </span>
          </h1>
        </header>

        <section>
          <div className={hstyles.hero}>
            <Link href="/posts/first-page">
              <a>
                <div className={hstyles.h_card}></div>
              </a>
            </Link>

            <Link href="/posts/second-page">
              <a>
                <div className={hstyles.h_card2}></div>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <footer className={homestyles.footer}>
        <div id={homestyles.footer__left}>
          <span>SJS</span>
          <span className={homestyles.f_bold}>&copy; 2020</span>
        </div>

        <div id={homestyles.footer__name}>Segun</div>

        <div id={homestyles.footer_contact}>
          <span className={homestyles.f_bold}>Contact</span>
          <span id={homestyles.footer__email}>
            <a href="#">SJS@hey.com</a>
          </span>
        </div>

        <div id={homestyles.footer_contact}>
          <span className={homestyles.f_bold}>Social Media</span>
          <span id={homestyles.footer__email}>
            <a href="#">twitter</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
