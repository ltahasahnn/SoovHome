import React, { useEffect, useState } from 'react'
import { count, falsee, headers } from '../store/reducers/exampleReducer'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Footer from '../components/Footer'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

const Article3 = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  useEffect(() => {
    document.title = "Soov Home | Hakkımızda"
    dispatch(falsee())
    dispatch(headers(2))
  }, [])
  const { images, imagess, count, footer, about } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();

  useEffect(() => {
    if (footer === 0)
      window.location.href = "#hakkimizda"
    if (footer === 1)
      window.location.href = "#vizyon"
    if (footer === 2)
      window.location.href = "#urunlerimiz"
    if (footer === 3)
      window.location.href = "#musteri-hizmetleri"
  }, [footer])

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });

  return (
    <div>
      <Header />
      <motion.div
        id='bilgi'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full min-h-[90vh] h-full bg-[#f2f2f2] p-10">
        <div className="m-auto p-16 h-full max-md:text-xs container grid grid-cols-2 bg-stone-200 grid h-full h-fit flex p-4">
          <div className="flex h-full flex-col sm:border-r border-[#000] max-sm:col-span-2 border-opacity-25 p-4 overflow-hidden px-10 text-stone-600">
            <span className='font-bold md:text-xl'>Hoş Geldiniz SoovHome'a!</span>

            <p className='mt-6'>SoovHome, konfor ve şıklığı bir araya getirerek evinizi yeniden tanımlamanıza yardımcı olan bir koltuk markasıdır. Kaliteli malzemeler, zarif tasarımlar ve müşteri memnuniyeti odaklı hizmet anlayışımızla, evinizi daha sıcak ve davetkar bir yer haline getirmek için buradayız.</p>

            <span id="hakkimizda" className='mt-6 font-bold md:text-xl'>Hakkımızda</span>

            <p className='mt-6'>SoovHome, uzun yıllara dayanan sektör deneyimi ve tutkuyla, ev dekorasyonunuza özel bir dokunuş katmayı hedefleyen bir markadır. Her koltuğumuz, estetik tasarımlarla birleşen dayanıklılık ve konfor sunarak yaşam alanlarınıza değer katmayı amaçlar.</p>

            <span id="vizyon" className='mt-6 font-bold md:text-xl'>Vizyonumuz</span>

            <p className='mt-6'>SoovHome olarak, müşterilerimize kaliteli ve estetik ürünler sunarak ev yaşamını iyileştirmeyi hedefliyoruz. Vizyonumuz, sadece koltuk satmak değil, aynı zamanda evlerinizi daha kişisel ve rahat bir atmosferle doldurmanıza yardımcı olmak üzerinedir.</p>

            <span id="urunlerimiz" className='mt-6 font-bold md:text-xl'>Ürünlerimiz</span>

            <p className='mt-6'>SoovHome'un koleksiyonu, çeşitli tarzlara ve ihtiyaçlara hitap eden özenle seçilmiş koltukları içerir. Modern ve klasik tasarımlar arasında seçim yapabilir, renk ve kumaş seçenekleri ile kişiselleştirebilirsiniz. Her bir ürünümüz, hem görsel çekicilik hem de konfor açısından en yüksek standartlara uyan özel tasarımlardan oluşur.</p>

            <span id='musteri-hizmetleri' className='mt-6 font-bold md:text-xl'>Müşteri Hizmetleri</span>

            <p className='mt-6'>SoovHome, müşteri memnuniyetini en üst düzeyde tutmayı taahhüt eder. Profesyonel ve deneyimli müşteri hizmetleri ekibimiz, sizlere ürün seçimi, sipariş süreci ve satış sonrası destek konularında yardımcı olmaktan mutluluk duyacaktır. Bizim için her müşteri değerlidir ve her talep, özenle ele alınır.</p>
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
      </motion.div>
      <Footer />
    </div>
  )
}

export default Article3