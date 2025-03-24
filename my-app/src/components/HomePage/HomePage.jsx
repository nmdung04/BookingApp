import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import ContactFloat from '../components/ContactFloat';
import './HomePage.css';

// Import placeholder images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import aboutImg1 from '../assets/about1.jpg';
import aboutImg2 from '../assets/about2.jpg';
import aboutImg3 from '../assets/about3.jpg';
import aboutImg4 from '../assets/about4.jpg';
import serviceImg1 from '../assets/service1.jpg';
import serviceImg2 from '../assets/service2.jpg';

const slides = [
  {
    image: slide1,
    title: 'Vận tải hành khách chất lượng cao',
    description: 'Dịch vụ vận tải hành khách an toàn, tiện nghi trên tuyến Nghệ An - Đà Nẵng - Quảng Ngãi',
    buttonText: 'Đặt vé ngay',
    buttonLink: '/van-tai-hanh-khach'
  },
  {
    image: slide2,
    title: 'Chuyển phát nhanh',
    description: 'Dịch vụ chuyển phát nhanh, giao hàng tận nơi với thời gian vận chuyển nhanh chóng',
    buttonText: 'Tìm hiểu thêm',
    buttonLink: '/chuyen-phat-nhanh'
  },
  {
    image: slide3,
    title: 'Hải Hoàng Gia',
    description: 'Thương hiệu vận tải của người Nghệ An',
    buttonText: 'Về chúng tôi',
    buttonLink: '/gioi-thieu'
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider slides={slides} />
      
      <div className="container service-cards-section">
        <div className="service-cards">
          <ServiceCard 
            icon={<i className="icon-bus"></i>} 
            title="Vận tải hành khách" 
            link="/van-tai-hanh-khach" 
          />
          <ServiceCard 
            icon={<i className="icon-package"></i>} 
            title="Chuyển phát nhanh" 
            link="/chuyen-phat-nhanh" 
          />
          <ServiceCard 
            icon={<i className="icon-search"></i>} 
            title="Mã hợp đồng và hàng hóa" 
            link="/tra-cuu-hang" 
          />
        </div>
      </div>
      
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">Giới thiệu</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong className="highlight">Hải Hoàng Gia</strong> – thương hiệu vận tải của người Nghệ An. Chúng tôi ra đời với sứ mệnh tạo ra sự thuận tiện, an toàn, chuyên nghiệp cho quý khách hàng đi chuyến trên lộ trình Nghệ An – Đà Nẵng – Quảng Ngãi.
              </p>
              <p>
                Hải Hoàng Gia không ngừng cải tiến chất lượng dịch vụ giúp khách hàng có những trải nghiệm tốt nhất.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <i className="icon-phone"></i>
                  <span>Hotline đặt vé: 1900.5226 - 0942.26.26.26</span>
                </div>
                <div className="contact-item">
                  <i className="icon-phone"></i>
                  <span>Phản ánh chất lượng dịch vụ: 0994.26.26.26</span>
                </div>
              </div>
            </div>
            
            <div className="about-images">
              <div className="image-grid">
                <img src={aboutImg1 || "/placeholder.svg"} alt="Hải Hoàng Gia" />
                <img src={aboutImg2 || "/placeholder.svg"} alt="Dịch vụ vận tải" />
                <img src={aboutImg3 || "/placeholder.svg"} alt="Xe khách chất lượng cao" />
                <img src={aboutImg4 || "/placeholder.svg"} alt="Dịch vụ chuyển phát nhanh" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Dịch vụ của chúng tôi</h2>
          
          <div className="services-grid">
            <div className="service-card-large">
              <img src={serviceImg1 || "/placeholder.svg"} alt="Vận tải hành khách" />
              <div className="service-content">
                <h3>Vận tải hành khách</h3>
                <p>
                  Dịch vụ vận tải hành khách chất lượng cao trên tuyến Nghệ An - Đà Nẵng - Quảng Ngãi với đội xe hiện đại, thoải mái và an toàn.
                </p>
                <Link to="/van-tai-hanh-khach" className="btn">
                  Xem chi tiết
                </Link>
              </div>
            </div>
            
            <div className="service-card-large">
              <img src={serviceImg2 || "/placeholder.svg"} alt="Chuyển phát nhanh" />
              <div className="service-content">
                <h3>Chuyển phát nhanh</h3>
                <p>
                  Dịch vụ chuyển phát nhanh, giao hàng tận nơi với thời gian vận chuyển nhanh chóng và đảm bảo an toàn cho hàng hóa.
                </p>
                <Link to="/chuyen-phat-nhanh" className="btn">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFloat />
    </div>
  );
};

export default HomePage;