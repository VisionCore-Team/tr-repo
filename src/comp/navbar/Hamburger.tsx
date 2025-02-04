import { useEffect, useRef, useState } from 'react'
import './navbar.css'

interface HamburgerProps {
  status: (menu: boolean) => void;
}

function Hamburger({ status }: HamburgerProps) {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const hamburger = useRef<HTMLDivElement>(null);
  const menuspan1 = useRef<HTMLSpanElement>(null);
  const menuspan2 = useRef<HTMLSpanElement>(null);
  const menuspan3 = useRef<HTMLSpanElement>(null);

  useEffect(() => { status(menu) }, [menu])

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading])

  const handleMenu = () => {
    if (!loading) {
      setLoading(true);
      if (menuspan1.current && menuspan2.current && menuspan3.current && hamburger.current) {
        if (!menu) {
          menuspan1.current.style.width = menuspan3.current.style.width = "30px";
          setTimeout(() => {
            if (menuspan1.current && menuspan2.current && menuspan3.current && hamburger.current) {
              menuspan1.current.style.transform = "translateY(1px)";
              menuspan2.current.style.width = "0";
              menuspan2.current.style.transform = "translateX(1rem)";
              menuspan3.current.style.transform = "translateY(-1px)";
              hamburger.current.style.gap = "0";
            }
            setTimeout(() => {
              if (menuspan1.current && menuspan2.current && menuspan3.current && hamburger.current) {
                menuspan1.current.style.rotate = "45deg"
                menuspan3.current.style.rotate = "-45deg"
              }
            }, 300);
          }, 300);
        }
        else {
          menuspan1.current.style.rotate = menuspan3.current.style.rotate = "0deg"
          setTimeout(() => {
            if (menuspan1.current && menuspan2.current && menuspan3.current && hamburger.current) {
              menuspan1.current.style.transform = "translateY(0)";
              menuspan3.current.style.transform = "translateY(0)";
              menuspan2.current.style.width = "30px";
              menuspan2.current.style.transform = "translateX(0)";
              hamburger.current.style.gap = ".5rem";
            }
            setTimeout(() => {
              if (menuspan1.current && menuspan2.current && menuspan3.current && hamburger.current) {
                menuspan1.current.style.width = "15px";
                menuspan3.current.style.width = "20px";
              }
            }, 300);
          }, 300);
        }
        setMenu(!menu);
      }
    }
  }

  return (
    <div ref={hamburger} onClick={() => handleMenu()} className="hamburger col jcc">
      <span ref={menuspan1}></span>
      <span ref={menuspan2}></span>
      <span ref={menuspan3}></span>
    </div>
  )
}

export default Hamburger
