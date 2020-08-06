import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function PageOne() {
  return (
    <Layout pageOne>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>How to get way with murder</h1>

        <div className={utilStyles.parent}>
          <img
            src="https://source.unsplash.com/yuZvQH1Ol0M/1600x900"
            alt="random-image"
          />
        </div>
        <p>
          There are, deleniti! To the necessities of the just them of the
          sorrows of life, open ourselves up to him in the least! None of the
          pains they deserted the general, and rejecting some, however, the
          pleasure of the times, explain to you that we can provide in the
          desire to obtain something similar has never been one of us. However,
          difficult for those who discovered the incident. The duties of which
          they deserted the general's, a free choice, from the choosing of the
          truth, prohibited by law from this, no less than the error of the
          flattery of her at once take any one, no one, nothing to attain, but
          on the other hand the very laborious receives the 'often'? As a
          result, the pain is easy to attain, and in the same part of the body
          of them deal corruptly.
        </p>

        <img
          src="https://source.unsplash.com/yuZvQH1Ol0M/1600x900"
          alt="random-image"
        />
      </article>
    </Layout>
  );
}
