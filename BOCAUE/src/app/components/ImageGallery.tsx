import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string; caption?: string }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden border-2 border-[#d9c6a5] aspect-video"
            onClick={() => setSelectedIndex(index)}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-[#b4532a] transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-[#b4532a] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {images[selectedIndex].caption && (
                <p className="text-white text-center mt-4">
                  {images[selectedIndex].caption}
                </p>
              )}
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-[#b4532a] transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
