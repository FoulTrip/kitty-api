import React from "react";
import Image from "next/image";
import iconHistory from "@/assets/iconHistoria.png";
import sanrioPublic from "@/assets/sanrioPublic.png";
import modelKitty from "@/assets/modelKitty.webp";
import publichelloKitty from "@/assets/publicHelloKitty.webp";
import styles from "./page.module.css";

function HistoryPage() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.subMain}>
          <div className={styles.imgMain}>
            <Image className={styles.iconMain} src={iconHistory} alt="icon" />
          </div>
          <p>History</p>
        </div>
      </div>
      <div className={styles.Block}>
        <p className={styles.textBlock}>
          The creation of Hello Kitty dates back to Japan in the 1970s. She was
          designed by Yuko Shimizu and developed by the Sanrio company. The
          character was officially launched in 1974 and became an instant hit.
          instant success.
        </p>
        <div className={styles.imgBlock}>
          <Image
            className={styles.iconBlock}
            src={sanrioPublic}
            alt="sanrioPublic"
          />
        </div>
      </div>

      <div className={styles.BlockTwo}>
        <div className={styles.imgBlock}>
          <Image
            className={styles.modelhelloKitty}
            src={modelKitty}
            alt="sanrioPublic"
          />
        </div>
        <p className={styles.textBlock}>
          Hello Kitty is a white kitten with a sweet and friendly appearance,
          characterized by having no mouth, which makes her unique and easy to
          project a wide variety of emotions. This allows Hello Kitty fans to
          project their own feelings onto the character and establish a personal
          connection with her.
        </p>
      </div>

      <div className={styles.Block}>
        <p className={styles.textBlock}>
          Despite being a fictional character, Hello Kitty has become a cultural
          phenomenon and a lucrative franchise with a large number of products
          bearing her image: from clothing, toys and stationery to accessories
          and household appliances. She has appeared in comics, television
          shows, video games and has been an ambassador for various causes and
          events.
        </p>
        <div className={styles.imgBlock}>
          <Image
            className={styles.modelhelloKitty}
            src={publichelloKitty}
            alt="sanrioPublic"
          />
        </div>

        <p className={styles.textBlockFinal}>
          Over the years, Hello Kitty has captured the hearts of people of all
          ages and nationalities. Her popularity transcends cultural boundaries
          and continues to be a symbol of happiness, friendship and positivity
          around the world. Her image embodies tenderness and simplicity, making
          her a timeless character that has withstood the test of time.
        </p>
      </div>
      {/* <div>
        <div>
          <p>Movies</p>
          <div></div>
        </div>
      </div> */}
    </>
  );
}

export default HistoryPage;
