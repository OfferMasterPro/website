'use client';

import { motion } from 'framer-motion';
import OfferCarousel from '@/components/OfferCarousel';
import StudyPlanForm from '@/components/StudyPlanForm';

const offers = [
  { src: '/offers/offer1.jpg', alt: 'Offer Letter 1' },
  { src: '/offers/offer2.jpg', alt: 'Offer Letter 2' },
  { src: '/offers/offer3.jpg', alt: 'Offer Letter 3' },
  { src: '/offers/offer4.jpg', alt: 'Offer Letter 4' },
  { src: '/offers/offer5.jpg', alt: 'Offer Letter 5' },
  { src: '/offers/offer6.jpg', alt: 'Offer Letter 6' },
];

const OfferAdmissionsPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            成功案例展示
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            滑动浏览我们帮助学生获得的真实 Offer，点击可放大查看详情。
          </p> */}
        </motion.div>

        {/* Offer Carousel Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <OfferCarousel offers={offers} />
        </motion.div>

        {/* Study Plan Form Section */}
        <StudyPlanForm />

      </div>
    </div>
  );
};

export default OfferAdmissionsPage;
