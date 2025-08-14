import React from 'react'

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div>
      <div className="flex items-center justify-center mt-4 mb-2 ">
        <button
          disabled={currentPage === 1}
          className="border px-6 py-2 bg-[#fff]"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span className="border px-6 py-2 bg-[#fff]">
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          className="border px-6 py-2 bg-[#fff]"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
