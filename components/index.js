import styles from "./index.module.css";

export const MyButton = React.forwardRef(({ onClick, href, href2 }, ref) => {
  return (
    <>
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.h_card}></div>
      </a>
      <a href={href2} onClick={onClick} ref={ref}>
        <div className={styles.h_card2}></div>
      </a>
    </>
  );
});

export function Hero({ href1, href2 }) {
  return (
    <div className={styles.hero}>
      <MyButton href={href1} href2={href2} />;
    </div>
  );
}
