import { Link } from "react-router";
import { motion } from "motion/react";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center bg-[#f8f6f1]">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-9xl text-[#b4532a] mb-4">
            404
          </h1>
          <h2 className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl text-[#1e3a34] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#2b2b2b] text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#b4532a] text-white px-6 py-3 hover:bg-[#8f3f1f] transition-colors"
            >
              <HomeIcon size={20} />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-[#1e3a34] text-[#1e3a34] px-6 py-3 hover:bg-[#1e3a34] hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
