import styles from "./page.module.css";
import iconMovie from "@/assets/iconCine.png";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/assets/arrow-right.svg";
import arrowLeft from "@/assets/arrow-left.svg";
import iconHome from "@/assets/iconHome.svg"

function MoviePage() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.subMain}>
          <div className={styles.imgMain}>
            <Image className={styles.iconMain} src={iconMovie} alt="icon" />
          </div>
          <p>Movies</p>
        </div>
      </div>
      <div className={styles.listMovies}>
        <p className={styles.explainFilm}>
          "Hello Kitty's Furry Tale Theater" is an adorable animated series
          where Hello Kitty and her friends perform famous fairy tales, bringing
          fun and magic to viewers of all ages. A through these enchanting
          adventures, the characters teach valuable lessons about valuable
          lessons about friendship and values, leaving a lasting impression in
          the hearts of their lasting impression on the hearts of their fans
          around the world.
        </p>
        <div className={styles.subListMovies}>
          <video className={styles.videoBody} controls>
            <source src="FirstThrailer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.indice}>
        <div className={styles.afterIndex}>
          <Link href="/history" className={styles.subIndice}>
            <div className={styles.imgIndice}>
              <Image
                className={styles.iconIndice}
                src={arrowLeft}
                alt="arrow"
              />
            </div>
            <p>History</p>
          </Link>
          <Link href="/characters" className={styles.subIndice}>
            <p>Characters</p>
            <div className={styles.imgIndice}>
              <Image
                className={styles.iconIndice}
                src={arrowRight}
                alt="arrow"
              />
            </div>
          </Link>
          <Link href="/" className={styles.subIndice}>
            <div className={styles.imgIndice}>
              <Image
                className={styles.iconIndice}
                src={iconHome}
                alt="arrow"
              />
            </div>
            <p>Home</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
