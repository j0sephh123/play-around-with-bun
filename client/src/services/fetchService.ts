import { API_URL } from "../../../config";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | null;
};

export default async function fetchService<T>(
  endpoint: string,
  { method = "GET", headers = {}, body = null }: RequestOptions = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers: { ...defaultHeaders, ...headers },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status}`);
  }

  const data = await response.json();
  return data as T;
}
