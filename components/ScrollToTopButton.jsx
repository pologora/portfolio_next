import {useState, useEffect} from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';

const showScrollAfterPx = 500;

const ScrollToTopButton = () => {
  const [isScrollToTopButton, setIsScrollToTopButton] = useState(true);
  const scrolling = () => {
    setIsScrollToTopButton(true);
    if (
      document.body.scrollTop > showScrollAfterPx ||
      document.documentElement.scrollTop > showScrollAfterPx
    ) {
      setIsScrollToTopButton(true);
    } else {
      setIsScrollToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolling);
    return () => window.removeEventListener('scroll', scrolling);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  if (!isScrollToTopButton) return;
  return (
    <button
      className="fixed right-10 bottom-10 border
    border-primary p-2 rounded-full text-primary opacity-50 hover:opacity-80"
      onClick={() => scrollToTop()}
    >
      <AiOutlineArrowUp />
    </button>
  );
};
export default ScrollToTopButton;
