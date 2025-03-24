import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, link }) => {
  return (
    <Link to={link} className="service-card">
      <div className="service-icon">{icon}</div>
      <div className="service-title">{title}</div>
    </Link>
  );
};

export default ServiceCard;