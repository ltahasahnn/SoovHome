import React, { useEffect, useState } from 'react'
import { count, countState } from '../store/reducers/exampleReducer'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Footer from '../components/Footer'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

const whatsappNumber = '905376919796';
const Article3 = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "#article"
    }, 250);
  }, [])

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const { dortmund, afilli, countState, gloria, states, media, han, countt } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();

  return (
    <div id='article'>
      <Header />
      <div className="w-full min-h-[90vh] max-xl:max-h-[70vh] max-lg:min-h-fit max-lg:max-h-fit max-h-[90vh] flex items-center h-full bg-[#f2f2f2] p-4">
        <div className="m-auto container grid grid-cols-2 bg-stone-200 grid h-full h-fit p-8">
          <div className={`flex h-[70vh] max-lg:col-span-2`}>
            {countState === 'dort' && <img src={dortmund[countt].id} className={`h-full w-full object-cover`} alt="" />}
            {countState === 'afi' && <img src={afilli[countt].id} className={`h-full w-full object-cover`} alt="" />}
            {countState === 'media' && <img src={media[countt].id} className={`h-full w-full object-cover`} alt="" />}
            {countState === 'gloria' && <img src={gloria[countt].id} className={`h-full w-full object-cover`} alt="" />}
            {countState === 'han' && <img src={han[countt].id} className={`h-full w-full object-cover`} alt="" />}
          </div>
          {countState === "dort" && <div className="w-full h-full max-lg:col-span-2 flex flex-col justify-between max-md:p-6 max-md:px-2 max-md:border-b max-md:border-[#000] max-md:border-opacity-10 px-10 overflow-hidden">
            {states === 'han/normal' && <div className="flex max-lg:col-span-2 flex-col w-full">
              <span className='font-bold text-4xl'>Wood</span>
              <p className='mt-10 text-sm'>Wood Koltuk Takımı, ismini taşıdığı ahşap dokusuyla evinize doğal bir zarafet getiriyor. Ahşabın sıcak tonları, modern tasarımıyla buluşarak zamanın ötesinde bir estetik sunuyor. Siyah ve krem renklerle bütünleşen ahşap detaylar, odanıza sıcaklık ve karakter katıyor.</p>
              <p className='mt-4 text-sm'>
                SoovHome'un Wood Koltuk Takımı, sadece göz zevkinizi değil, aynı zamanda vücudunuzun ihtiyaçlarını da düşünerek tasarlandı. Derin oturma alanları ve ergonomik form, uzun süreli oturmalarda bile üst düzey konfor sağlıyor. Rahatlığı hissetmek için tek bir dokunuş yeterli.
              </p>
            </div>}
            {states === 'han/ber' && <div className="flex max-lg:col-span-2 flex-col w-full">
              <span className='font-bold text-4xl'>Wood - Bercel</span>
              <p className='mt-10 text-sm'>Wood koltuk takımımızın bercel detayları, odanıza doğanın sıcaklığını taşıyan bir zarafet sunuyor. Ceviz rengi, odanıza derinlik ve karakter katarak, modern ve klasik unsurları birleştiriyor. Her bir bercel, özenle seçilmiş ceviz tonlarıyla özel bir atmosfer yaratıyor.

              </p>
              <p className='mt-4 text-sm'>
                Bercel koltuklarımızda kullanılan keten kumaş, hafif ve doğal dokusuyla rahatlığı zirveye taşıyor. Her oturuş, ketenin yumuşaklığıyla sarılı bir deneyim sunarken, odanıza sade ve sofistike bir hava katıyor. Keten kumaşın nefes alabilir yapısı, uzun saatler boyunca konforlu bir oturuş sağlar.
              </p>
            </div>}
            {states === 'dort/normal' && <div className="flex max-lg:col-span-2 flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımımızın siyah renkleri, odanıza sofistike bir hava katarken, aynı zamanda sade ve şık bir görünüm sunuyor. Siyahın zarafeti, modern tasarımıyla buluşarak evinize benzersiz bir stil katıyor.</p>
              <p className='mt-4 text-sm'>
                Soovhome olarak, tasarımımızda estetiği sadece göz önüne almakla kalmayıp aynı zamanda rahatlık ve ergonomiye de önem veriyoruz. Dortmund koltuk takımı, yüksek kaliteli malzemelerle tasarlanmış olup, uzun süreli oturmalarda bile maksimum konforu sağlamak üzere özel olarak üretilmiştir.
              </p>
            </div>}
            {states === 'dort/ber' && <div className="flex max-lg:col-span-2 flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund - Bercel</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımının öne çıkan özelliklerinden biri, özel olarak tasarlanmış berceleridir. Bu berceler, sadece rahatlık sunmakla kalmaz, aynı zamanda şıklığı da beraberinde getirir. Dolgun minderleri ve ergonomik yapısıyla, uzun saatler boyunca keyifli bir oturma deneyimi sunar. SoovHome'un berceleri, yaşam alanlarınızda konforun ve zarafetin mükemmel bir birleşimini sağlar.

              </p>
              <p className='mt-4 text-sm'>
                Ev sahibi olmanın keyfini çıkarırken, SoovHome mobilyalarıyla yaşam alanlarınızı özelleştirin. Dortmund koltuk takımı, berceler ve normal koltuklarımızla konforun ve şıklığın bir araya geldiği eşsiz bir deneyimi sizlere sunuyor. SoovHome ile yaşam alanlarınızı daha özel kılın, konforun tadını çıkarın.
              </p>
            </div>}
            <div className="w-full mt-4 max-lg:col-span-2 flex items-center justify-between">
              <Link to="/home" className="max-w-[40px] max-h-[40px] text-sm hover:bg-white hover:text-black cursor-pointer hover:max-h-[42.5px] hover:max-w-[42.5px] rounded-full bg-black text-white flex items-center justify-center p-3">
                <ChevronLeftIcon className='w-full h-full' />
              </Link>
              <div className="w-full flex justify-end items-center">
                <Link to={`https://wa.me/${whatsappNumber}`}  ><img src="assets/images/whatsapp-logo.png" className='max-w-[46px] max-h-[46px] w-full h-full cursor-pointer' alt="" /></Link>
                <Link to="https://www.facebook.com/soovhome/"><img src="assets/images/facebook-white.png" className='max-w-[40px] max-h-[40px] mx-6 cursor-pointer' alt="" /></Link>
                <Link to="https://www.instagram.com/soovhome/"><img src="assets/images/instagram-white.png" className='max-w-[36px] max-h-[36px] w-full h-full cursor-pointer' alt="" /></Link>
              </div>
            </div>
          </div>}
          {countState === 'han' && <div className="w-full h-full max-lg:col-span-2 flex flex-col justify-between max-md:p-6 max-md:px-2 max-md:border-b max-md:border-[#000] max-md:border-opacity-10 px-10 overflow-hidden">
            {states === 'han/normal' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Wood</span>
              <p className='mt-10 text-sm'>Wood Koltuk Takımı, ismini taşıdığı ahşap dokusuyla evinize doğal bir zarafet getiriyor. Ahşabın sıcak tonları, modern tasarımıyla buluşarak zamanın ötesinde bir estetik sunuyor. Siyah ve krem renklerle bütünleşen ahşap detaylar, odanıza sıcaklık ve karakter katıyor.</p>
              <p className='mt-4 text-sm'>
                SoovHome'un Wood Koltuk Takımı, sadece göz zevkinizi değil, aynı zamanda vücudunuzun ihtiyaçlarını da düşünerek tasarlandı. Derin oturma alanları ve ergonomik form, uzun süreli oturmalarda bile üst düzey konfor sağlıyor. Rahatlığı hissetmek için tek bir dokunuş yeterli.
              </p>
            </div>}
            {states === 'han/ber' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Wood - Bercel</span>
              <p className='mt-10 text-sm'>Wood koltuk takımımızın bercel detayları, odanıza doğanın sıcaklığını taşıyan bir zarafet sunuyor. Ceviz rengi, odanıza derinlik ve karakter katarak, modern ve klasik unsurları birleştiriyor. Her bir bercel, özenle seçilmiş ceviz tonlarıyla özel bir atmosfer yaratıyor.

              </p>
              <p className='mt-4 text-sm'>
                Bercel koltuklarımızda kullanılan keten kumaş, hafif ve doğal dokusuyla rahatlığı zirveye taşıyor. Her oturuş, ketenin yumuşaklığıyla sarılı bir deneyim sunarken, odanıza sade ve sofistike bir hava katıyor. Keten kumaşın nefes alabilir yapısı, uzun saatler boyunca konforlu bir oturuş sağlar.
              </p>
            </div>}
            {states === 'dort/normal' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımımızın siyah renkleri, odanıza sofistike bir hava katarken, aynı zamanda sade ve şık bir görünüm sunuyor. Siyahın zarafeti, modern tasarımıyla buluşarak evinize benzersiz bir stil katıyor.</p>
              <p className='mt-4 text-sm'>
                Soovhome olarak, tasarımımızda estetiği sadece göz önüne almakla kalmayıp aynı zamanda rahatlık ve ergonomiye de önem veriyoruz. Dortmund koltuk takımı, yüksek kaliteli malzemelerle tasarlanmış olup, uzun süreli oturmalarda bile maksimum konforu sağlamak üzere özel olarak üretilmiştir.
              </p>
            </div>}
            {states === 'dort/ber' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund - Bercel</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımının öne çıkan özelliklerinden biri, özel olarak tasarlanmış berceleridir. Bu berceler, sadece rahatlık sunmakla kalmaz, aynı zamanda şıklığı da beraberinde getirir. Dolgun minderleri ve ergonomik yapısıyla, uzun saatler boyunca keyifli bir oturma deneyimi sunar. SoovHome'un berceleri, yaşam alanlarınızda konforun ve zarafetin mükemmel bir birleşimini sağlar.

              </p>
              <p className='mt-4 text-sm'>
                Ev sahibi olmanın keyfini çıkarırken, SoovHome mobilyalarıyla yaşam alanlarınızı özelleştirin. Dortmund koltuk takımı, berceler ve normal koltuklarımızla konforun ve şıklığın bir araya geldiği eşsiz bir deneyimi sizlere sunuyor. SoovHome ile yaşam alanlarınızı daha özel kılın, konforun tadını çıkarın.
              </p>
            </div>}
            <div className="w-full mt-4 flex items-center justify-between">
              <Link to="/home" className="max-w-[40px] max-h-[40px] text-sm hover:bg-white hover:text-black cursor-pointer hover:max-h-[42.5px] hover:max-w-[42.5px] rounded-full bg-black text-white flex items-center justify-center p-3">
                <ChevronLeftIcon className='w-full h-full' />
              </Link>
              <div className="w-full flex justify-end items-center">
                <Link to={`https://wa.me/${whatsappNumber}`}  ><img src="assets/images/whatsapp-logo.png" className='max-w-[46px] max-h-[46px] w-full h-full cursor-pointer' alt="" /></Link>
                <Link to="https://www.facebook.com/soovhome/"><img src="assets/images/facebook-white.png" className='max-w-[40px] max-h-[40px] mx-6 cursor-pointer' alt="" /></Link>
                <Link to="https://www.instagram.com/soovhome/"><img src="assets/images/instagram-white.png" className='max-w-[36px] max-h-[36px] w-full h-full cursor-pointer' alt="" /></Link>
              </div>
            </div>
          </div>}
          {countState === 'media' && <div className="w-full h-full max-lg:col-span-2 flex flex-col justify-between max-md:p-6 max-md:px-2 max-md:border-b max-md:border-[#000] max-md:border-opacity-10 px-10 overflow-hidden">
            {states === 'han/normal' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Wood</span>
              <p className='mt-10 text-sm'>Wood Koltuk Takımı, ismini taşıdığı ahşap dokusuyla evinize doğal bir zarafet getiriyor. Ahşabın sıcak tonları, modern tasarımıyla buluşarak zamanın ötesinde bir estetik sunuyor. Siyah ve krem renklerle bütünleşen ahşap detaylar, odanıza sıcaklık ve karakter katıyor.</p>
              <p className='mt-4 text-sm'>
                SoovHome'un Wood Koltuk Takımı, sadece göz zevkinizi değil, aynı zamanda vücudunuzun ihtiyaçlarını da düşünerek tasarlandı. Derin oturma alanları ve ergonomik form, uzun süreli oturmalarda bile üst düzey konfor sağlıyor. Rahatlığı hissetmek için tek bir dokunuş yeterli.
              </p>
            </div>}
            {states === 'han/ber' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Wood - Bercel</span>
              <p className='mt-10 text-sm'>Wood koltuk takımımızın bercel detayları, odanıza doğanın sıcaklığını taşıyan bir zarafet sunuyor. Ceviz rengi, odanıza derinlik ve karakter katarak, modern ve klasik unsurları birleştiriyor. Her bir bercel, özenle seçilmiş ceviz tonlarıyla özel bir atmosfer yaratıyor.

              </p>
              <p className='mt-4 text-sm'>
                Bercel koltuklarımızda kullanılan keten kumaş, hafif ve doğal dokusuyla rahatlığı zirveye taşıyor. Her oturuş, ketenin yumuşaklığıyla sarılı bir deneyim sunarken, odanıza sade ve sofistike bir hava katıyor. Keten kumaşın nefes alabilir yapısı, uzun saatler boyunca konforlu bir oturuş sağlar.
              </p>
            </div>}
            {states === 'dort/normal' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımımızın siyah renkleri, odanıza sofistike bir hava katarken, aynı zamanda sade ve şık bir görünüm sunuyor. Siyahın zarafeti, modern tasarımıyla buluşarak evinize benzersiz bir stil katıyor.</p>
              <p className='mt-4 text-sm'>
                Soovhome olarak, tasarımımızda estetiği sadece göz önüne almakla kalmayıp aynı zamanda rahatlık ve ergonomiye de önem veriyoruz. Dortmund koltuk takımı, yüksek kaliteli malzemelerle tasarlanmış olup, uzun süreli oturmalarda bile maksimum konforu sağlamak üzere özel olarak üretilmiştir.
              </p>
            </div>}
            {states === 'dort/ber' && <div className="flex flex-col w-full">
              <span className='font-bold text-4xl'>Dortmund - Bercel</span>
              <p className='mt-10 text-sm'>Dortmund koltuk takımının öne çıkan özelliklerinden biri, özel olarak tasarlanmış berceleridir. Bu berceler, sadece rahatlık sunmakla kalmaz, aynı zamanda şıklığı da beraberinde getirir. Dolgun minderleri ve ergonomik yapısıyla, uzun saatler boyunca keyifli bir oturma deneyimi sunar. SoovHome'un berceleri, yaşam alanlarınızda konforun ve zarafetin mükemmel bir birleşimini sağlar.

              </p>
              <p className='mt-4 text-sm'>
                Ev sahibi olmanın keyfini çıkarırken, SoovHome mobilyalarıyla yaşam alanlarınızı özelleştirin. Dortmund koltuk takımı, berceler ve normal koltuklarımızla konforun ve şıklığın bir araya geldiği eşsiz bir deneyimi sizlere sunuyor. SoovHome ile yaşam alanlarınızı daha özel kılın, konforun tadını çıkarın.
              </p>
            </div>}
            <div className="w-full mt-4 flex items-center justify-between">
              <Link to="/home" className="max-w-[40px] max-h-[40px] text-sm hover:bg-white hover:text-black cursor-pointer hover:max-h-[42.5px] hover:max-w-[42.5px] rounded-full bg-black text-white flex items-center justify-center p-3">
                <ChevronLeftIcon className='w-full h-full' />
              </Link>
              <div className="w-full flex justify-end items-center">
                <Link to={`https://wa.me/${whatsappNumber}`}  ><img src="assets/images/whatsapp-logo.png" className='max-w-[46px] max-h-[46px] w-full h-full cursor-pointer' alt="" /></Link>
                <Link to="https://www.facebook.com/soovhome/"><img src="assets/images/facebook-white.png" className='max-w-[40px] max-h-[40px] mx-6 cursor-pointer' alt="" /></Link>
                <Link to="https://www.instagram.com/soovhome/"><img src="assets/images/instagram-white.png" className='max-w-[36px] max-h-[36px] w-full h-full cursor-pointer' alt="" /></Link>
              </div>
            </div>
          </div>}
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default Article3