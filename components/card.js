import styles from "./card.module.css";

export const RowButton = React.forwardRef(
  ({ onClick, href1, href2, href3, href4 }, ref) => {
    return (
      <>
        <a href={href1} onClick={onClick} ref={ref}>
          <div className={styles.card}></div>
        </a>
        <a href={href2} onClick={onClick} ref={ref}>
          <div className={styles.card2}></div>
        </a>
        <a href={href3} onClick={onClick} ref={ref}>
          <div className={styles.card3}></div>
        </a>
        <a href={href4} onClick={onClick} ref={ref}>
          <div className={styles.card4}></div>
        </a>
      </>
    );
  }
);

export default function Card({ href1, href2, href3, href4 }) {
  return (
    <div className={styles.parent}>
      <RowButton href1={href1} href2={href2} href3={href3} href4={href4} />
    </div>
  );
}
