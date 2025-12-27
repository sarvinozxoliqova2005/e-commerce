import React, { useContext, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { CardContext } from "../context/CardChange";

const Header = () => {
  const [lang, setLang] = useState("uz");
  const { cart } = useContext(CardContext);
  const [Open, setLangOpen] = useState(false);


  const languages = {
    uz: { home: "Asosiy", menu: "Ro'yxat" },
    ru: { home: "Главная", menu: "Меню" },
    en: { home: "Home", menu: "Menu" },
  };

  const t = languages[lang];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img src="/header.png" alt="logo" className="h-5 sm:h-6" />
          <img src="/pizza.png" alt="pizza" className="h-4 sm:h-5" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          
           <ul className="flex items-center gap-3 sm:gap-6">
          <li>
            <NavLink
              to="/"
              className="font-bold text-xs sm:text-sm md:text-lg hover:text-orange-500 transition"
            >
              {t.home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menus"
              className="font-bold text-xs sm:text-sm md:text-lg hover:text-orange-500 transition"
            >
              {t.menu}
            </NavLink>
          </li>
        </ul>

        <div
  className="relative max-w-[100px w-full sm:max-w-[140px]" 
  onBlur={() => setLangOpen(false)}
  tabIndex={0}
>
  <select
    value={lang}
    onClick={() => setLangOpen(!Open)}
    onChange={(e) => {
      setLang(e.target.value);
      setLangOpen(false);
    }}
    className="
      bg-orange-500 text-white rounded-lg
       sm:px-1 px-1
      py-1.5 sm:py-2
      text-[8px] sm:text-sm md:text-base
      cursor-pointer
      flex-shrink-0
      min-w-[40px] sm:min-w-[90px]
      appearance-none
    "
  >
    <option value="uz">🇺🇿 O‘zbekcha</option>
    <option value="ru">🇷🇺 Русский</option>
    <option value="en">🇷🇺 English</option>
  </select>

  {/* <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-xs pointer-events-none">
    {Open ? "▲" : "▼"}
  </span> */}
</div>


<div className=" bg-orange-500 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm md:text-base flex-shrink-0 min-w-[48px] justify-center">
  <SlBasket className="text-sm sm:text-base" />
  <span>{cart?.length || 0}</span>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
