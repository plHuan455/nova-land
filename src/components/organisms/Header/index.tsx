import React, {
  useState, KeyboardEvent, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Container from '../Container';

import { LIST_LANGUAGE } from 'assets/dataDummy/header';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { OptionType } from 'components/molecules/Pulldown';
import Animate from 'components/organisms/Animate';
import useClickOutside from 'hooks/useClickOutside';
import useLanguage from 'hooks/useLanguage';
import useWindowScroll from 'hooks/useWindowScroll';
import { MenuItemDataTypes } from 'services/menus/types';
import { useAppSelector } from 'store/hooks';
import mapModifiers, { checkExternalUrl, getSlugByTemplateCode } from 'utils/functions';
import { getHomeLangURL, getLangURLFirstDash } from 'utils/language';
import { returnRouteMenu } from 'utils/menus';

export type HeaderMenuTypes = {
  href: string;
  title: string;
}

interface HeaderProps {
  headerMenu?: MenuItemDataTypes[];
  logoSrc: string;
  handleLanguage?: (option: OptionType) => void;
  isPageRecruitment?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  headerMenu,
  logoSrc,
  handleLanguage,
  isPageRecruitment,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    lang,
  } = useLanguage();
  // STATE
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { staticPage } = useAppSelector((state) => state.menus);
  const [languageSelected, setLanguageSelected] = useState<OptionType>(lang);

  // HOOK
  const searchRef = useRef(null);
  const languageRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useClickOutside(searchRef, (): void => {
    if (isOpenSearch) setIsOpenSearch(false);
  });
  useClickOutside(languageRef, (): void => {
    if (isOpenLanguage) setIsOpenLanguage(false);
  });
  useClickOutside(menuRef, (): void => {
    if (isOpenMenu) setIsOpenMenu(false);
  });

  useWindowScroll(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  });

  // Submit search
  const handleSubmit = (text?: string) => {
    if (text) {
      navigate(`${getLangURLFirstDash(i18n.language)}/${getSlugByTemplateCode('SEARCH', staticPage)}?keyword=${text}`);
    }
    setIsOpenSearch(false);
    setIsOpenMenu(!isOpenMenu);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  // Submit search by keyboard
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e.currentTarget.value);
    }
  };

  return (
    <header className={mapModifiers('o-header', isScroll && 'scrolled', isPageRecruitment && 'isPageRecruitment')}>
      <Container>
        <Animate type="topDown">
          <div className="o-header_wrapper">
            <div
              className={mapModifiers(
                'o-header_iconMenu',
                isOpenMenu && 'active',
              )}
              onClick={() => {
                setIsOpenLanguage(false);
                setIsOpenMenu(!isOpenMenu);
                setIsOpenSearch(false);
              }}
            >
              <span />
              <span />
              <span />
            </div>
            <div className="o-header_left">
              <Link href={getHomeLangURL(i18n.language)}>
                <div className="o-header_logo">
                  <Image src={logoSrc} ratio="logo" />
                </div>
              </Link>
            </div>
            <div className="o-header_right">
              <div className="o-header_menu">
                <ul
                  ref={menuRef}
                  className={mapModifiers(
                    'o-header_nav',
                    isOpenMenu && 'active',
                  )}
                >
                  <div className="o-header_search mb">
                    <div className="o-header_search_panel_input">
                      <Input
                        autoComplete="off"
                        id="search"
                        placeholder={t('general.search')}
                        type="text"
                        ref={inputRef}
                        onKeyPress={onPressEnter}
                      />
                      <div className="o-header_search_panel_input_icon" onClick={() => handleSubmit(inputRef.current?.value)}>
                        <Icon iconName="search" />
                      </div>
                    </div>
                  </div>
                  {
                    headerMenu && headerMenu.map((val, idx) => (
                      <li className={`o-header_nav_item${val?.subMenu?.length ? ' o-header_hasChild' : ''}`} key={idx.toString()}>
                        <Link
                          href={returnRouteMenu(val, i18n.language)}
                          customClassName="o-header_nav_link"
                          handleClick={() => setIsOpenMenu(!isOpenMenu)}
                          target={val.target}
                          useExternal={val.reference?.slug ? false : checkExternalUrl(val.link)}
                        >
                          {val.title}
                        </Link>
                        {/* {val?.subMenu?.length && (
                          <div className="o-header_dropdown">
                            <div className="o-header_dropdown_wrapper">
                              <ul className="o-header_dropdown_content">
                                {val.subMenu.map((itemSubmenu, index) => (
                                  <li
                                    className={mapModifiers(
                                      'o-header_dropdown_item',
                                    )}
                                    key={`${itemSubmenu.title}${index.toString()}`}
                                  >
                                    <Link
                                      href={`${itemSubmenu.reference
                                        && itemSubmenu.reference.slug}` || '/'}
                                      handleClick={() => {
                                        setIsOpenMenu(false);
                                      }}
                                      customClassName="o-header_dropdown_nav_link"
                                    >
                                      {itemSubmenu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          )} */}
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* SET LANGUAGE  */}
              <div className="o-header_languagePicker" ref={languageRef}>
                <div
                  className="o-header_languagePicker_value"
                  onClick={() => {
                    setIsOpenLanguage(!isOpenLanguage);
                  }}
                >
                  <Text modifiers={['14x18', 'jet', '400', 'uppercase']}>
                    {languageSelected.label}
                  </Text>
                  <div
                    className={mapModifiers(
                      'o-header_languagePicker_icon',
                      isOpenLanguage && 'active',
                    )}
                  >
                    <Icon iconName="arrowDownBlack" size="16" />
                  </div>
                </div>
                <ul className={mapModifiers('o-header_languagePicker_list', isOpenLanguage && 'open')}>
                  {
                    LIST_LANGUAGE.map((val, idx) => (
                      <li
                        onClick={() => {
                          if (handleLanguage) {
                            handleLanguage(val);
                          }
                          setIsOpenLanguage(false);
                          setLanguageSelected(val);
                        }}
                        className={`o-header_languagePicker_list_item ${val.label === languageSelected.label ? 'active' : ''
                        }`}
                        key={idx.toString()}
                      >
                        <Text modifiers={['14x18', 'jet', '400', 'uppercase']}>
                          {val.label}
                        </Text>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* SEARCH  */}
              <div className="o-header_search_wrap">
                <div
                  className="o-header_search pc"
                  onClick={() => {
                    setIsOpenSearch(!isOpenSearch);
                    setTimeout(() => {
                      if (inputRef.current) {
                        inputRef.current.focus();
                      }
                    }, 500);
                  }}
                >
                  <Icon iconName="search" size="20" />
                </div>
                <div
                  className={mapModifiers('o-header_search_panel', isOpenSearch && 'open')}
                  ref={searchRef}
                >
                  <div className="o-header_search_panel_input">
                    <Input
                      autoComplete="off"
                      id="search"
                      placeholder={t('general.search')}
                      type="text"
                      ref={inputRef}
                      onKeyPress={onPressEnter}
                    />
                    <div className="o-header_search_panel_input_icon" onClick={() => handleSubmit(inputRef.current?.value)}>
                      <Icon iconName="search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  headerMenu: undefined,
  handleLanguage: undefined,
  isPageRecruitment: false,
};

export default Header;
