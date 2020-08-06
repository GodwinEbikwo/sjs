import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__inner}>
          <nav className={styles.nav}>
            <div className={styles.logo_wrap}>
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

        <header className={styles.header}>
          <h1>
            <span className={styles.h1}>Segun Sowunmi is a designer</span>
            <span id={styles.italics} className={styles.h1}>
              specialized in Identity, Interior{" "}
            </span>
            <span className={styles.h1}>
              and product currently based in Abuja.
            </span>
          </h1>
        </header>
      </main>

      <footer className={styles.footer}>
        <div id={styles.footer__left}>
          <span>SJS</span>
          <span className={styles.f_bold}>&copy; 2020</span>
        </div>

        <div id={styles.footer__name}>Segun</div>

        <div id={styles.footer_contact}>
          <span className={styles.f_bold}>Contact</span>
          <span id={styles.footer__email}>
            <a href="#">SJS@hey.com</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
