import React, {
  ChangeEvent, useState, KeyboardEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';

import Container from '../Container';

import logo from 'assets/images/logo.svg';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import useClickOutside from 'hooks/useClickOutside';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

export type HeaderMenuTypes = {
  href: string;
  title: string;
}

export type LanguageType = 'VN'|'EN';

interface HeaderProps {
  headerMenu?: HeaderMenuTypes[];
  languageList?: string[];
  languageSelected?: string;
  handleLanguage?: (val: LanguageType) => void;

}

const Header: React.FC<HeaderProps> = ({
  headerMenu, languageList, languageSelected, handleLanguage,
}) => {
  // STATE
  const [value, setValue] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // HOOK
  const location = useLocation();
  const searchRef = useRef(null);
  const languageRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useClickOutside(searchRef, (): void => {
    if (openSearch) setOpenSearch(false);
  });
  useClickOutside(languageRef, (): void => {
    if (isOpenLanguage) setIsOpenLanguage(false);
  });
  useClickOutside(menuRef, (): void => {
    if (isOpenMenu) setIsOpenMenu(false);
  });

  useWindowScroll(() => {
    if (window.pageYOffset > 70) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  });

  /**
   * FUNCTION
   */
  // Check active url with i18 after that
  const checkActive = (href?: string): boolean => {
    if (href) {
      return location.pathname.split('/')[1].includes(href);
    }
    return false;
  };

  // Submit search
  const handleSubmit = (text?: string) => {
    /* eslint-disable no-console */
    console.log(text);

    setOpenSearch(false);
    setValue('');
  };

  // Submit search by keyboard
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e.currentTarget.value);
    }
  };
  return (
    <header className={mapModifiers('o-header', isScroll && 'scrolled')}>
      <Container>
        <div className="o-header_wrapper">
          <div
            className={mapModifiers(
              'o-header_iconMenu',
              isOpenMenu && 'active',
            )}
            onClick={() => {
              setIsOpenLanguage(false);
              setIsOpenMenu(!isOpenMenu);
              setOpenSearch(false);
            }}
          >
            <span />
            <span />
            <span />
          </div>
          <div className="o-header_left">
            <Link href="/">
              <div className="o-header_logo">
                <Image src={logo} ratio="logo" />
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
                      placeholder="Tìm kiếm"
                      type="text"
                      value={value}
                      ref={inputRef}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                      onKeyPress={onPressEnter}
                    />
                    <div className="o-header_search_panel_input_icon" onClick={() => handleSubmit()}>
                      <Icon iconName="search" />
                    </div>
                  </div>
                </div>
                {
                  headerMenu && headerMenu.map((val, idx) => (
                    <li className="o-header_nav_item" key={idx.toString()}>
                      <Link
                        href={val.href}
                        activeClassName={checkActive(val.href) ? 'active' : ''}
                        customClassName="o-header_nav_link"
                      >
                        {val.title}
                      </Link>
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
                <Text modifiers={['16x24', 'jet', '400', 'uppercase']}>
                  {languageSelected}
                </Text>
                <div
                  className={mapModifiers(
                    'o-header_languagePicker_icon',
                    isOpenLanguage && 'active',
                  )}
                >
                  <Icon iconName="carretDownBlack" size="24" />
                </div>
              </div>
              <ul className={mapModifiers('o-header_languagePicker_list', isOpenLanguage && 'open')}>
                {
                  languageList && languageList.map((val, idx) => (
                    <li
                      onClick={() => {
                        if (handleLanguage) {
                          handleLanguage(val as LanguageType);
                        }
                        setIsOpenLanguage(false);
                      }}
                      className={`o-header_languagePicker_list_item ${
                        val === languageSelected ? 'active' : ''
                      }`}
                      key={idx.toString()}
                    >
                      <Text modifiers={['16x24', 'jet', '400', 'uppercase']}>
                        {val}
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
                  setOpenSearch(!openSearch);
                  setTimeout(() => {
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }, 500);
                }}
              >
                <Icon iconName="search" size="24" />
              </div>
              <div
                className={mapModifiers('o-header_search_panel', openSearch && 'open')}
                ref={searchRef}
              >
                <div className="o-header_search_panel_input">
                  <Input
                    autoComplete="off"
                    id="search"
                    placeholder="Tìm kiếm"
                    type="text"
                    value={value}
                    ref={inputRef}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    onKeyPress={onPressEnter}
                  />
                  <div className="o-header_search_panel_input_icon" onClick={() => handleSubmit()}>
                    <Icon iconName="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  headerMenu: undefined,
  languageList: undefined,
  languageSelected: undefined,
  handleLanguage: undefined,
};

export default Header;
