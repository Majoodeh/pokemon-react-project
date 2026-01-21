function Pagination({ next, prev, onPageChange }) {
  return (
    <div className="  flex justify-center items-center gap-4 my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(prev)}
        disabled={!prev}
        className={` cursor-pointer px-4 py-2 rounded-lg font-medium transition-colors ${
          !prev
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        }`}
      >
        &larr; Previous
      </button>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(next)}
        disabled={!next}
        className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-colors ${
          !next
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
        }`}
      >
        Next &rarr;
      </button>
    </div>
  );
}

export default Pagination;
