import { useState, useMemo, useEffect } from "react";

export const useMarketPagination = <T>(
  data: T[] = [],
  itemsPerPage: number = 5
) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(data.length / itemsPerPage)
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [data, totalPages, page]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [page, data, itemsPerPage]);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return {
    page,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    setPage,
  };
};