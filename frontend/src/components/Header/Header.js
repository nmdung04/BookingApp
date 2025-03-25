import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link href="/san-pham">Sản phẩm</Link></li>
            <li><Link href="/tin-tuc">Tin tức</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Search and Cart */}
        <div className={styles.actions}>
          <button className={styles.searchBtn} aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <Link href="/cart" className={styles.cartBtn}>
            <i className="fas fa-shopping-cart"></i>
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;