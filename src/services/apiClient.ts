import axios from "axios";

const API_BASE_URL = "https://academicspro-production.up.railway.app/api/v1/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Request Interceptor (Add Token & Set Headers Dynamically)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Auto-detect if sending JSON or FormData
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (For handling errors)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; 
    }
    return Promise.reject(error);
  }
);

export default apiClient;
