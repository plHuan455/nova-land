import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../Container';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import { MenuItemDataTypes } from 'services/menus/types';
import mapModifiers, { checkExternalUrl } from 'utils/functions';
import { returnRouteMenu } from 'utils/menus';

interface SustainableDevelopmentMenuProps {
  headerDataMenus?: MenuItemDataTypes[];
}

const SustainableDevelopmentMenu: React.FC<SustainableDevelopmentMenuProps> = ({
  headerDataMenus = [],
}) => {
  // STATE
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { i18n } = useTranslation();

  // HOOK
  const menuRef = useRef<HTMLUListElement>(null);
  return (
    <div className="o-sdMenu">
      <Container>
        <div className="o-sdMenu_menu">
          <ul
            ref={menuRef}
            className={mapModifiers(
              'o-sdMenu_nav',
              isOpenMenu && 'active',
            )}
          >
            {headerDataMenus
              && headerDataMenus.map((val, idx) => (
                <li
                  className={`o-sdMenu_nav_item${
                    val?.subMenu?.length
                      ? ' o-sdMenu_hasChild'
                      : ''
                  }`}
                  key={idx.toString()}
                >
                  <Link
                    href={returnRouteMenu(val, i18n.language)}
                    customClassName="o-sdMenu_nav_link"
                    handleClick={() => setIsOpenMenu(!isOpenMenu)}
                    target={val.target}
                    useExternal={
                        val.reference?.slug ? false : checkExternalUrl(val.link)
                      }
                  >
                    {val.title}
                  </Link>
                  {val?.subMenu?.length && (
                  <div className="o-sdMenu_dropdown">
                    <div className="o-sdMenu_dropdown_wrapper">
                      <ul className="o-sdMenu_dropdown_content">
                        {val.subMenu.map((itemSubmenu, index) => (
                          <li
                            className={mapModifiers(
                              'o-sdMenu_dropdown_item',
                            )}
                            key={`${itemSubmenu.title}${index.toString()}`}
                          >
                            <div className="o-sdMenu_dropdown_item_icon u-mr-8">
                              <Icon iconName="novaMark" size="15x19" />
                            </div>
                            <Link
                              href={returnRouteMenu(itemSubmenu, i18n.language)}
                              handleClick={() => {
                                setIsOpenMenu(false);
                              }}
                              customClassName="o-sdMenu_dropdown_nav_link"
                            >
                              {itemSubmenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

SustainableDevelopmentMenu.defaultProps = {
  headerDataMenus: undefined,
};

export default SustainableDevelopmentMenu;
