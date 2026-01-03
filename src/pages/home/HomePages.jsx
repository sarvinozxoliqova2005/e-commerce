import React, { useState, useEffect, useRef } from "react";
import useGet from "../../hooks/useGet";
import Card from "../../components/Card";
import { FaLocationDot } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

const HomePages = () => {
  const { data: categories } = useGet("categories");
  const { data: products } = useGet("products");



  const [categoryId, setCategoryId] = useState(null);

  const prodRef = useRef(null);

  useEffect(() => {
    if (categories.length > 0 && categoryId === null) {
      setCategoryId(categories[0].id);
    }
  }, [categories, categoryId]);

  const prodItemWidth = 220;

  useEffect(() => {
    const prodInterval = setInterval(() => {
      if (!prodRef.current) return;

      prodRef.current.scrollLeft += prodItemWidth;

      if (prodRef.current.scrollLeft >= prodRef.current.scrollWidth / 2) {
        prodRef.current.scrollLeft = 0;
      }
    }, 3000);

    return () => clearInterval(prodInterval);
  }, []);

  return (
   <>
      <section className="py-8 bg-gray-300">
      <div className="container mx-auto px-5 space-y-10 bg-gray-300">

        <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory flex justify-between pb-2 scrollbar-hide">
          {categories.map((el) => (
            <div key={el.id} onClick={() => setCategoryId(el.id)} className={`snap-start min-w-[120px] h-[100px] sm:min-w-[120px] h-[120px] rounded-xl shadow-md bg-white  flex flex-col items-center justify-center gap-2 p-3 sm:p-4 cursor-pointer ${categoryId === el.id ? "shadow-orange-500" : ""}`}> {el.icon && <img src={el.icon} alt={el.title} className="w-14 h-14 object-contain" />}
              <h1 className="text-md font-semibold text-center">{el.title}</h1>
            </div>
          ))}
        </div>

     <div ref={prodRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide">
  {[
    ...products.filter((pro) => pro.categoryId === categoryId),
    ...products.filter((pro) => pro.categoryId === categoryId),
  ].map((pro, index) => (
    <div
      key={`${pro.id}-${index}`}
      className="flex-shrink-0 snap-start relative bg-white max-w-[200px] h-[200px] w-full rounded-2xl shadow-xl border-2 border-white"
    >
      <img
        src={pro.image}
        alt={pro.title}
        className="w-35 h-35 object-cover hover:scale-105 duration-500 rounded-lg flex items-center justify-center mx-auto mt-4 "
      />
      <p className="mt-2 absolute bottom-2 left-0 pl-3 Shanda text-center text-[red] font-bold text-lg italic">
        {pro.basePrice } ₽
      </p>
      <h1 className="absolute top-1 right-1  flex items-center justify-center text-xs font-bold italic bg-violet-700 text-white rounded-full w-[60px] h-[20px] ">{pro.badge}</h1>
    </div>
  ))}
</div>
      </div>
     </section>

   <section>
    <div className="container mx-auto py-[40px] bg-white rounded-xl px-5 flex items-center justify-center md:flex-row flex-col max-[700px]:max-w-[380px] max-[600px]:py-5">
      <div>
        <h1 className="text-[24px] max-[600px]:text-[18px] font-bold">Проверьте адрес доставки</h1>
      </div>
    <div className="relative w-full flex items-center gap-2 sm:gap-4 mt-6">
  <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 text-lg" />

<select className="w-full pl-10 pr-3 text-[20px] max-[600px]:text-[16px] py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-orange-500">
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
    </div>
   </section>

   <section className="bg-gray-300">
  <div className="py-[60px]">
    <div className="space-y-10">
       {categories.map((el) => (
        <div key={el.id}>
          <h1 className="text-2xl font-bold text-orange-500 mb-4 px-4">{el.title}</h1>

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-4">
            {products.filter((pro) => pro.categoryId === el.id) .map((p) => (
             <Card key={p.id} {...p} />
      ))}
    </div>
        </div>
      ))}
    </div>
  </div>
   </section>
   </>   
  );
};



export default HomePages;
