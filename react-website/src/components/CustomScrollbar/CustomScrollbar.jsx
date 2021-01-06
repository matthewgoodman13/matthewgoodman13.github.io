import React, { useEffect } from 'react';
import './CustomScrollbar.scss';

const CustomScrollbar = () => {
  const onScroll = () => {
    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = () => {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + '%';
    };
  };

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <div className="CustomScrollbar">
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
    </div>
  );
};

export default CustomScrollbar;
