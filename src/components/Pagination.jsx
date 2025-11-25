const Pagination = ({ pagination, currentPage, onPageChange }) => {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      {/* Page Info */}
      <p className="text-gray-600 text-sm">
        Showing{" "}
        <span className="font-semibold text-amber-600">
          {(pagination.currentPage - 1) * pagination.itemsPerPage + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-amber-600">
          {Math.min(
            pagination.currentPage * pagination.itemsPerPage,
            pagination.totalItems
          )}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-amber-600">
          {pagination.totalItems}
        </span>{" "}
        items
      </p>

      {/* Pagination Buttons */}
      <div className="flex gap-2 flex-wrap justify-center">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!pagination.hasPrevPage}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            pagination.hasPrevPage
              ? "bg-amber-500 hover:bg-amber-600 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
          .filter((page) => {
            // Show first page, last page, current page, and 2 pages around current
            return (
              page === 1 ||
              page === pagination.totalPages ||
              Math.abs(page - currentPage) <= 2
            );
          })
          .map((page, index, array) => {
            // Add ellipsis if there's a gap
            const prevPage = array[index - 1];
            const showEllipsis = prevPage && page - prevPage > 1;

            return (
              <div key={page} className="flex gap-2">
                {showEllipsis && (
                  <span className="px-3 py-2 text-gray-400">...</span>
                )}
                <button
                  onClick={() => onPageChange(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    page === currentPage
                      ? "bg-amber-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {page}
                </button>
              </div>
            );
          })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!pagination.hasNextPage}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            pagination.hasNextPage
              ? "bg-amber-500 hover:bg-amber-600 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
