import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [lang, setLang] = useState("languages");

  const languages = {
    uz: {
      home: "Asosiy",
      menu: "Ro'yxat",
    },
    ru: {
      home: "Главная",
      menu: "Меню",
    },
    en: {
      home: "Home",
      menu: "Menu",
    },
  };

  const t = languages[lang]|| languages["uz"];

  return (
    <header className="fixed top-0 left-0 w-full py-[20px] bg-white shadow-xl">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link className='flex items-center gap-3' to="/">
          <img src="/header.png" alt="" />
          <img src="/pizza.png" alt="" />
        </Link>

        <ul className="flex items-center gap-5">
          <li>
            <NavLink className="text-[20px] font-bold" to="/">
              {t.home}
            </NavLink>
          </li>

          <li>
            <NavLink className="text-[20px] font-bold" to="/menus">
              {t.menu}
            </NavLink>
          </li>

          <li>
           <select value={lang} onChange={(e) => setLang(e.target.value)}className="bg-orange-500 text-white rounded-lg px-3 py-2 cursor-pointer">
            <option value="languages">🌐 Languages</option>
            <option value="uz">🇺🇿 O‘zbekcha</option>
           <option value="ru">🇷🇺 Русский</option>
           <option value="en">🇬🇧 English</option>
         </select>

          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
