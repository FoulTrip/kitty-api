import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import iconMovie from "@/assets/iconHidra.png";
import iconHome from "@/assets/iconHome.svg"

import character1 from "@/assets/iconMimmy.webp";
import character2 from "@/assets/iconDaniel.webp";
import character3 from "@/assets/iconMelody.webp";
import character4 from "@/assets/iconMaru.webp";
import character5 from "@/assets/iconPompompurin.webp";
import character6 from "@/assets/iconKeroppi.webp";
import arrowLeft from "@/assets/arrow-left.svg";

function CharactersPage() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.subMain}>
          <div className={styles.imgMain}>
            <Image className={styles.iconMain} src={iconMovie} alt="icon" />
          </div>
          <p>Charcters</p>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character1}
              alt="character1"
            />
          </div>
          <p className={styles.infoCharacter}>
            Hello Kitty's twin sister, who looks almost identical but wears a
            bow on her right ear and has a slightly more reserved personality.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character2}
              alt="character2"
            />
          </div>
          <p className={styles.infoCharacter}>
            A male cat and Hello Kitty's childhood friend, often depicted as her
            love interest. He is portrayed as a talented artist and a caring
            individual.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character3}
              alt="character3"
            />
          </div>
          <p className={styles.infoCharacter}>
            A pink anthropomorphic rabbit character who is one of Hello Kitty's
            best friends. She is sweet and enjoys baking and sewing.
          </p>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character4}
              alt="character4"
            />
          </div>
          <p className={styles.infoCharacter}>
            A mischievous penguin with an "attitude," who loves playing pranks
            and skateboarding.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character5}
              alt="character5"
            />
          </div>
          <p className={styles.infoCharacter}>
            A golden retriever dog who is a good-natured and laid-back
            character. He loves eating pudding and is often seen wearing a brown
            beret.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <Image
              className={styles.subImg}
              src={character6}
              alt="character6"
            />
          </div>
          <p className={styles.infoCharacter}>
            A cute green frog who enjoys swimming and playing with friends.
          </p>
        </div>
      </div>

      <div className={styles.indice}>
        <div className={styles.afterIndex}>
          <Link href="/movies" className={styles.subIndice}>
            <div className={styles.imgIndice}>
              <Image
                className={styles.iconIndice}
                src={arrowLeft}
                alt="arrow"
              />
            </div>
            <p>Movies</p>
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

export default CharactersPage;
