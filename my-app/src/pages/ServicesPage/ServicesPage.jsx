import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../services/api';
import './ServicesPage.css';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data.results || []);
      } catch (err) {
        setError('Failed to load services');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  // Fallback content if API fails or returns empty
  const fallbackServices = [
    {
      id: 1,
      type: 'passenger',
      title: 'Vận tải hành khách',
      description: 'Dịch vụ vận tải hành khách chất lượng cao trên tuyến Nghệ An - Đà Nẵng - Quảng Ngãi với đội xe hiện đại, thoải mái và an toàn.',
      image: '/placeholder.svg?height=400&width=600'
    },
    {
      id: 2,
      type: 'delivery',
      title: 'Chuyển phát nhanh',
      description: 'Dịch vụ chuyển phát nhanh, giao hàng tận nơi với thời gian vận chuyển nhanh chóng và đảm bảo an toàn cho hàng hóa.',
      image: '/placeholder.svg?height=400&width=600'
    }
  ];

  const displayServices = services.length > 0 ? services : fallbackServices;

  return (
    <div className="services-page">
      <div className="container">
        <h1 className="page-title">Dịch vụ</h1>
        
        <div className="services-intro">
          <p>
            Hải Hoàng Gia cung cấp các dịch vụ vận tải hành khách và chuyển phát nhanh chất lượng cao, 
            đảm bảo an toàn và đúng giờ trên các tuyến đường Nghệ An - Đà Nẵng - Quảng Ngãi.
          </p>
        </div>
        
        <div className="services-list">
          {displayServices.map(service => (
            <div key={service.id} className="service-card-large">
              <div className="service-image">
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link 
                  to={service.type === 'passenger' ? '/van-tai-hanh-khach' : '/chuyen-phat-nhanh'} 
                  className="btn"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="service-features">
          <h2 className="section-title">Tại sao chọn dịch vụ của chúng tôi?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="icon-safety"></i>
              </div>
              <h3>An toàn</h3>
              <p>Đội ngũ lái xe chuyên nghiệp, giàu kinh nghiệm, đảm bảo an toàn tối đa cho hành khách và hàng hóa</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="icon-comfort"></i>
              </div>
              <h3>Thoải mái</h3>
              <p>Xe đời mới, hiện đại, trang bị đầy đủ tiện nghi, mang đến trải nghiệm thoải mái cho hành khách</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="icon-punctuality"></i>
              </div>
              <h3>Đúng giờ</h3>
              <p>Cam kết xuất phát và đến đích đúng giờ, tôn trọng thời gian của khách hàng</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="icon-service"></i>
              </div>
              <h3>Dịch vụ tốt</h3>
              <p>Đội ngũ nhân viên thân thiện, nhiệt tình, sẵn sàng hỗ trợ khách hàng mọi lúc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;