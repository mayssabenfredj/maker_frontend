import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStore } from "../../stores/useStore";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}) => {
  const { theme } = useStore();

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Affichage de{" "}
          <span className="text-neon-blue font-medium">{startItem}</span> à{" "}
          <span className="text-neon-blue font-medium">{endItem}</span> sur{" "}
          <span className="text-white font-medium">{totalItems}</span> résultats
        </div>

        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-3 rounded-xl transition-all duration-300 ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed bg-dark-800/50"
                : "text-gray-300 hover:text-white hover:bg-neon-blue/20 border border-neon-blue/20 hover:border-neon-blue/40"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          <div className="flex items-center space-x-1">
            {getVisiblePages().map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="px-3 py-2 text-gray-500">...</span>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPageChange(page as number)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow"
                        : "text-gray-300 hover:text-white hover:bg-neon-blue/20 border border-neon-blue/20 hover:border-neon-blue/40"
                    }`}
                  >
                    {page}
                  </motion.button>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-xl transition-all duration-300 ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed bg-dark-800/50"
                : "text-gray-300 hover:text-white hover:bg-neon-blue/20 border border-neon-blue/20 hover:border-neon-blue/40"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
