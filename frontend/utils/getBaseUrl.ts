export function getBaseURL() {
  if (typeof window !== 'undefined' && window.env) {
    return window.env.NEXT_PUBLIC_API_URL;
  }
  return 'http://localhost:3000';
}
