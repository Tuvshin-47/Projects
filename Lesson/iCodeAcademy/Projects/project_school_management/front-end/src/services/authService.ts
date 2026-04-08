import axios from "axios";
import type {
    LoginCredentials,
    RegisterData,
    AuthResponse,
    User,
} from "../types/Auth";

const API_BASE_URL = "http://localhost:8080";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials
    );
    return response.data;
  },

  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  },

  getCurrentUser: async (): Promise<User> => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getToken: (): string | null => {
    return localStorage.getItem("token");
  },

  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("token");
  },
};
