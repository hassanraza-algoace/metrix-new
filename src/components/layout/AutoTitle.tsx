import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AutoTitleProps {
  onChange?: (title: string) => void; // optional callback to pass title to header
}

const AutoTitle: React.FC<AutoTitleProps> = ({ onChange }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // page name derive karo
    let pageName = pathname === "/" ? "Login" : pathname.split("/").pop();
    pageName = pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : "Page";

    // browser tab title set
    document.title = `${pageName} | Metrix`;

    // header ke liye callback
    if (onChange) onChange(pageName);
  }, [pathname, onChange]);

  return null; // component render nahi karta
};

export default AutoTitle;
