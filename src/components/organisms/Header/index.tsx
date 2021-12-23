import React from 'react';

import Container from '../Container';

import logo from 'assets/images/logo.svg';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => (
  <header className="o-header">
    <Container>
      <div className="o-header_wrapper">
        <div className="o-header_left">
          <Link href="/">
            <div className="o-header_logo">
              <Image src={logo} ratio="logo" />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  </header>
);

Header.defaultProps = {
};

export default Header;
