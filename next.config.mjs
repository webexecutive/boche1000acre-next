import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  staticPageGenerationTimeout: 180,
  async rewrites() {
    return [
      {
        source: "/api/submit",
        destination: "https://api.boche1000acre.com/submit",
      },
      {
        source: "/api/contact",
        destination: "https://api.boche1000acre.com/contact",
      },
    ];
  },
};

export default nextConfig;
