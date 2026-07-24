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