import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon, { IconName } from 'components/atoms/Icon';
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
  icon: IconName;
  id?: number;
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
          key={`menu-item-${i.toString()}`}
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
                  <li key={`menu_subList-${idx.toString()}`}>
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
                          <Icon size="24" iconName={s.icon} />
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
  dummyOption:OptionType[];
}

const Regulations: React.FC<RegulationsProps> = ({
  title,
  textSort,
  dataRegulations,
  dummyOption,
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
              options={dummyOption}
            />
          </div>
        </div>
        <div className="t-regulations_pagination">
          <Pagination
            totalPage={2}
            handleChangePage={(page: number) => console.log(page)}
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
                <Button modifiers="iconRight" iconName="down">{item.titleBtn}</Button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="t-regulations_paginationButton">
        <Pagination
          totalPage={2}
          handleChangePage={(page: number) => console.log(page)}
        />
      </div>
    </div>
  </div>
);

/** ******* InvestmentRelationsOtherDocument ********** */
interface InvestmentRelationsOtherDocumentProps {
  dataMenu: MenuType[];
  dataRegulations: RegulationsType[],
  dummyOption: OptionType[],
}

const InvestmentRelationsOtherDocument: React.FC<InvestmentRelationsOtherDocumentProps> = ({
  dataMenu,
  dataRegulations,
  dummyOption,
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
            dummyOption={dummyOption}
          />
        </div>
      </div>
    </Container>
  </div>
);

InvestmentRelationsOtherDocument.defaultProps = {
};

export default InvestmentRelationsOtherDocument;
