import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ValueType } from 'react-select';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import Pulldown, { OptionType } from 'components/molecules/Pulldown';
import Container from 'components/organisms/Container';
import { OtherDocumentCategoriesDataTypes } from 'services/documents/types';
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

export interface MenuProps {
  data: OtherDocumentCategoriesDataTypes[];
  handleClick?: (e: number) => void;
  handleChangeTitle?: (name: string) => void;
}
export const Menu: React.FC<MenuProps> = ({ data, handleClick, handleChangeTitle }) => {
  const [idActive, setIdActive] = useState<number | undefined>(data && data[0]?.id);

  const onClickSub = (id: number) => {
    if (idActive === id) {
      setIdActive(undefined);
    } else {
      setIdActive(id);
    }
  };

  return (
    <ul className="t-menu">
      {data.length > 0 && data.map((e, i) => (
        <li
          className={mapModifiers(
            't-menu_item',
            (e.id === idActive) && 'show',
            (e.id === idActive && !(e?.subMenu?.length)) && 'active',
          )}
          key={`menu-item-${i.toString()}`}
        >
          <div
            key={String(e.id)}
          >
            <div
              className="t-menu_subHead"
              onClick={() => {
                onClickSub(e.id);
                if (handleClick) handleClick(e.id);
                if (handleChangeTitle) handleChangeTitle(e.name);
              }}
            >
              <div className="t-menu_subHead-title">
                <Text type="span" modifiers={['darkMidnightBlue', '600', '18x22', 'fontLexend']}>{e.name}</Text>
              </div>
              {e.subMenu && e.subMenu.length > 0 && (
                <div className="t-menu_subHead-icon">
                  <Icon size="24" iconName="arrowUp" />
                </div>
              )}
            </div>
            <ul className="t-menu_subList">
              {e.subMenu && e.subMenu.length > 0 && e.subMenu.map((s, idx) => (
                <li
                  key={`menu_subList-${idx.toString()}`}
                  onClick={() => {
                    if (handleClick) handleClick(s.id);
                    if (handleChangeTitle) handleChangeTitle(s.name);
                  }}
                >
                  <div className="t-menu_link">
                    <div className="t-menu_subHead_title">
                      <Text type="span" modifiers={['400', '16x24', 'fontLexend', 'dimGray']}>{s.name}</Text>
                    </div>
                    <div className="t-menu_subHead-iconSub">
                      <Icon size="24" iconName="arrowNextSlateGray" />
                    </div>
                  </div>
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
  href?: string;
}
interface RegulationsProps {
  title: string,
  textSort: string,
  dataRegulations: RegulationsType[],
  selectedSort?: OptionType | null;
  sortOptions: OptionType[];
  handleSort?: (value: ValueType<OptionType, false>) => void;
  currPage?: number;
  totalPage: number;
  handleChangePage: (page: number) => void;
  loading?: boolean;
}

const Regulations: React.FC<RegulationsProps> = ({
  title,
  textSort,
  dataRegulations,
  selectedSort,
  sortOptions,
  handleSort,
  currPage,
  totalPage,
  handleChangePage,
  loading,
}) => {
  const { t } = useTranslation();

  return (
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
                placeholder={t('general.select')}
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
          {loading ? <Loading isShow /> : (
            <>
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
                      <Link
                        href={item.href}
                        target="_blank"
                        useExternal
                      >
                        <Button
                          modifiers="iconRight"
                          iconName="down"
                        >
                          {item.titleBtn}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </>
          )}
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
};

/** ******* InvestmentRelationsOtherDocument ********** */
export interface InvestmentRelationsOtherDocumentProps extends Omit<RegulationsProps, 'title' | 'textSort'> {
  dataMenu: OtherDocumentCategoriesDataTypes[];
  handleClick?: (e: number) => void;
  loading?: boolean;
  titleActive: string;
}

const InvestmentRelationsOtherDocument: React.FC<InvestmentRelationsOtherDocumentProps> = ({
  dataMenu,
  dataRegulations,
  selectedSort,
  sortOptions,
  handleSort,
  currPage,
  totalPage,
  handleChangePage,
  handleClick,
  loading,
  titleActive,
}) => {
  const { t } = useTranslation();

  const [title, setTitle] = useState<string>(titleActive);

  useEffect(() => (
    setTitle(titleActive)
  ), [titleActive]);

  return (
    <div className="t-investmentRelationsOtherDocument">
      <Container>
        <div className="t-investmentRelationsOtherDocument_content">
          <div className="t-investmentRelationsOtherDocument_left">
            {dataMenu.length > 0 && (
              <Menu
                data={dataMenu}
                handleClick={handleClick}
                handleChangeTitle={(name: string) => setTitle(name)}
              />
            )}
          </div>
          <div className="t-investmentRelationsOtherDocument_right">
            <Regulations
              title={title}
              textSort={`${t('general.sort')}:`}
              dataRegulations={dataRegulations}
              selectedSort={selectedSort}
              sortOptions={sortOptions}
              handleSort={handleSort}
              currPage={currPage}
              totalPage={totalPage}
              handleChangePage={handleChangePage}
              loading={loading}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

Regulations.defaultProps = {
  currPage: 1,
  selectedSort: undefined,
  handleSort: undefined,
  loading: false,
};

InvestmentRelationsOtherDocument.defaultProps = {
};

export default InvestmentRelationsOtherDocument;
