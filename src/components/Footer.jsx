import { NavLink, Outlet } from 'react-router-dom'
import { HiOutlinePhone } from 'react-icons/hi'
import { IoLocationSharp, IoLogoInstagram } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa6'

const Footer = () => {

  return (
    <footer>
      <div className='container mx-auto py-[30px]'> 
     <div className='flex justify-between mx-auto max-w-5xl gap-10 max-[700px]:flex-col max-[700px]:gap-10'>
      <div className='flex items-center gap-2 mt-[-90px] max-[700px]:justify-center max-[700px]:mt-0'>
        <img className='h-4 sm:h-5' src="header.png" alt="" />
        <img className='h-4 sm:h-5' src="pizza.png " alt="" />
      </div>
  <div className='flex flex-1 justify-around max-[700px]:flex-col max-[700px]:items-center gap-10'>
    <ul  className='space-y-2 text-center max-[700px]:text-center'>
      <h1 className='font-bold text-[24px]'>Kuda Pizza</h1>
      <li>
        <a href="">Kompaniya haqida</a>
      </li>
      <li>
        <a href="">Foydalanish shartlari</a>
      </li>
      <li>
        <a href="">Kafolat shartlari</a>
      </li>
    </ul>

    <ul className='space-y-2 text-center max-[700px]:text-center'>
      <h1 className='font-bold text-[24px]'>Yordam</h1>
      <li>
        <a href="">Restaran</a>
      </li>
      <li>
        <a href="">Kontaktlar</a>
      </li>
      <li>
        <a href="">Qo'llab quvvatlash</a>
      </li>
      <li>
        <a href="">Buyurtmangizni kuzatib boring</a>
      </li>
    </ul>

    <ul className='space-y-2 text-center max-[700px]:text-center'>
      <h1 className='font-bold text-[24px]'>Kontaktlar</h1>
      <NavLink className='flex items-center justify-center gap-2'>
        <HiOutlinePhone />
        +7 (926) 223-10-11
      </NavLink>
      <NavLink className='flex items-center justify-center gap-2'>
        <IoLocationSharp />
        +7 (926) 2223-10-11
      </NavLink>
      <li className='flex items-center justify-center gap-2'>
       <NavLink>
         <FaFacebook />
       </NavLink>
       <span>Facebook</span>
      </li>
      <li className='flex items-center justify-center gap-2'>
       <NavLink>
         <IoLogoInstagram />
       </NavLink>
          <span>Instagram</span>
      </li>
    </ul>
  </div>
</div>
       </div>
    </footer>
  )
}

export default Footer