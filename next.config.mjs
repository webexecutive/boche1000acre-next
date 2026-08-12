import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base API URL from environment variables, with fallback to http://localhost:5000 for local testing
const apiBaseUrl =
  process.env.SERVER_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://api.boche1000acre.com");

const cleanBaseUrl = apiBaseUrl.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  staticPageGenerationTimeout: 180,
  async rewrites() {
    return [
      {
        source: "/api/submit",
        destination: `${cleanBaseUrl}/submit`,
      },
      {
        source: "/api/contact",
        destination: `${cleanBaseUrl}/contact`,
      },
    ];
  },
};

export default nextConfig;
