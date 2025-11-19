'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'yet-another-react-lightbox/styles.css';

interface OfferCarouselProps {
  offers: { src: string; alt: string }[];
}

const OfferCarousel = ({ offers }: OfferCarouselProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full h-[400px]"
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index} className="w-[300px] h-[400px] cursor-pointer" onClick={() => openLightbox(index)}>
            <Image src={offer.src} alt={offer.alt} layout="fill" objectFit="contain" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={offers}
        index={currentIndex}
      />
    </>
  );
};

export default OfferCarousel;
