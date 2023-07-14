"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import useSWR from 'swr'

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       // next: { revalidate: 10 }  // revalidate everytime 10s (cache lifetime of a resource is 10s)
  //       next: { cache: "no-store" },
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   }; 
  //   getData();
  // },[]); 
  // // []를 넣지 않으면 무한 페칭, 무한 로딩 (컴포넌트가 실행될때마다 실행되기 떄문에)
  // // []안의 값이 바뀔때만 useEffect가 실행되는 것인데 이것을 넣지 않으면 컴포넌트가 실행될때마다 실행되서 무한 루프에 빠짐

  // fetch data in client side
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
