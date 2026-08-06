import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found | boCHE 1000 Acre",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">

      {/* Image */}
      <Image
        src="/images/404.webp"
        alt="Page Not Found"
        title="Page Not Found"
        width={384}
        height={384}
        className="w-72 md:w-96 mb-8 drop-shadow-xl"
        priority
      />

    

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>

    </div>
  );
};

export default NotFound;