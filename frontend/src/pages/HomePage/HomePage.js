import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome to Our Booking Service</h1>
          <p>Find and book your perfect stay</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;