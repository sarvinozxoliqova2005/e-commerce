import React, { useContext, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { CardContext } from "../context/CardChange";

const Header = () => {
  const [lang, setLang] = useState("uz");
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CardContext); // <-- cart

  const languages = {
    uz: { home: "Asosiy", menu: "Ro'yxat" },
    ru: { home: "Главная", menu: "Меню" },
    en: { home: "Home", menu: "Menu" },
  };

  const t = languages[lang] || languages["uz"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/header.png" alt="logo" className="h-6 sm:h-6" />
          <img src="/pizza.png" alt="pizza" className="h-5 sm:h-5" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className="text-lg font-bold transition-colors duration-500 hover:text-orange-500"
              >
                {t.home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menus"
                className="text-lg font-bold transition-colors duration-500 hover:text-orange-500"
              >
                {t.menu}
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-orange-500 text-white rounded-lg px-3 py-2 cursor-pointer"
            >
              <option value="languages">🌐 Languages</option>
              <option value="uz">🇺🇿 O‘zbekcha</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
            </select>

            <div className="bg-orange-500 max-w-[400px] w-full h-[40px] rounded-lg text-white cursor-pointer hover:bg-orange-600 duration-500 px-6 flex items-center justify-center gap-2">
              <SlBasket />
              <span>{cart?.length || 0}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl transition-transform duration-500 hover:scale-110"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
