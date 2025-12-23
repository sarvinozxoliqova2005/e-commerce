import React, { useState, useEffect, useRef } from "react";
import useGet from "../../hooks/useGet";

const HomePages = () => {
  const { data: categories } = useGet("categories");
  const { data: products } = useGet("products");

  const [categoryId, setCategoryId] = useState(null);

  const prodRef = useRef(null);
  const prodItemWidth = 266; 

  useEffect(() => {
    if (categories.length > 0 && categoryId === null) {
      setCategoryId(categories[0].id);
    }
  }, [categories, categoryId]);

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
            <div key={el.id} onClick={() => setCategoryId(el.id)} className={`snap-start min-w-[120px] h-[100px] sm:min-w-[120px] h-[120px] rounded-xl shadow-md border-2 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 cursor-pointer ${categoryId === el.id ? "" : "bg-white border-white"}`}> {el.icon && <img src={el.icon} alt={el.title} className="w-14 h-14 object-contain" />}
              <h1 className="text-md font-semibold text-center">{el.title}</h1>
            </div>
          ))}
        </div>

        <div ref={prodRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide" >
          {[
            ...products.filter((pro) => pro.categoryId === categoryId),
            ...products.filter((pro) => pro.categoryId === categoryId)
          ].map((pro, index) => (
            <div key={index} className="snap-start min-w-[70%] sm:min-w-[260px] bg-white rounded-2xl shadow-lg border-2 border-white p-4 flex flex-col hover:scale-105 duration-500">
              <img src={pro.image} alt={pro.title} className="w-full h-40 object-contain mb-3" />
              <h1 className="font-semibold line-clamp-1">{pro.title}</h1>
              <p className="text-orange-500 font-bold text-lg mt-1">{pro.basePrice} $</p>
              <button className="mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">
                Выбрать
              </button>
            </div>
          ))}
        </div>

      </div>
     </section>

   <section className="bg-gray-300">
  <div className="py-[60px]">
    <div className="space-y-10">
       {categories.map((el) => (
        <div key={el.id}>
          <h1 className="text-2xl font-bold text-orange-500 mb-4 px-4">{el.title}</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-4">
            {products
              .filter((pro) => pro.categoryId === el.id)
              .map((p) => (
                <div key={p.id} className="bg-white w-full rounded-2xl shadow-2xl border-2 max-h-[300px] max-w-[300px] w-full h-full border-white p-3 sm:p-4 flex flex-col hover:scale-105 duration-500">
                  <img src={p.image} alt={p.title} className="w-full  h-32 sm:h-20 lg:h-36  object-contain mb-3" />
                  <h1 className="font-semibold line-clamp-1">{p.title}</h1>
                  <p className="text-orange-500 font-bold text-lg mt-1">{p.basePrice} $</p>
                  <button className="mt-4 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">
                    Выбрать
                  </button>
                </div>
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
