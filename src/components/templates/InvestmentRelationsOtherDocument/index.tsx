import React, { useState } from 'react';
import { ValueType } from 'react-select';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

/** ******MENU********* */
export interface MenuItemType {
  title?: string;
  slug?: string;
  id?: number;
  target?: string;
}

export interface MenuType {
  id: number;
  title: string;
  slug: string;
  target?: string;
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
          key={`menu-item-${i.toString()}`}
        >
          <div
            onMouseEnter={() => onHoverSub(e.id)}
            onMouseLeave={() => onHoverSub(-1)}
            key={String(e.id)}
          >
            <div className="t-menu_subHead" onClick={() => onClickSub(e.id)}>
              <div className="t-menu_subHead-title">
                <Link
                  target={e.target}
                  href={e.slug}
                >
                  <Text type="span" modifiers={['darkMidnightBlue', '600', '18x22', 'fontLexend']}>{e.title}</Text>
                </Link>
              </div>
              {e?.subMenu?.length > 0 && (
                <div className="t-menu_subHead-icon">
                  <Icon size="24" iconName="arrowUp" />
                </div>
              )}
            </div>
            <ul className="t-menu_subList">
              {e?.subMenu?.length > 0 && e.subMenu.map((s, idx) => (
                <li key={`menu_subList-${idx.toString()}`}>
                  {s.slug && (
                  <Link
                    target={s.target}
                    href={s.slug}
                    activeClassName="active"
                    customClassName={`t-menu_link ${(s.id === idSubActive) && 'active'}`}
                  >
                    <div className="t-menu_subHead_title">
                      <Text type="span" modifiers={['400', '16x24', 'fontLexend', 'dimGray']}>{s.title}</Text>
                    </div>
                    <div className="t-menu_subHead-iconSub">
                      <Icon size="24" iconName="arrowNextSlateGray" />
                    </div>
                  </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

/** ******* Regulations ********** */

export interface RegulationsType {
  img: string,
  title?: string,
  date?: string,
  titleBtn?: string;
}
interface RegulationsProps {
  title: string,
  textSort: string,
  dataRegulations: RegulationsType[],
  handleRegulation?: (item: RegulationsType) => void;
  // Sort
  selectedSort?: OptionType | null;
  sortOptions: OptionType[];
  handleSort?: (value: ValueType<OptionType, false>) => void;
  // Pagination
  currPage?: number;
  totalPage: number;
  handleChangePage: (page: number) => void;
}

const Regulations: React.FC<RegulationsProps> = ({
  title,
  textSort,
  dataRegulations,
  handleRegulation,
  selectedSort,
  sortOptions,
  handleSort,
  currPage,
  totalPage,
  handleChangePage,
}) => (
  <div className="t-regulations">
    <div className="t-regulations_title">
      <Heading modifiers={['jet', '24x30', '600', 'fontLexend']} content={title} />
    </div>
    <div className="t-regulations_wrapContent">
      <div className="t-regulations_top">
        <div className="t-regulations_sort">
          <div className="t-regulations_sort_text">
            <Text modifiers={['14x20', 'right', '400', 'fontLexend', 'dimGray']} content={textSort} />
          </div>
          <div className="t-regulations_sort_pulldown">
            <Pulldown
              placeholder="Chọn"
              value={selectedSort}
              options={sortOptions}
              handleChange={handleSort}
            />
          </div>
        </div>
        <div className="t-regulations_pagination">
          <Pagination
            pageCurrent={currPage}
            totalPage={totalPage}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
      <div className="t-regulations_wrapItem">
        {
          dataRegulations.map((item, idx) => (
            <div key={`regulations-${idx.toString()}`} className="t-regulations_item">
              <div className="t-regulations_content">
                <div className="t-regulations_image">
                  <Image alt={item.title} ratio="91x96" src={item.img} />
                </div>
                <div className="t-regulations_desc">
                  <div className="t-regulations_desc_title">
                    <Text modifiers={['jet', '16x24', '400', 'fontLexend']} content={item.title} />
                  </div>
                  <div className="t-regulations_desc_date">
                    <Text modifiers={['12x17', 'fontLexend', '400', 'dimGray']} content={item.date} />
                  </div>
                </div>
              </div>
              <div className="t-regulations_wrapButton">
                <Button
                  modifiers="iconRight"
                  iconName="down"
                  onClick={() => handleRegulation
                  && handleRegulation(item)}
                >
                  {item.titleBtn}

                </Button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="t-regulations_paginationButton">
        <Pagination
          pageCurrent={currPage}
          totalPage={totalPage}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  </div>
);

/** ******* InvestmentRelationsOtherDocument ********** */
interface InvestmentRelationsOtherDocumentProps extends Omit<RegulationsProps, 'title' | 'textSort'> {
  dataMenu: MenuType[];
}

const InvestmentRelationsOtherDocument: React.FC<InvestmentRelationsOtherDocumentProps> = ({
  dataMenu,
  dataRegulations,
  handleRegulation,
  selectedSort,
  sortOptions,
  handleSort,
  currPage,
  totalPage,
  handleChangePage,
}) => (
  <div className="t-investmentRelationsOtherDocument">
    <Container>
      <div className="t-investmentRelationsOtherDocument_content">
        <div className="t-investmentRelationsOtherDocument_left">
          <Menu data={dataMenu} />
        </div>
        <div className="t-investmentRelationsOtherDocument_right">
          <Regulations
            title="Điều lệ"
            textSort="Sắp xếp:"
            dataRegulations={dataRegulations}
            handleRegulation={handleRegulation}
            selectedSort={selectedSort}
            sortOptions={sortOptions}
            handleSort={handleSort}
            currPage={currPage}
            totalPage={totalPage}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </Container>
  </div>
);

Regulations.defaultProps = {
  currPage: 1,
  selectedSort: undefined,
  handleSort: undefined,
  handleRegulation: undefined,
};

InvestmentRelationsOtherDocument.defaultProps = {
};

export default InvestmentRelationsOtherDocument;
