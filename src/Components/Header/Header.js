import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../Context/PageContext';
import HeaderStyles from '../styles/header.styles';
import MenuDrawer from './MenuDrawer';

const Links = () => (
  <>
    <Link href="/treatments">
      <li>Treatments</li>
    </Link>
    <Link href="/team">
      <li>Team</li>
    </Link>
    <Link href="/gallery">
      <li>Gallery</li>
    </Link>
  </>
);

export default function Header() {
  const [width, setWidth] = useState();
  const { toggleMenu } = useContext(PageContext);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <div className="bar" style={{ height: '100px', width: '100%' }} />
      <HeaderStyles>
        {width < 700 ? (
          <div className="mobile-nav">
            <MenuDrawer>
              <nav onClick={toggleMenu}>
                <Links />
              </nav>
              <Link href="/contact">
                <button
                  className="large-btn"
                  type="button"
                  onClick={toggleMenu}
                >
                  Contact
                </button>
              </Link>
            </MenuDrawer>
            <div className="menu-logo">
              <Link href="/">
                <img src="/img/Logo.svg" alt="The Cosmetic Lounge" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="desktop-nav">
            <nav>
              <Links />
            </nav>
            <div className="menu-logo">
              <Link href="/">
                <img src="/img/Logo.svg" alt="The Cosmetic Lounge" />
              </Link>
            </div>
            <div className="contact-button">
              <Link href="/contact">
                <button className="large-btn" type="button">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </HeaderStyles>
    </>
  );
}
