import React, { useEffect, useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [isChanging, setIsChanging] = useState<boolean>(false); // State to track if a page change is in progress

  const handlePrev = () => {
    if (currentPage > 1 && !isChanging) {
      setIsChanging(true);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !isChanging) {
      setIsChanging(true);
      onPageChange(currentPage + 1);
    }
  };

  // Reset isChanging state after a delay
  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 500); // Adjust the delay as needed (500ms in this case)

      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  return (
    <div className="flex items-center space-x-4 text-lg">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1 || isChanging}
        className="bg-lime px-6 rounded-sm text-black disabled:bg-opacity-80 disabled:cursor-not-allowed disabled:text-[#ffffff64]">
        Prev
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages || isChanging}
        className="bg-lime px-6 rounded-sm text-black disabled:bg-opacity-80 disabled:cursor-not-allowed disabled:text-[#ffffff64]">
        Next
      </button>
    </div>
  );
};

export default Pagination;
