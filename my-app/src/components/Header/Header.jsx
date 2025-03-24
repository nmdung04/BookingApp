import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo || "/placeholder.svg"} alt="Hải Hoàng Gia Logo" />
            <span>Hải Hoàng Gia</span>
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Trang chủ</Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('about')}
              >
                Giới thiệu
                <i className={`dropdown-icon ${activeDropdown === 'about' ? 'open' : ''}`}></i>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'open' : ''}`}>
                <li><Link to="/gioi-thieu">Về chúng tôi</Link></li>
                <li><Link to="/lich-su">Lịch sử hình thành</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('services')}
              >
                Dịch vụ
                <i className={`dropdown-icon ${activeDropdown === 'services' ? 'open' : ''}`}></i>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'open' : ''}`}>
                <li><Link to="/van-tai-hanh-khach">Vận tải hành khách</Link></li>
                <li><Link to="/chuyen-phat-nhanh">Chuyển phát nhanh</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('tracking')}
              >
                Tra cứu
                <i className={`dropdown-icon ${activeDropdown === 'tracking' ? 'open' : ''}`}></i>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'tracking' ? 'open' : ''}`}>
                <li><Link to="/tra-cuu-hang">Tra cứu hàng hóa</Link></li>
                <li><Link to="/tra-cuu-ve">Tra cứu vé</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/tin-tuc" className="nav-link">Tin tức</Link>
            </li>
            <li className="nav-item">
              <Link to="/lien-he" className="nav-link">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;