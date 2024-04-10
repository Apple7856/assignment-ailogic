"use client";

import { getBooks } from "@/lib/data";
import styles from "./books.module.css";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getBooks();
      setBooks(data);
    }
    getData();
  }, []);
  console.log(books);
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        {!!books.length &&
          books.map((item) => {
            return (
              <div className={styles.card} key={item.id}>
                <p className={styles.heading}>Title : {item.title}</p>
                <p className={styles.heading}>Author : {item.author}</p>
                <p className={styles.heading}>Year : {item.year}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
