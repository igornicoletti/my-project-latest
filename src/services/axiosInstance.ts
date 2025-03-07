/**
 * axiosInstance
 *
 * This is a pre-configured instance of Axios, customized with a base URL and request interceptor.
 * The interceptor automatically adds the `Authorization` header with a Bearer token (if available)
 * from `localStorage` to all outgoing requests.
 *
 * @example
 * ```ts
 * const response = await axiosInstance.get('/some-endpoint')
 * console.log(response.data)
 * ```
 */
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // The base URL for the API requests
})

/**
 * Request Interceptor
 *
 * Before sending each request, this interceptor checks if there is a token stored in localStorage.
 * If a token exists, it adds an `Authorization` header to the request with the token in the format `Bearer <token>`.
 * This ensures that the API requests are authenticated with the user's token.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // Retrieve the token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // Add token to Authorization header
    }
    return config
  },
  (error) => {
    return Promise.reject(error) // Handle request errors
  }
)
