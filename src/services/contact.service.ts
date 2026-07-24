import axios from "axios";

export interface ContactRequest {
  name: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function submitContact(
  data: ContactRequest
): Promise<ContactResponse> {
  const response = await api.post<ContactResponse>(
    "/contact",
    data
  );

  return response.data;
}