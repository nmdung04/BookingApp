import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
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
          <p>Chuyên cung cấp các sản phẩm chất lượng cao</p>
          <div className={styles.contact}>
            <p><i className="fas fa-phone"></i> Hotline: 0123 456 789</p>
            <p><i className="fas fa-envelope"></i> Email: info@example.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link href="/san-pham">Sản phẩm</Link></li>
            <li><Link href="/tin-tuc">Tin tức</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>Đăng ký nhận tin</h3>
          <p>Đăng ký để nhận những thông tin mới nhất từ chúng tôi</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email của bạn" />
            <button type="submit">Đăng ký</button>
          </form>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;