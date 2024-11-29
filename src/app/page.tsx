import { FC } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Country Home</h1>
        <div className={styles.carousel}>{/* Carousel Component */}</div>
        <section className={styles.headlines}>
          {/* Headlines Component */}
        </section>
        <section className={styles.entertainment}>
          {/* Latest Songs and Movies Component */}
        </section>
      </main>
    </div>
  );
};

export default Home;
