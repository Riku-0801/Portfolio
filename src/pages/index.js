import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "../components/modules/header";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          className={`${styles.fadeIn} ${styles.bordering01} ${styles.centerize}`}
        >
          Hello World
        </div>
      ) : (
        <div className={`${styles.centerize}`}>
          <div className={`${styles.fadeIn} ${styles.bordering01} `}>
            {"Riku's Portfolio !!!"}
          </div>
          <Link href="/about">
            <div className={`${styles.fadeIn} ${styles.bordering01} `}>
              {">"}
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
