"use client"
import { BtnComp } from '@/components/btn/BtnComp'
import Modal from '@/components/modal/Modal'
import AboutSection from '@/components/section/AboutSection'
import AdvantagesSection from '@/components/section/AdvantagesSection'
import EducationSection from '@/components/section/EducationSection'
import EnglishSection from '@/components/section/EnglishSection'
import GroupSection from '@/components/section/GroupSection'
import LifeSection from '@/components/section/LifeSection'
import ProgramSection from '@/components/section/ProgramSection'
import SliderComp from '@/components/sliderComp/SliderComp'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="overflow-x-hidden" id='main'>
      <section className="hero min-h-screen" style={{ backgroundImage: 'url("/images/fon.webp")' }}>
        <div className="hero-content text-center">
          <div className="max-w-xl pb-80">
            <h1 className="mb-5 sd:text-6xl xz:text-4xl text-[#F4141D] font-extrabold text-center">
              Образовательный центр
            </h1>
            <p className="mt-7 font-extrabold text-xl uppercase mb-10">
              Никогда не переставай учиться
            </p>
            <BtnComp title='Получить консультацию'  handleOrderClick={handleOrderClick} />
          </div>
        </div>
      </section>

      <AboutSection  handleOrderClick={handleOrderClick} />

      <AdvantagesSection  handleOrderClick={handleOrderClick} />

      <SliderComp />

      <LifeSection  handleOrderClick={handleOrderClick} />

      <GroupSection  handleOrderClick={handleOrderClick} />

      <EducationSection />

      <EnglishSection  handleOrderClick={handleOrderClick} />

      <ProgramSection  handleOrderClick={handleOrderClick} />


      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  )
}
