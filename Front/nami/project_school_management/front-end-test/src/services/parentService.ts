import axios from "axios";
import type { Parent, Child, ParentFormData } from "../types/Parent";

const API_BASE_URL = "http://localhost:8080/api";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const parentService = {
  //   GET all parents
  getAllParents: async (): Promise<Parent[]> => {
    const response = await api.get("/parents");
    return response.data;
  },

  //   GET parent by id
  getParentById: async (id: number): Promise<Parent> => {
    const response = await api.get(`parents/${id}`);
    return response.data;
  },

  //   POST create new parent
  createParent: async (
    parent: ParentFormData
  ): Promise<{ message: string; id: number }> => {
    const response = await api.post("/parents", parent);
    return response.data;
  },

  //   PUT update parent
  updateParent: async (
    id: number,
    parent: Partial<ParentFormData>
  ): Promise<{ message: string; id: number }> => {
    const response = await api.patch(`/parents/${id}`, parent);
    return response.data;
  },

 // DELETE delete parent by id
  deleteParent: async (
    id: number
  ): Promise<{ message: string; id: number }> => {
    const response = await api.delete(`/parents/${id}`);
    return response.data;
  },

  //   Get children of parent
  getParentChildren: async (parentId: number): Promise<Child[]> => {
    const response = await api.get(`/parents/${parentId}/children`);
    return response.data;
  },
};
