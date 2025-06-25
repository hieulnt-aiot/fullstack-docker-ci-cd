export {};

declare global {
  interface Window {
    env: {
      NEXT_PUBLIC_API_URL: string;
    };
  }
}
