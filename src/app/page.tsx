"use client";

import Image from "next/image";
import styles from "./page.module.css";
import iconKitty from "@/assets/iconHelloKitty.png";
import Link from "next/link";

import iconChevronRight from "@/assets/chevron-right.svg";
import iconChevronDown from "@/assets/chevron-down.svg";
import iconRightArrow from "@/assets/arrow-right.svg"
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.subMain}>
          <p className={styles.Message}>
            For my beautiful girlfriend {""}
            <Link
              className={styles.nameGirls}
              href="https://www.instagram.com/m4r1q_/"
            >
              Maryam
            </Link>
          </p>
          <div className={styles.imgKitty}>
            <Image
              className={styles.iconKitty}
              src={iconKitty}
              alt="iconKitty"
            />
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.subInfoBlock}>
              <h1 className={styles.nameKitty}>Hello Kitty</h1>
              <div className={styles.listContent}>
                <p>Content</p>
                <div className={styles.iconsBanner}>
                  {open == false ? (
                    <Image
                      className={styles.chevronRight}
                      src={iconChevronRight}
                      alt="chevron"
                      onClick={() => setOpen(!open)}
                    />
                  ) : (
                    <Image
                      className={styles.chevronRight}
                      src={iconChevronDown}
                      alt="chevron"
                      onClick={() => setOpen(!open)}
                    />
                  )}
                </div>
              </div>
              {open == true ? (
                <div className={styles.listContent}>
                  <div className={styles.subLIst}>
                    <p>History</p>
                    <div className={styles.iconlist}>
                      <Image className={styles.imgList} src={iconRightArrow} alt="iconArrow" />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
