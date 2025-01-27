import Header from "@/components/organisms/header"
import HeaderSlides from "@/components/organisms/headerSlides"
import ProductSlides from "@/components/organisms/productSlides"
import OffersCard from "@/components/organisms/offersCard"
import CategoriesSection from "@/components/organisms/categoriesSection"
import Footer from "@/components/organisms/footer"

import car_img from '#/public/car.webp';
import house_img from '#/public/house.webp';
import cellphone from '#/public/cellphone.webp';
import shoe_img from '#/public/shoe.webp';
import pressure_washer from '#/public/pressure_washer.webp';

export default function HomePage() {
   const categories = [
      {
         id: 'eletronics-category',
         title: 'Eletronicos',
         img: cellphone
      },

      {
         id: 'tools-category',
         title: 'Ferramentas',
         img: pressure_washer
      }, 
      
      {
         id: 'shoes-category',
         title: 'Calçados',
         img: shoe_img
      },

      {
         id: 'cars-category',
         title: 'Veiculos',
         img: car_img
      },

      {
         id: 'eletronics-category2',
         title: 'Eletronicos',
         img: cellphone
      },

      {
         id: 'tools-category2',
         title: 'Ferramentas',
         img: pressure_washer
      }, 
      
      {
         id: 'shoes-category2',
         title: 'Calçados',
         img: shoe_img
      },

      {
         id: 'cars-category2',
         title: 'Veiculos',
         img: car_img
      }
   ];

    return (
       <section>
         <Header/>
         <HeaderSlides/>

         {/* Card com produtos em alta */}
         <div className="rounded-md bg-primary p-5 w-[calc(100%-32px)] mx-auto shadow-xl flex flex-col gap-y-5 mt-5">
            <OffersCard sectionTitle="Ofertas do dia"/>
            <ProductSlides 
               sliderPerView={1} 
               className="offers-carousel"
               carouselId="34xwetc5xr"
            />
         </div>

         {/* Carousel de eletrodomesticos */}
         <div className="mt-10 rounded-md bg-primary p-5 w-[calc(100%-32px)] mx-auto shadow-xl flex flex-col gap-y-5">
            <ProductSlides 
               sliderPerView={'auto'} 
               className="product-carousel" 
               carouselTitle="Eletrodomesticos"
               dragFree={true}
               carouselId="53xrwxer"
            />
         </div>

         {/* Seção de categorias */}
         <CategoriesSection categories={categories} className="mt-10 mx-auto"/>

         {/* Card com ofertas do dia */}
         <div className="mt-10 rounded-md bg-primary p-5 w-[calc(100%-32px)] mx-auto shadow-xl flex flex-col gap-y-5">
            <OffersCard sectionTitle="Em alta"/>
            <ProductSlides 
               sliderPerView={1} 
               className="offers-carousel"
               carouselId="4cx3q3"
            />
         </div>

         {/* Carousel de eletronicos */}
         <div className="mt-10 rounded-md bg-primary p-5 w-[calc(100%-32px)] mx-auto shadow-xl flex flex-col gap-y-5">
            <ProductSlides 
               sliderPerView={'auto'} 
               className="product-carousel" 
               carouselTitle="Eletronicos"
               dragFree={true}
               carouselId="c3wecxf3"
            />
         </div>

         <Footer className="mt-10"/>
       </section>
    )
}