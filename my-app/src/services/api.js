import axios from 'axios';

const API_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Core API
export const getSliders = () => api.get('/sliders/');
export const getAboutUs = () => api.get('/about/');
export const submitContact = (data) => api.post('/contacts/', data);

// Services API
export const getServices = (type) => api.get(`/services/services/${type ? `?type=${type}` : ''}`);
export const getVehicles = (type) => api.get(`/services/vehicles/${type ? `?type=${type}` : ''}`);
export const getRoutes = () => api.get('/services/routes/');
export const getSchedules = (params) => {
  const queryParams = new URLSearchParams();
  if (params.origin) queryParams.append('origin', params.origin);
  if (params.destination) queryParams.append('destination', params.destination);
  if (params.vehicle_type) queryParams.append('vehicle_type', params.vehicle_type);
  
  return api.get(`/services/schedules/?${queryParams.toString()}`);
};

// Tracking API
export const trackPackage = (trackingNumber) => 
  api.get(`/tracking/package/?tracking_number=${trackingNumber}`);
export const trackTicket = (ticketNumber) => 
  api.get(`/tracking/ticket/?ticket_number=${ticketNumber}`);

// News API
export const getCategories = () => api.get('/news/categories/');
export const getPosts = (params) => {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append('category', params.category);
  if (params?.featured) queryParams.append('featured', 'true');
  
  return api.get(`/news/posts/?${queryParams.toString()}`);
};
export const getPost = (slug) => api.get(`/news/posts/${slug}/`);

export default api;