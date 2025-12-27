import React, { useState, useEffect, useRef } from "react";
import useGet from "../../hooks/useGet";
import Card from "../../components/Card";
import { FaLocationDot } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";

const HomePages = () => {
  const { data: categories } = useGet("categories");
  const { data: products } = useGet("products");
  const [location , setLocation] = useState ("");

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
           <Card key={`${pro.id}-${index}`} {...pro}/>
          ))}

        </div>

      </div>
     </section>

   <section>
    <div className="container mx-auto py-[60px] bg-white rounded-xl px-5 flex items-center justify-center md:flex-row flex-col max-[600px]:max-w-[380px] max-[600px]:py-5">
      <div>
        <h1 className="text-[24px] max-[600px]:text-[18px] font-bold">Yuk tashish manzilini tekshiring</h1>
      </div>
    <div className="relative w-full flex items-center gap-2 sm:gap-4 mt-6">
  <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 text-lg" />

  <input
    type="text"
    placeholder="Manzilni kiriting"
    className="w-full pl-10 pr-3 text-[20px] max-[600px]:text-[16px] py-2 border-2 border-gray-200 rounded-lg outline-none focus:border-orange-500"
  />
<button className="bg-orange-500 text-white rounded-lg px-6 py-2 flex items-center justify-center gap-2">
  <span className="hidden md:inline">Tekshirish</span>
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

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-2">
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
