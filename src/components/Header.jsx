import React, { useContext, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { CardContext } from "../context/CardChange";

const Header = () => {
  const [lang, setLang] = useState("uz");
  const { cart } = useContext(CardContext);

  const languages = {
    uz: { home: "Asosiy", menu: "Ro'yxat" },
    ru: { home: "Главная", menu: "Меню" },
    en: { home: "Home", menu: "Menu" },
  };

  const t = languages[lang];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/header.png" alt="logo" className="h-5 sm:h-6" />
          <img src="/pizza.png" alt="pizza" className="h-4 sm:h-5" />
        </Link>

        {/* MENU */}
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* LANG */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-orange-500 text-white rounded-lg px-2 py-1 text-xs sm:text-sm md:text-base cursor-pointer"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          {/* CART */}
          <div className="bg-orange-500 rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-white flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
            <SlBasket />
            <span>{cart?.length || 0}</span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
