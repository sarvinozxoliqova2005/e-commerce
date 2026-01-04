import React, { useContext } from "react";
import { CardContext } from "../../context/CardChange";
import { FaMapMarkerAlt } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

const CartPage = ({ingredients}) => {
  const { cart, addToCart, removeFromCart } = useContext(CardContext);

  const Price = cart.reduce(
    (acc, item) => acc + item.quantity * (item.price || item.basePrice || 0),
    0
  );

  if (cart.length === 0) {
    return (
      <div className=" h-screen w-full pt-[60px]">
        {/* <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/1193a0190120037.Y3JvcCw4OTQsNzAwLDgxLDA.png"
          alt="Empty cart"
          className="object-contain w-200 h-96 h-screen max-[600px]:w-130 max-[600px]:h-72"
        /> */}
        <div className="flex  items-center gap-2 justify-center">
          <h1 className="text-center font-bold text-[32px] max-[600px]:text-[24px]">Извините</h1>
          <p className="text-[32px] text-red-700">!</p>
        </div>
        <h2 className="text-[32px] max-[600px]:text-[22px] font-bold text-center pt-[30px]">Товары не <span className="font-bold text-red-700 ">найдены 😕</span></h2>
        <h3 className="text-[24px] max-[600px]:text-[18px] text-center mt-3">По вашему запросу не найдено ни одного товара. Пожалуйста, попробуйте снова.</h3>
        <img className="mx-auto mt-10 w-120 rounded-2xl max-[600px]:w-76" src="https://static.vecteezy.com/system/resources/thumbnails/068/705/309/small/product-not-found-illustration-in-modern-flat-style-ideal-for-ecommerce-apps-websites-or-error-pages-fully-editable-with-soft-color-palette-and-clean-composition-free-vector.jpg" alt="" />
      </div> 
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-5xl">

      <h1 className="text-2xl text-orange-500 font-bold mb-6">Ваш заказ</h1>

      <div className="flex flex-col gap-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row  sm:items-center justify-between bg-white p-4 rounded-2xl shadow-md gap-4 relative hover:shadow-orange-500"
          >
            <div className="flex gap-4 items-center sm:flex-1 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl hover:scale-105 duration-500"
              />
             <div>
                <h2 className="font-bold text-lg">{item.title}</h2>  {item.ingredients && (
                 <h1 className=" italic text-sm mt-2 line-clamp-4">{item.ingredients}</h1> )}
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
             </div> 


              {item.badge && (
                <span className="absolute top-[-10px] left-[-10px] flex items-center justify-center text-xs font-bold italic bg-violet-700 text-white rounded-full w-[60px] h-[20px]">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <button
                className="w-10 h-10 bg-orange-500 text-white rounded-lg text-lg font-bold cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>
              <span className="w-10 h-10 flex items-center justify-center font-bold bg-white rounded-lg shadow-xl cursor-pointer">{item.quantity}</span>
              <button
                className="w-10 h-10 bg-orange-500 text-white rounded-lg text-lg font-bold cursor-pointer"
                onClick={() => addToCart(item.id)}
              >
                +
              </button>
              <span className="font-bold text-orange-500">
                {item.quantity * (item.price || item.basePrice || 0)} ₽
              </span>
            </div>
          </div>
        ))}

        <section className="bg-white rounded-xl px-5 py-10 flex flex-col md:flex-row items-center gap-6 mt-4  max-[600px]:mx-auto">
          <div>
            <h1 className="text-[18px] px-4 max-[600px]:text-[18px] font-bold">Проверьте адрес доставки</h1>
          </div>

          <div className="relative w-full flex items-center  gap-2 sm:gap-4 mt-2 md:mt-0 ml-6 max-[600px]:ml-2">
            <FaMapMarkerAlt className="absolute left-3 top-5.5 -translate-y-1/2 text-orange-500 text-lg" />

            <select className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-orange-500 text-lg cursor-pointer">
              <option value="">Введите адрес</option>
              <option value="Bektemir">Бектемирский район</option>
              <option value="Yunusobod">Юнусабадский район</option>
              <option value="Chilonzor">Чиланзарский район</option>
              <option value="Mirobod">Мирободский район</option>
              <option value="Yashnobod">Яшнабадский район</option>
              <option value="Yakkasaroy">Яккасарайский район</option>
              <option value="Sergeli">Сергельский район</option>
              <option value="Shayxontohur">Шайхантахурский район</option>
              <option value="Uchtepa">Учтепинский район</option>
              <option value="Olmazor">Алмазарский район</option>
              <option value="Mirzo-Ulugbek">Мирзо-Улугбекский район</option>
              <option value="Choshtepa">Чоштепинский район</option>
            </select>

            <button className="bg-orange-500 text-white rounded-lg px-6 py-2 flex items-center justify-center gap-2">
              <span className="hidden md:inline">Проверить</span>
              <span className="inline md:hidden text-xl">
                <VscSend />
              </span>
            </button>
          </div>

          <div className="mt-6 w-full text-right text-xl max-[600px]:flex max-[600px]:justify-center text-orange-500 address font-bold">
            Общая сумма: {Price} ₽
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
