import React from 'react';

import Text from 'components/atoms/Text';

interface TableCategoryItem {
  documentName: string;
  dataByQuarter: {
    colspan: number;
    date?: string;
  }[];
}

interface TableCategoryHeader {
  id: number;
  value: string;
}

interface TableCategoryProps {
  dataHeader: TableCategoryHeader[];
  dataBody: TableCategoryItem[];
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
}

const TableCategory: React.FC<TableCategoryProps> = ({
  dataHeader,
  dataBody,
  totalPage,
  currentPage,
  handleChangePage,
}) => (
  <div className="t-tableCategory">
    <div className="t-tableCategory_table">
      <table className="t-tableCategory_wrap">
        <thead className="t-tableCategory_header">
          <tr className="t-tableCategory_header_row">
            {dataHeader.map((item, index) => (
              <th
                className="t-tableCategory_header_cell"
                key={`tableHeader-${index.toString()}`}
              >
                <Text
                  modifiers={
                    index === 0 ? ['20x28', '500', 'white', 'left']
                      : ['20x28', '300', 'white', 'center']
                  }
                  content={item.value}
                />
              </th>
            ))}
          </tr>
        </thead>
        {dataBody.length > 0 && (
          <tbody>
            {dataBody.map((e, i) => (
              <>
                <tr
                  className="t-tableCategory_body_row"
                  key={`tableBody-${i.toString()}`}
                >
                  {e.dataByQuarter.map((val, stt) => (
                    <td
                      className="t-tableCategory_body_cell"
                      key={`tableBodyCell-${stt.toString()}`}
                      colSpan={val.colspan}
                    >
                      {val.date ? <></>}
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        ) }
      </table>
    </div>
  </div>
);

TableCategory.defaultProps = {
  currentPage: undefined,
  handleChangePage: undefined,
};

export default TableCategory;
