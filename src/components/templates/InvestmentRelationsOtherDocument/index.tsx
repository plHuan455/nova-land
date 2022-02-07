import React, { useState } from 'react';

import OtherDocuments, { dataType } from '../OtherDocuments';

import imgPdf from 'assets/images/pdf.png';
import Icon, { IconName } from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

const dataList: dataType[] = [
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
];
export interface MenuItemType {
  title: string;
  slug: string;
  icon: IconName;
  id: number;
}

export interface MenuType {
  id: number;
  title: string;
  slug: string;
  icon: IconName;
  subMenu: MenuItemType[];
}

interface MenuProps {
  data: MenuType[];
}
export const Menu: React.FC<MenuProps> = ({ data }) => {
  const [idActive, setIdActive] = useState<number>();
  const [idSubActive, setIdSubActive] = useState<number>();
  const [hoverActive, setHoverActive] = useState<number>(1);

  const onClickSub = (id: number) => {
    if (idActive === id) {
      setIdActive(undefined);
    } else {
      setIdActive(id);
    }
  };

  const onHoverSub = (id: number) => {
    setHoverActive(id);
    setIdSubActive(-1);
  };

  return (
    <ul className="t-menu">
      {data?.map((e, i) => (
        <li
          className={mapModifiers(
            't-menu_item',
            (e.id === idActive || e.id === hoverActive) && 'show',
            (e.id === idActive && !(e?.subMenu?.length)) && 'active',
          )}
          key={`aboutUsMenu-${i.toString()}`}
        >
          {e?.subMenu?.length > 0 ? (
            <div
              onMouseEnter={() => onHoverSub(e.id)}
              onMouseLeave={() => onHoverSub(-1)}
              className={String(e.id)}
            >
              {e.icon ? (
                <Link
                  target="#"
                  href="/"
                >
                  <div className="t-menu_subHead">
                    <div className="t-menu_subHead-title">
                      <Text modifiers={['darkMidnightBlue', '600', '18x22', 'fontLexend']}>{e.title}</Text>
                    </div>
                    <div className="t-menu_subHead-icon">
                      <Icon size="24" iconName={e.icon} />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="t-menu_subHead" onClick={() => onClickSub(e.id)}>
                  <Text modifiers={['darkMidnightBlue', '600', '18x22', 'fontLexend']}>{e.title}</Text>
                </div>
              )}
              <ul className="t-menu_subList">
                {e.subMenu.map((s, idx) => (
                  <li key={`aboutUsMenuChild-${idx.toString()}`}>
                    {s.slug && (
                      <Link
                        target="_self"
                        href="/"
                        activeClassName="active"
                        customClassName={`t-menu_link ${(s.id === idSubActive) && 'active'}`}
                      >
                        <div className="t-menu_subHead_title">
                          <Text modifiers={['400', '16x24', 'fontLexend', 'dimGray']}>{s.title}</Text>
                        </div>
                        <div className="t-menu_subHead-iconSub">
                          <Icon size="24" iconName={e.icon} />
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div className="t-menu_subHead-last">
                <Text modifiers={['darkMidnightBlue', '600', '18x22', 'fontLexend']}>{e.title}</Text>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

interface InvestmentRelationsOtherDocumentProps {
  dataMenu: MenuType[];
}

const InvestmentRelationsOtherDocument: React.FC<InvestmentRelationsOtherDocumentProps> = ({
  dataMenu,
}) => (
  <div className="t-investmentRelationsOtherDocument">
    <Container>
      <div className="t-investmentRelationsOtherDocument_content">
        <div className="t-investmentRelationsOtherDocument_left">
          <Menu data={dataMenu} />
        </div>
        <div className="t-investmentRelationsOtherDocument_right">
          <OtherDocuments
            heading="Tài Liệu Khác"
            data={dataList}
            btnText="Xem tất cả Tài liệu khác"
          />
        </div>
      </div>
    </Container>
  </div>
);

InvestmentRelationsOtherDocument.defaultProps = {
};

export default InvestmentRelationsOtherDocument;
