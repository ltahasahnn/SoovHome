import React, { useEffect, useState } from 'react'
import { count } from '../store/reducers/exampleReducer'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Footer from '../components/Footer'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const Article3 = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  useEffect(() => {
    document.title = "Soov Home | Hakkımızda"
  }, [])

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const { images, imagess, count } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] h-full bg-[#f2f2f2] p-10">
        <div className="m-auto p-16 h-full max-md:text-xs container grid grid-cols-2 bg-stone-200 grid h-full h-fit flex p-4">
          <div className="flex h-full flex-col sm:border-r border-[#000] max-sm:col-span-2 border-opacity-25 p-4 overflow-hidden px-10 text-stone-600">
            <span className='font-bold md:text-xl'>SoovHome: Estetiği ve Rahatlığı Buluşturan Koltuk Deneyimi</span>

            <p className='mt-6 font-bold md:text-xl'>Merhaba Sevgili SoovHome Severler!</p>

            <p className='mt-6'>Sizlere hayalinizdeki konforlu oturma alanını sunan, estetik tasarımlarla evlerinizi süsleyen SoovHome ailesine hoş geldiniz! Biz, koltuk dünyasına yepyeni bir soluk getirerek, fonksiyonelliği ve zarafeti bir araya getiriyoruz.</p>

            <span className='mt-6 font-bold md:text-xl'>Wood Serisi: Doğadan Esintilerle Buluşun</span>

            <p className='mt-6'>Ahşabın sıcaklığını ve doğanın zarafetini evinize taşıyan Wood Serisi, minimalizmle şıklığı buluşturuyor. Her bir parça, ustalarımızın elinden geçerek, özenle tasarlanıp üretiliyor. Sadece bir koltuk değil, odanıza anlam katıyoruz. Wood Serisi ile modern yaşam tarzınızı ve doğayla uyumu bir araya getirin.</p>
            <span className='mt-6 font-bold md:text-xl'>Dortmund Serisi: Şıklıkta Zirve</span>

            <p className='mt-6'>Dortmund Serisi, şıklığın ve konforun mükemmel bir birleşimidir. Modern tasarım anlayışını benimseyen bu seride, özel dokunuşlarla zenginleştirilmiş kumaşlar ve renk paletleriyle evinize özgünlük katıyoruz. Her bir koltuk, rahatlığıyla sizi sararken, zarafetiyle de misafirlerinizi etkileyecek.</p>
          </div>
          <div className="flex-h-full flex-col p-4 overflow-hidden max-sm:col-span-2 px-10 text-stone-600">
            <span className='mt-6 font-bold md:text-xl'>SoovHome Farkı Nedir?</span>
            <ul className='mt-6'>
              <li className='my-4 list-disc'>Özgün Tasarımlar: Her bir koltuğumuz, tasarım ekibimizin yaratıcılığından doğan özgün detaylarla bezeli. Sadece oturmak değil, aynı zamanda bir sanat eserinin parçasına sahip olmak istiyorsanız, SoovHome sizin için burada.</li>
              <li className='my-4 list-disc'>Üstün Kalite: Kullanılan malzemelerde kaliteden ödün vermiyoruz. Sadece dayanıklılık değil, aynı zamanda uzun yıllar boyunca ilk günkü gibi şık görünüm sunuyoruz.</li>
              <li className='my-4 list-disc'>Müşteri Memnuniyeti: SoovHome ailesi olarak sizin memnuniyetiniz bizim için en önemli önceliktir. Sorularınız ve talepleriniz için her zaman buradayız.</li>

              <p className='mt-6'>Evinizi daha özel kılmak, konfora yeni bir boyut eklemek istiyorsanız, SoovHome'u tercih edin. Sadece bir koltuk değil, yaşam tarzınızı yansıtan bir sanat eseri!</p>

              <p className='mt-6'>Hayalinizdeki oturma alanını keşfetmek için bizi ziyaret edin veya online mağazamızdan göz atın. SoovHome ile yaşam alanlarınıza değer katın!</p>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article3