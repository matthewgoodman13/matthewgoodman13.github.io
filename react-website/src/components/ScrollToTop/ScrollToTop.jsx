import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'react-bootstrap-icons';
import './ScrollToTop.scss';

const ScrollToTop = (props) => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if ((window.pageYOffset || document.documentElement.scrollTop) > 520) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [window.scrollY]);

  return (
    <div className="scrollContainer">
      {showScrollBtn && (
        <div
          className="ScrollToTop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <ArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
