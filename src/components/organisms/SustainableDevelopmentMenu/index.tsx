import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'components/atoms/Link';
import { MenuItemDataTypes } from 'services/menus/types';
import { returnRouteMenu } from 'utils/menus';

interface SustainableDevelopmentMenuProps {
  headerDataMenus?: MenuItemDataTypes[];
}

const SustainableDevelopmentMenu: React.FC<SustainableDevelopmentMenuProps> = ({
  headerDataMenus = [],
}) => {
  const { i18n } = useTranslation();
  return (
    <div className="o-sustainableDevelopmentMenu">
      <div className="o-sustainableDevelopmentMenu_mainMenu">
        <ul
          className="o-sustainableDevelopmentMenu_mainMenu_nav"
        >
          {
            headerDataMenus.map((item, idx) => (
              <li
                key={`mainMenu-${idx.toString()}`}
                className={`o-sustainableDevelopmentMenu_mainMenu_navItem ${item.subMenu?.length ? 'o-sustainableDevelopmentMenu_hasChild' : ''}`}
              >
                <div className="o-sustainableDevelopmentMenu_mainMenu_wrapLink">
                  {
                    item.isActivated ? (
                      <Link
                        href={returnRouteMenu(item, i18n.language)}
                        customClassName="o-sustainableDevelopmentMenu_mainMenu_navLink"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span>{item.title}</span>
                    )
                  }
                </div>
                {item.subMenu?.length && (
                <div className="o-sustainableDevelopmentMenu_dropdown">
                  <div className="o-sustainableDevelopmentMenu_dropdown_wrapper">
                    <ul className="o-sustainableDevelopmentMenu_dropdown_content">
                      {item.subMenu.map((itemSubmenu, index) => (
                        <li
                          className="o-sustainableDevelopmentMenu_dropdown_item"
                          key={`${itemSubmenu.title}${index.toString()}`}
                        >
                          <Link
                            href={`/${itemSubmenu.reference && itemSubmenu.reference.slug}` || '/'}
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
            ))
          }
        </ul>
      </div>
    </div>
  );
};

SustainableDevelopmentMenu.defaultProps = {
  headerDataMenus: undefined,
};

export default SustainableDevelopmentMenu;
