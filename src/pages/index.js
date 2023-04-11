import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

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
