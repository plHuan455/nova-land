/* eslint-disable react/no-danger */
import React from 'react';

// import imgPdf from 'assets/images/pdf.png';
import Icon from 'components/atoms/Icon';
// import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';

export interface TableCategoryItem {
  documentName: string;
  dataByQuarter: {
    colSpan?: number;
    date?: string;
  }[];
}

export interface TableCategoryHeader {
  id: number;
  value: string;
}

export interface TableCategoryProps {
  dataHeader: TableCategoryHeader[];
  dataBody: TableCategoryItem[];
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
}

interface dataFileItemProps {
  fileName: string;
}

export const DataFileItem: React.FC<dataFileItemProps> = ({ fileName }) => (
  <div className="t-tableCategory_dataFileItem">
    <div className="t-tableCategory_dataFileItem_icon">
      {/* <Image ratio="1x1" alt="pdf" src={imgPdf} /> */}
      <Icon iconName="filePDF" />
    </div>
    <div className="t-tableCategory_dataFileItem_fileName">
      <Text modifiers={['darkMidnightBlue', '300', '14x20']}>{fileName}</Text>
    </div>
    <Icon size="20" iconName="download" />
  </div>
);

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
                  <td
                    className="t-tableCategory_body_cell"
                    colSpan={1}
                  >
                    <Text
                      modifiers={['16x24', 'jet', '300']}
                      content={e.documentName}
                    />
                  </td>
                  {e.dataByQuarter.length > 0 && e.dataByQuarter.map((val, stt) => (
                    <td
                      className="t-tableCategory_body_cell"
                      key={`tableBodyCell-${stt.toString()}`}
                      colSpan={val.colSpan || 1}
                    >
                      {val.date ? <DataFileItem fileName={val.date} /> : <></>}
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        )}
        {totalPage > 0 && (
          <tfoot className="t-tableCategory_foot">
            <tr>
              <td colSpan={dataHeader.length}>
                <Pagination
                  totalPage={totalPage}
                  pageCurrent={currentPage}
                  handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
                />
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  </div>
);

export default TableCategory;
