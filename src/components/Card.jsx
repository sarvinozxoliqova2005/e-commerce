import React, { useContext } from "react";
import { CardContext } from "../context/CardChange";

const Card = ({ image, title, basePrice, weight, id, badge }) => {
  const { addToCart, cart, removeFromCart } = useContext(CardContext);

  const itemCart = cart?.find((el) => el.id === id);

  return (
    <div className="snap-start relative min-w-[100%] sm:min-w-[260px] bg-white rounded-2xl shadow-lg border-2 border-white p-4 flex flex-col hover:scale-105 duration-500">
      <img src={image} alt={title} className="w-full h-40 object-contain mb-3" />

     {badge && (
        <span className="absolute top-1 right-1 bg-orange-500 text-white rounded-full w-[60px] h-[20px] flex items-center justify-center text-xs font-bold italic">
          {badge}
        </span>
      )}

      <h1 className="font-bold line-clamp-1 italic">{title}</h1>

      <div className="flex items-center justify-between mt-1">
        <p className="text-orange-500 font-bold text-lg italic">{basePrice} ₽</p>
        <p className="text-sm text-gray-500 italic font-bold">{weight} gr</p>
      </div>

      {itemCart ? (
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 ">
            <button
              className="w-13 h-10 bg-orange-500 rounded-lg text-lg text-white font-bold"
              onClick={() => removeFromCart(id)}
            >
              -
            </button>
            <span className="w-8 text-center">{itemCart.quantity}</span>
            <button
              className="w-13 h-10 bg-orange-500 rounded-lg text-lg text-white font-bold"
              onClick={() => addToCart(id)}
            >
              +
            </button>
          </div>

          <span className="font-bold text-orange-500 italic">
            {itemCart.quantity * basePrice} ₽
          </span>
        </div>
      ) : (
        <button
          className="mt-5 w-full bg-orange-500 text-white py-1 rounded-lg"
          onClick={() => addToCart(id)}
        >
          Выбрать
        </button>
      )}
    </div>
  );
};

export default Card;