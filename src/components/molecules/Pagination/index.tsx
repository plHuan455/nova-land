import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';

import Icon from 'components/atoms/Icon';

interface PaginationProps {
  totalPage: number;
  pageCurrent?: number;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  handleChangePage: (val: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPage,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 2,
  pageCurrent,
  handleChangePage,
}) => {
  const { pathname, search } = useLocation();
  const [pageActive, setPageActive] = useState(0);

  const handlePageClick = (currentPage: { selected: number }) => {
    const { selected } = currentPage;
    handleChangePage(selected + 1);
    setPageActive(selected);
  };

  useEffect(() => {
    setPageActive(pageCurrent ? pageCurrent - 1 : 0);
  }, [pageCurrent]);

  return (
    <>
      {totalPage > 1 ? (
        <div className="o-pagination">
          <ReactPaginate
            previousLabel={(
              <Icon
                iconName="arrowPrevSlateGray"
                size="16"
              />
            )}
            nextLabel={(
              <Icon
                iconName="arrowNextSlateGray"
                size="16"
              />
            )}
            breakLabel="..."
            hrefBuilder={(pageIndex) => {
              const param = new URLSearchParams(search);
              const newParam = param;
              newParam.set('page', pageIndex.toString());
              return (`${pathname}?${param}`);
            }}
            pageCount={totalPage}
            forcePage={pageActive}
            onPageChange={handlePageClick}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            containerClassName="main"
            breakClassName="page break"
            previousClassName="page"
            nextClassName="page"
            pageClassName="page"
            activeClassName="active-page"
            pageLinkClassName="link-page"
            breakLinkClassName="link-page link-break"
            nextLinkClassName="link-page link-next"
            previousLinkClassName="link-page link-previous"
          />
        </div>
      )
        : null}
    </>
  );
};

Pagination.defaultProps = {
  pageCurrent: undefined,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 3,
};

export default Pagination;
