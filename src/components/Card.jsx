import React, { useContext } from 'react';
import { CardContext } from '../context/CardChange';

const Card = ({ image, title, basePrice, weight, id, badge }) => {
  const { addToCart, cart, removeFromCart, lang } = useContext(CardContext);

  const itemInCart = cart?.find(el => el.id === id);

  return (
    <div className="snap-start relative min-w-[100%] sm:min-w-[260px] bg-white rounded-2xl shadow-lg border-2 border-white p-4 flex flex-col hover:scale-105 duration-500">
      <img src={image} alt={title} className="w-full h-40 object-contain mb-3" />
      {badge && (
        <span className="absolute top-2 right-1 w-15 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xs font-semibold">
          {badge}
        </span>
      )}
      <h1 className="font-semibold line-clamp-1">{title}</h1>
      <div className="flex items-center justify-between mt-1">
        <p className="text-orange-500 font-bold text-lg">{basePrice} ₽</p>
        <p className="text-sm text-gray-500">{weight} gr</p>
      </div>

      {itemInCart ? (
  <div className="flex items-center justify-between  mt-3">
    
    <button
      onClick={() => removeFromCart(id)}
      className="bg-orange-500 text-white 
                 w-8 h-8 sm:w-14 sm:h-10 
                 rounded-lg font-bold text-lg"
    >
      -
    </button>

    <span className="font-semibold text-orange-500 
                      sm:text-lg md:text-xl">
      {itemInCart.quantity}
    </span>

    <button
      onClick={() => addToCart(id)}
      className="bg-orange-500 text-white 
                 w-8 h-8 sm:w-14 sm:h-10 
                 rounded-lg font-bold text-lg"
    >
      +
    </button>

    <span className="font-bold text-orange-500 
                     text-xs sm:text-sm md:text-base ml-1">
      {itemInCart.quantity * basePrice} ₽
    </span>
  </div>
) : (
  <button
    onClick={() => addToCart(id)}
    className="w-full bg-orange-500 text-white 
               py-2 sm:py-2.5 
               text-sm sm:text-base
               rounded-lg font-semibold 
               hover:bg-orange-600 transition mt-3"
  >
    Выбрать
  </button>
)}

    </div>
  );
};

export default Card;
