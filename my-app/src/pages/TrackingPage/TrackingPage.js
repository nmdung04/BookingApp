import React, { useState } from 'react';
import { trackPackage, trackTicket } from '../../services/api';
import './TrackingPage.css';

const TrackingPage = () => {
  const [trackingType, setTrackingType] = useState('package');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!trackingNumber) {
      setError('Vui lòng nhập mã vận đơn hoặc mã vé');
      return;
    }
    
    setLoading(true);
    setError('');
    setTrackingResult(null);
    
    try {
      let response;
      if (trackingType === 'package') {
        response = await trackPackage(trackingNumber);
      } else {
        response = await trackTicket(trackingNumber);
      }
      
      setTrackingResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  const renderPackageResult = () => {
    const package_data = trackingResult;
    
    return (
      <div className="tracking-result">
        <h3>Thông tin vận đơn: {package_data.tracking_number}</h3>
        
        <div className="tracking-info">
          <div className="info-group">
            <h4>Thông tin người gửi</h4>
            <p><strong>Tên:</strong> {package_data.sender_name}</p>
            <p><strong>SĐT:</strong> {package_data.sender_phone}</p>
            <p><strong>Địa chỉ:</strong> {package_data.sender_address}</p>
          </div>
          
          <div className="info-group">
            <h4>Thông tin người nhận</h4>
            <p><strong>Tên:</strong> {package_data.recipient_name}</p>
            <p><strong>SĐT:</strong> {package_data.recipient_phone}</p>
            <p><strong>Địa chỉ:</strong> {package_data.recipient_address}</p>
          </div>
        </div>
        
        <div className="package-details">
          <p><strong>Cân nặng:</strong> {package_data.weight} kg</p>
          <p><strong>Phí vận chuyển:</strong> {package_data.shipping_fee.toLocaleString()} đ</p>
          <p><strong>Trạng thái:</strong> <span className="status">{package_data.status_display}</span></p>
          <p><strong>Ngày tạo:</strong> {new Date(package_data.created_at).toLocaleDateString('vi-VN')}</p>
        </div>
        
        <div className="tracking-history">
          <h4>Lịch sử vận chuyển</h4>
          <ul className="timeline">
            {package_data.tracking_history.map((item, index) => (
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
    );
  };

  const renderTicketResult = () => {
    const ticket = trackingResult;
    
    return (
      <div className="tracking-result">
        <h3>Thông tin vé: {ticket.ticket_number}</h3>
        
        <div className="ticket-info">
          <div className="info-group">
            <h4>Thông tin hành khách</h4>
            <p><strong>Tên:</strong> {ticket.passenger_name}</p>
            <p><strong>SĐT:</strong> {ticket.passenger_phone}</p>
            {ticket.passenger_email && <p><strong>Email:</strong> {ticket.passenger_email}</p>}
          </div>
          
          <div className="info-group">
            <h4>Thông tin chuyến đi</h4>
            <p><strong>Tuyến đường:</strong> {ticket.route}</p>
            <p><strong>Ngày khởi hành:</strong> {new Date(ticket.departure_date).toLocaleDateString('vi-VN')}</p>
            <p><strong>Giờ khởi hành:</strong> {ticket.departure_time}</p>
            <p><strong>Số ghế:</strong> {ticket.seat_number}</p>
          </div>
        </div>
        
        <div className="ticket-details">
          <p><strong>Giá vé:</strong> {ticket.price.toLocaleString()} đ</p>
          <p><strong>Trạng thái:</strong> <span className="status">{ticket.status_display}</span></p>
          <p><strong>Ngày đặt vé:</strong> {new Date(ticket.created_at).toLocaleDateString('vi-VN')}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="tracking-page">
      <div className="container">
        <h1 className="page-title">Tra cứu</h1>
        
        <div className="tracking-form-container">
          <div className="tracking-tabs">
            <button 
              className={`tab-button ${trackingType === 'package' ? 'active' : ''}`}
              onClick={() => setTrackingType('package')}
            >
              Tra cứu hàng hóa
            </button>
            <button 
              className={`tab-button ${trackingType === 'ticket' ? 'active' : ''}`}
              onClick={() => setTrackingType('ticket')}
            >
              Tra cứu vé
            </button>
          </div>
          
          <form className="tracking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="trackingNumber">
                {trackingType === 'package' ? 'Mã vận đơn' : 'Mã vé'}
              </label>
              <input
                type="text"
                id="trackingNumber"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder={trackingType === 'package' ? 'Nhập mã vận đơn' : 'Nhập mã vé'}
              />
            </div>
            
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Đang tra cứu...' : 'Tra cứu'}
            </button>
          </form>
          
          {error && <div className="error-message">{error}</div>}
          
          {trackingResult && (
            trackingType === 'package' ? renderPackageResult() : renderTicketResult()
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;