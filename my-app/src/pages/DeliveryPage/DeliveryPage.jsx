import React, { useState } from 'react';
import { trackPackage } from '../services/api';
import { Truck, Package, Clock, MapPin, Phone, CreditCard } from 'lucide-react';
import './DeliveryPage.css';

const DeliveryPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrackingSubmit = async (e) => {
    e.preventDefault();
    
    if (!trackingNumber) {
      setError('Vui lòng nhập mã vận đơn');
      return;
    }
    
    setLoading(true);
    setError('');
    setTrackingResult(null);
    
    try {
      const response = await trackPackage(trackingNumber);
      setTrackingResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="delivery-page">
      <div className="container">
        <h1 className="page-title">Chuyển phát nhanh</h1>
        
        <div className="delivery-intro">
          <div className="intro-content">
            <p className="intro-text">
              Hải Hoàng Gia cung cấp dịch vụ chuyển phát nhanh, giao hàng tận nơi với thời gian vận chuyển nhanh chóng và đảm bảo an toàn cho hàng hóa.
            </p>
            <p className="intro-text">
              Chúng tôi cam kết mang đến dịch vụ chuyển phát nhanh chất lượng cao, đáp ứng nhu cầu vận chuyển hàng hóa của khách hàng trên các tuyến đường Nghệ An - Đà Nẵng - Quảng Ngãi.
            </p>
            
            <div className="intro-details">
              <div className="detail-item">
                <Clock className="detail-icon" />
                <div className="detail-content">
                  <h3>Thời gian giao hàng</h3>
                  <p>Nhanh chóng, đúng hẹn</p>
                </div>
              </div>
              
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <div className="detail-content">
                  <h3>Khu vực phục vụ</h3>
                  <p>Nghệ An - Đà Nẵng - Quảng Ngãi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-image">
            <img src="/placeholder.svg?height=400&width=600" alt="Chuyển phát nhanh" />
          </div>
        </div>
        
        <div className="tracking-section">
          <h2 className="section-title">Tra cứu vận đơn</h2>
          
          <div className="tracking-container">
            <form className="tracking-form" onSubmit={handleTrackingSubmit}>
              <div className="form-group">
                <label htmlFor="trackingNumber">Mã vận đơn</label>
                <input
                  type="text"
                  id="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Nhập mã vận đơn"
                />
              </div>
              
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Đang tra cứu...' : 'Tra cứu'}
              </button>
            </form>
            
            {error && <div className="error-message">{error}</div>}
            
            {trackingResult && (
              <div className="tracking-result">
                <h3>Thông tin vận đơn: {trackingResult.tracking_number}</h3>
                
                <div className="tracking-info">
                  <div className="info-group">
                    <h4>Thông tin người gửi</h4>
                    <p><strong>Tên:</strong> {trackingResult.sender_name}</p>
                    <p><strong>SĐT:</strong> {trackingResult.sender_phone}</p>
                    <p><strong>Địa chỉ:</strong> {trackingResult.sender_address}</p>
                  </div>
                  
                  <div className="info-group">
                    <h4>Thông tin người nhận</h4>
                    <p><strong>Tên:</strong> {trackingResult.recipient_name}</p>
                    <p><strong>SĐT:</strong> {trackingResult.recipient_phone}</p>
                    <p><strong>Địa chỉ:</strong> {trackingResult.recipient_address}</p>
                  </div>
                </div>
                
                <div className="package-details">
                  <p><strong>Cân nặng:</strong> {trackingResult.weight} kg</p>
                  <p><strong>Phí vận chuyển:</strong> {trackingResult.shipping_fee.toLocaleString()} đ</p>
                  <p><strong>Trạng thái:</strong> <span className="status">{trackingResult.status_display}</span></p>
                  <p><strong>Ngày tạo:</strong> {new Date(trackingResult.created_at).toLocaleDateString('vi-VN')}</p>
                </div>
                
                <div className="tracking-history">
                  <h4>Lịch sử vận chuyển</h4>
                  <ul className="timeline">
                    {trackingResult.tracking_history.map((item, index) => (
                      <li key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>{item.status_display}</h5>
                          <p>{item.location}</p>
                          <p>{item.description}</p>
                          <small>{new Date(item.timestamp).toLocaleString('vi-VN')}</small>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="services-section">
          <h2 className="section-title">Dịch vụ của chúng tôi</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Package />
              </div>
              <h3>Chuyển phát nhanh</h3>
              <p>
                Dịch vụ chuyển phát nhanh với thời gian giao hàng từ 1-2 ngày tùy khu vực.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Truck />
              </div>
              <h3>Vận chuyển hàng hóa</h3>
              <p>
                Dịch vụ vận chuyển hàng hóa với khối lượng lớn, giá cả hợp lý.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="icon-door"></i>
              </div>
              <h3>Giao hàng tận nơi</h3>
              <p>
                Dịch vụ giao hàng tận nơi, đảm bảo hàng hóa đến tay người nhận an toàn.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="icon-fragile"></i>
              </div>
              <h3>Vận chuyển hàng dễ vỡ</h3>
              <p>
                Dịch vụ vận chuyển hàng dễ vỡ với quy trình đóng gói cẩn thận, an toàn.
              </p>
            </div>
          </div>
        </div>
        
        <div className="process-section">
          <h2 className="section-title">Quy trình gửi hàng</h2>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Đăng ký gửi hàng</h3>
                <p>Liên hệ với chúng tôi qua hotline hoặc đến trực tiếp văn phòng để đăng ký gửi hàng.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Đóng gói hàng hóa</h3>
                <p>Hàng hóa được đóng gói cẩn thận, an toàn theo tiêu chuẩn vận chuyển.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Vận chuyển</h3>
                <p>Hàng hóa được vận chuyển đến điểm đích với thời gian nhanh chóng.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Giao hàng</h3>
                <p>Hàng hóa được giao đến tận tay người nhận, đảm bảo an toàn và đúng hẹn.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-section">
          <h2 className="section-title">Liên hệ gửi hàng</h2>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone />
              </div>
              <h3>Hotline</h3>
              <p>1900.5226 - 0942.26.26.26</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin />
              </div>
              <h3>Văn phòng</h3>
              <p>Nghệ An - Đà Nẵng - Quảng Ngãi</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <CreditCard />
              </div>
              <h3>Thanh toán</h3>
              <p>Tiền mặt, chuyển khoản, COD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;