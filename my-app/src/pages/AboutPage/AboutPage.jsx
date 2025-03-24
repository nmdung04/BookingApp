import React, { useState, useEffect } from 'react';
import { getAboutUs } from '../services/api';
import './AboutPage.css';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await getAboutUs();
        setAboutData(response.data);
      } catch (err) {
        setError('Failed to load about us data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="about-page">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-page">
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  // Fallback content if API fails
  const fallbackContent = {
    title: "Giới thiệu về Hải Hoàng Gia",
    content: `
      <p><strong>Hải Hoàng Gia</strong> – thương hiệu vận tải của người Nghệ An. Chúng tôi ra đời với sứ mệnh tạo ra sự thuận tiện, an toàn, chuyên nghiệp cho quý khách hàng đi chuyến trên lộ trình Nghệ An – Đà Nẵng – Quảng Ngãi.</p>
      
      <p>Hải Hoàng Gia không ngừng cải tiến chất lượng dịch vụ giúp khách hàng có những trải nghiệm tốt nhất.</p>
      
      <h3>Tầm nhìn</h3>
      <p>Trở thành thương hiệu vận tải hàng đầu khu vực miền Trung, mang đến dịch vụ vận tải hành khách và chuyển phát nhanh chất lượng cao, an toàn và đáng tin cậy.</p>
      
      <h3>Sứ mệnh</h3>
      <p>Cung cấp dịch vụ vận tải hành khách và chuyển phát nhanh chất lượng cao, đảm bảo an toàn, tiện nghi và đúng giờ, mang đến trải nghiệm tốt nhất cho khách hàng.</p>
      
      <h3>Giá trị cốt lõi</h3>
      <ul>
        <li><strong>An toàn:</strong> Đặt sự an toàn của khách hàng và hàng hóa lên hàng đầu</li>
        <li><strong>Chất lượng:</strong> Cam kết cung cấp dịch vụ chất lượng cao</li>
        <li><strong>Chuyên nghiệp:</strong> Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm</li>
        <li><strong>Đổi mới:</strong> Không ngừng cải tiến và nâng cao chất lượng dịch vụ</li>
        <li><strong>Trách nhiệm:</strong> Có trách nhiệm với khách hàng, cộng đồng và môi trường</li>
      </ul>
    `,
    image: "/placeholder.svg?height=400&width=600"
  };

  const content = aboutData || fallbackContent;

  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">{content.title}</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src={content.image || "/placeholder.svg"} alt={content.title} />
          </div>
          
          <div className="about-text" dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </div>
        
        <div className="company-values">
          <h2 className="section-title">Giá trị của chúng tôi</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="icon-safety"></i>
              </div>
              <h3>An toàn</h3>
              <p>Đặt sự an toàn của khách hàng và hàng hóa lên hàng đầu</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="icon-quality"></i>
              </div>
              <h3>Chất lượng</h3>
              <p>Cam kết cung cấp dịch vụ chất lượng cao</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="icon-professional"></i>
              </div>
              <h3>Chuyên nghiệp</h3>
              <p>Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="icon-innovation"></i>
              </div>
              <h3>Đổi mới</h3>
              <p>Không ngừng cải tiến và nâng cao chất lượng dịch vụ</p>
            </div>
          </div>
        </div>
        
        <div className="company-history">
          <h2 className="section-title">Lịch sử hình thành</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Thành lập công ty</h3>
                <p>Hải Hoàng Gia được thành lập với đội xe ban đầu chỉ có 5 chiếc, hoạt động trên tuyến Nghệ An - Đà Nẵng</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Mở rộng tuyến đường</h3>
                <p>Mở rộng hoạt động trên tuyến Đà Nẵng - Quảng Ngãi, tăng số lượng xe lên 15 chiếc</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Ra mắt dịch vụ chuyển phát nhanh</h3>
                <p>Bổ sung dịch vụ chuyển phát nhanh, vận chuyển hàng hóa trên các tuyến đường đang khai thác</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Nâng cấp đội xe</h3>
                <p>Đầu tư nâng cấp đội xe với các xe giường nằm, limousine hiện đại, nâng cao chất lượng dịch vụ</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Phát triển mạnh mẽ</h3>
                <p>Mở rộng văn phòng đại diện tại các tỉnh thành, nâng cao chất lượng dịch vụ và trải nghiệm khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;