import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { 
    // next: { revalidate: 10 }  // revalidate everytime 10s (cache lifetime of a resource is 10s)
    next: { cache: 'no-store'  } 
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
  res.json());
}

const Blog = async () => {
  const data = await getData();
  // console.log(JSON.stringify(data));
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
