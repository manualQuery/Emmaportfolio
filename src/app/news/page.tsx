import { useState, useEffect } from "react";
import styles from "../../styles/News.module.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNewsData(data);
    };

    fetchNewsData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Latest News</h1>
      <div className={styles.newsList}>
        {newsData.map((newsItem, index) => (
          <div key={index} className={styles.newsItem}>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
import { useState, useEffect } from "react";
import styles from "../../styles/News.module.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNewsData(data);
    };

    fetchNewsData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Latest News</h1>
      <div className={styles.newsList}>
        {newsData.map((newsItem, index) => (
          <div key={index} className={styles.newsItem}>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
