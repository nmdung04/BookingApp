import React, { useState } from 'react';
import { submitContact } from '../services/api';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Vui lòng điền đầy đủ thông tin bắt buộc'
      });
      return;
    }
    
    setFormStatus({
      submitting: true,
      success: false,
      error: ''
    });
    
    try {
      await submitContact(formData);
      setFormStatus({
        submitting: false,
        success: true,
        error: ''
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.'
      });
      console.error(err);
    }
  };
  
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Liên hệ</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-section-title">Thông tin liên hệ</h2>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div className="info-content">
                <h3>Địa chỉ</h3>
                <p>Nghệ An - Đà Nẵng - Quảng Ngãi</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div className="info-content">
                <h3>Hotline</h3>
                <p>1900.5226 - 0942.26.26.26</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div className="info-content">
                <h3>Phản ánh chất lượng dịch vụ</h3>
                <p>0994.26.26.26</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div className="info-content">
                <h3>Email</h3>
                <p>info@haihoanggia.vn</p>
              </div>
            </div>
            
            <div className="info-item">
              <Clock className="info-icon" />
              <div className="info-content">
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Chủ nhật: 6:00 - 22:00</p>
              </div>
            </div>
            
            <div className="offices">
              <h2 className="contact-section-title">Văn phòng đại diện</h2>
              
              <div className="offices-grid">
                <div className="office-card">
                  <h3>Văn phòng Nghệ An</h3>
                  <p className="office-address">
                    <MapPin className="office-icon" />
                    <span>Địa chỉ: Nghệ An</span>
                  </p>
                </div>
                
                <div className="office-card">
                  <h3>Văn phòng Đà Nẵng</h3>
                  <p className="office-address">
                    <MapPin className="office-icon" />
                    <span>Địa chỉ: Đà Nẵng</span>
                  </p>
                </div>
                
                <div className="office-card">
                  <h3>Văn phòng Quảng Ngãi</h3>
                  <p className="office-address">
                    <MapPin className="office-icon" />
                    <span>Địa chỉ: Quảng Ngãi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2 className="contact-section-title">Gửi tin nhắn cho chúng tôi</h2>
            
            {formStatus.success ? (
              <div className="success-message">
                Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="error-message">{formStatus.error}</div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Họ và tên <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email của bạn"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại <span className="required">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Tiêu đề</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Nhập tiêu đề"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nội dung <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập nội dung tin nhắn"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="submit-button"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="map-section">
          <h2 className="contact-section-title">Bản đồ</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.26104979897!2d108.04246491640625!3d16.07176700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmc!5e0!3m2!1svi!2s!4v1616000000000!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;