import React, { useState, useEffect } from 'react';
import { getSchedules } from '../services/api';
import { Clock, MapPin, Calendar, CreditCard, Phone } from 'lucide-react';
import './PassengerTransportPage.css';

const PassengerTransportPage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await getSchedules({});
        setSchedules(response.data.results || []);
      } catch (err) {
        setError('Failed to load schedules');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  // Fallback data if API fails
  const fallbackSchedules = [
    {
      id: 1,
      route: { origin: 'Nghệ An', destination: 'Đà Nẵng', distance: 500, duration: 480 },
      vehicle_type: 'sleeper',
      vehicle_type_display: 'Xe giường nằm',
      departure_times: '06:00, 08:00, 10:00, 14:00, 20:00',
      price: 300000
    },
    {
      id: 2,
      route: { origin: 'Đà Nẵng', destination: 'Nghệ An', distance: 500, duration: 480 },
      vehicle_type: 'sleeper',
      vehicle_type_display: 'Xe giường nằm',
      departure_times: '06:00, 08:00, 10:00, 14:00, 20:00',
      price: 300000
    },
    {
      id: 3,
      route: { origin: 'Đà Nẵng', destination: 'Quảng Ngãi', distance: 120, duration: 120 },
      vehicle_type: 'seater',
      vehicle_type_display: 'Xe ghế ngồi',
      departure_times: '07:00, 09:00, 11:00, 13:00, 15:00',
      price: 150000
    },
    {
      id: 4,
      route: { origin: 'Quảng Ngãi', destination: 'Đà Nẵng', distance: 120, duration: 120 },
      vehicle_type: 'seater',
      vehicle_type_display: 'Xe ghế ngồi',
      departure_times: '07:00, 09:00, 11:00, 13:00, 15:00',
      price: 150000
    },
    {
      id: 5,
      route: { origin: 'Nghệ An', destination: 'Quảng Ngãi', distance: 620, duration: 600 },
      vehicle_type: 'limousine',
      vehicle_type_display: 'Xe Limousine',
      departure_times: '08:00, 20:00',
      price: 400000
    },
    {
      id: 6,
      route: { origin: 'Quảng Ngãi', destination: 'Nghệ An', distance: 620, duration: 600 },
      vehicle_type: 'limousine',
      vehicle_type_display: 'Xe Limousine',
      departure_times: '08:00, 20:00',
      price: 400000
    }
  ];

  const displaySchedules = schedules.length > 0 ? schedules : fallbackSchedules;

  return (
    <div className="passenger-transport">
      <div className="container">
        <h1 className="page-title">Vận tải hành khách</h1>
        
        <div className="transport-intro">
          <div className="intro-content">
            <p className="intro-text">
              Hải Hoàng Gia cung cấp dịch vụ vận tải hành khách chất lượng cao trên tuyến Nghệ An - Đà Nẵng - Quảng Ngãi với đội xe hiện đại, thoải mái và an toàn.
            </p>
            <p className="intro-text">
              Chúng tôi cam kết mang đến cho quý khách hàng những chuyến đi an toàn, thoải mái với đội ngũ lái xe chuyên nghiệp, giàu kinh nghiệm và thân thiện.
            </p>
            
            <div className="intro-details">
              <div className="detail-item">
                <Clock className="detail-icon" />
                <div className="detail-content">
                  <h3>Lịch trình</h3>
                  <p>Hàng ngày, nhiều chuyến trong ngày</p>
                </div>
              </div>
              
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <div className="detail-content">
                  <h3>Tuyến đường</h3>
                  <p>Nghệ An - Đà Nẵng - Quảng Ngãi</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="intro-image">
            <img src="/placeholder.svg?height=400&width=600" alt="Vận tải hành khách" />
          </div>
        </div>
        
        <div className="fleet-section">
          <h2 className="section-title">Đội xe của chúng tôi</h2>
          
          <div className="fleet-grid">
            <div className="fleet-card">
              <div className="fleet-image">
                <img src="/placeholder.svg?height=250&width=400" alt="Xe giường nằm" />
              </div>
              <div className="fleet-content">
                <h3>Xe giường nằm</h3>
                <p>
                  Xe giường nằm cao cấp, thoải mái với đầy đủ tiện nghi hiện đại.
                </p>
              </div>
            </div>
            
            <div className="fleet-card">
              <div className="fleet-image">
                <img src="/placeholder.svg?height=250&width=400" alt="Xe ghế ngồi" />
              </div>
              <div className="fleet-content">
                <h3>Xe ghế ngồi</h3>
                <p>
                  Xe ghế ngồi rộng rãi, thoải mái với thiết kế hiện đại.
                </p>
              </div>
            </div>
            
            <div className="fleet-card">
              <div className="fleet-image">
                <img src="/placeholder.svg?height=250&width=400" alt="Xe Limousine" />
              </div>
              <div className="fleet-content">
                <h3>Xe Limousine</h3>
                <p>
                  Xe Limousine sang trọng, đẳng cấp với số lượng ghế giới hạn.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking-section">
          <h2 className="section-title">Hướng dẫn đặt vé</h2>
          
          <div className="booking-grid">
            <div className="booking-card">
              <div className="booking-icon">
                <Phone />
              </div>
              <h3>Đặt vé qua điện thoại</h3>
              <p>
                Gọi hotline 1900.5226 hoặc 0942.26.26.26 để đặt vé.
              </p>
            </div>
            
            <div className="booking-card">
              <div className="booking-icon">
                <i className="icon-online"></i>
              </div>
              <h3>Đặt vé trực tuyến</h3>
              <p>
                Đặt vé trực tuyến qua website hoặc ứng dụng.
              </p>
            </div>
            
            <div className="booking-card">
              <div className="booking-icon">
                <MapPin />
              </div>
              <h3>Đặt vé tại quầy</h3>
              <p>
                Đến trực tiếp văn phòng đại diện để đặt vé.
              </p>
            </div>
            
            <div className="booking-card">
              <div className="booking-icon">
                <CreditCard />
              </div>
              <h3>Thanh toán</h3>
              <p>
                Thanh toán tiền mặt, chuyển khoản hoặc thẻ tín dụng.
              </p>
            </div>
          </div>
        </div>
        
        <div className="schedule-section">
          <h2 className="section-title">Lịch trình chuyến xe</h2>
          
          {loading ? (
            <div className="loading">Loading schedules...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="schedule-table">
              <table>
                <thead>
                  <tr>
                    <th>Tuyến đường</th>
                    <th>Loại xe</th>
                    <th>Giờ xuất phát</th>
                    <th>Giá vé</th>
                  </tr>
                </thead>
                <tbody>
                  {displaySchedules.map(schedule => (
                    <tr key={schedule.id}>
                      <td>{schedule.route.origin} - {schedule.route.destination}</td>
                      <td>{schedule.vehicle_type_display}</td>
                      <td>{schedule.departure_times}</td>
                      <td>{schedule.price.toLocaleString()}đ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <p className="schedule-note">
            * Lịch trình có thể thay đổi tùy theo điều kiện thời tiết và tình hình giao thông. Vui lòng liên hệ hotline để biết thông tin chính xác nhất.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassengerTransportPage;