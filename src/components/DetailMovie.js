import styles from "./DetailMovie.module.css";

const DetailMovie = ({
  coverImg,
  title,
  rating,
  genres,
  runtime,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <img src={coverImg} alt="" />
      </div>
      <div className={styles.card_right}>
        <h1>{title}</h1>
        <div className={styles.card_right__details}>
          <ul>
            <li>{rating}/10</li>
            <li>{runtime} min</li>
            <li className={styles.card_right_genres}>
              {genres.map((genre, idx) => (
                <span key={idx}>#{genre} </span>
              ))}
            </li>
          </ul>
          <div className={styles.card_right__review}>
            <p>{description}</p>
          </div>
          <div className={styles.card_right__button}>
            <a>WATCH TRAILER</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
