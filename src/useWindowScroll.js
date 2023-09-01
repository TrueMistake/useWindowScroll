import {useWindowEvent} from "./useWindowEvent";
import {useState} from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({x: 0, y: 0});

  useWindowEvent('scroll', () => {
    setScroll({
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    })
  });

  function scrollTo({x, y}) {
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  }

  return [scroll, scrollTo]
}