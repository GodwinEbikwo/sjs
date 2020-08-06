import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <img
        src="https://res.cloudinary.com/dqv9mfbvt/image/upload/v1596303259/16_qf5opa.png"
        alt="404-error"
      />
      <h3>Oops! we think you are lost, don't be alarmed</h3>
      <p>
        Sorry we can't find the page you are looking. It may not exist or has
        been temporarily removed. Sorry XD
      </p>
      <Link href="/">
        <a className="button">Come home</a>
      </Link>
      <style jsx>{`
        .container {
          max-width: 36rem;
          padding: 0 1rem;
          margin: 3rem auto 6rem;
          text-align: center;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
        h3 {
          font-weight: 500;
          color: #333;
        }
      `}</style>
    </div>
  );
}
