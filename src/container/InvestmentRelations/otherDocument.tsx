import React from 'react';

import imgPdf from 'assets/images/pdf.png';
import Animate from 'components/organisms/Animate';
import OtherDocuments, { dataType } from 'components/templates/OtherDocuments';

const dataList: dataType[] = [
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị số 01/2022-NQ.HĐQT-NVLG thông qua việc góp thêm vốn vào Công ty TNHH Đầu tư Phát triển nhà ở và Hạ tầng sài gòn',
  },
  {
    pdfImg: imgPdf,
    fileName: 'CBTT thay đổi số lượng cổ phiếu có quyền biểu quyết đang lưu hành',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Báo cáo kết quả phát hành cổ phiếu để trả cổ tức',
  },
];

const OtherDocumentContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-investmentRelations_otherDocument">
      <OtherDocuments
        heading="Tài Liệu Khác"
        data={dataList}
        btnText="Xem tất cả Tài liệu khác"
      />
    </div>
  </Animate>
);

export default OtherDocumentContainer;
