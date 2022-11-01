import { AnimatePresence, motion } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import { useContext, useEffect, useRef } from 'react';
import { PageContext } from '../../Context/PageContext';

function useOutsideAlerter(ref) {
  const { closeMenu } = useContext(PageContext);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
export default function MenuDrawer({ children }) {
  const { isMenuOpen, toggleMenu } = useContext(PageContext);
  const animateFrom = { x: '-100%' };
  const animateTo = { x: '0%' };
  const animateExit = { x: '-100%' };
  const transition = {
    x: { ease: 'easeOut', duration: 0.7 },
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="menuIcon">
        <Hamburger
          toggled={isMenuOpen}
          toggle={() => toggleMenu()}
          duration={0.7}
          distance="sm"
          easing="ease-out"
          rounded
          size={36}
          label="Show menu"
          hideOutline
          className="menu-icon"
        />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
            transition={transition}
            className="drawer"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
