import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Hải Hoàng Gia</h3>
            <p className="footer-description">
              Chúng tôi là đơn vị cung cấp dịch vụ vận tải hành khách và chuyển phát nhanh chất lượng cao.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="icon-phone"></i>
                <span>Hotline: 1900.5226 - 0942.26.26.26</span>
              </div>
              <div className="contact-item">
                <i className="icon-phone"></i>
                <span>Phản ánh chất lượng: 0994.26.26.26</span>
              </div>
              <div className="contact-item">
                <i className="icon-email"></i>
                <span>info@haihoanggia.vn</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Dịch vụ</h3>
            <ul className="footer-links">
              <li><Link to="/van-tai-hanh-khach">Vận tải hành khách</Link></li>
              <li><Link to="/chuyen-phat-nhanh">Chuyển phát nhanh</Link></li>
              <li><Link to="/tra-cuu-hang">Tra cứu hàng hóa</Link></li>
              <li><Link to="/tra-cuu-ve">Tra cứu vé</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Địa chỉ</h3>
            <div className="contact-item">
              <i className="icon-location"></i>
              <span>Nghệ An - Đà Nẵng - Quảng Ngãi</span>
            </div>
            <div className="social-links">
              <h4>Kết nối với chúng tôi</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="icon-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="icon-zalo"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hải Hoàng Gia. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;