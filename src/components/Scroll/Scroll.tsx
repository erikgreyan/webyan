import { useState, useEffect } from "react";
import { ScrollButton } from "../../assets/svg";
import useStyles from "./style";

const Scroll = () => {
  const style = useStyles();
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${style.scroll} ${visible ? style.visible : style.hidden}`}
      onClick={scrollToTop}
    >
      <ScrollButton />
    </div>
  );
}

export default Scroll;