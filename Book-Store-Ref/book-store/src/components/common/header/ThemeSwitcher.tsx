import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
import { ThemeName } from "../../../style/theme";

function ThemeSwitcher(){
  const {themeName, toggleTheme} = useContext(ThemeContext);


  //onClick은 직접 연결하면 에러
  return <button onClick={toggleTheme}>{themeName}</button>
}

export default ThemeSwitcher;
