'use client';

import { motion } from 'framer-motion';
import { FaPlaneArrival, FaHeartbeat, FaBriefcase, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';

const CareerLifestylePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const timelineData = [
    {
      icon: <FaPlaneArrival className="text-5xl text-blue-500" />,
      title: '🛬 入境落地与生活安排',
      content: '签证、行前准备、住房、银行开户、接机等一站式服务，助你平稳过渡。',
      color: 'bg-blue-500',
    },
    {
      icon: <FaHeartbeat className="text-5xl text-red-500" />,
      title: '🤝 异地适应与心理支持',
      content: '文化适应指导、社交建议、压力管理与危机应对，更有中文心理咨询资源支持。',
      color: 'bg-red-500',
    },
    {
      icon: <FaBriefcase className="text-5xl text-green-500" />,
      title: '💼 实习 & 就业辅导',
      content: '简历指导、面试模拟、职业路径咨询、实习项目推荐，以及 OPT/CPT/工签规划。',
      color: 'bg-green-500',
    },
    {
      icon: <FaMapMarkedAlt className="text-5xl text-purple-500" />,
      title: '🧳 长期发展与移民规划',
      content: '海外身份规划、家庭陪读签证、买房/工作签证/PR 路径建议，以及回国发展路径建议。',
      color: 'bg-purple-500',
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-500" />,
      title: '🔗 校友社区与区域互助',
      content: '加入 OFFER MASTER 地区群，参与校友聚会，成为全球留学互助网络的一员。',
      color: 'bg-yellow-500',
    },
  ];

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
            🌏 留学不止是录取，更是生活重建的开始
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OFFER MASTER 关注每位学子的成长全周期。拿到 Offer 只是第一步，真正的挑战，是开始在异国他乡生活、学习、发展。我们提供一站式生活适应、职业探索与落地支持，陪伴你度过从“学生”到“全球人才”的每一步。
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {timelineData.map((item, index) => (
              <motion.div key={index} className="mb-12 flex items-center w-full" variants={itemVariants}>
                <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                  <div className="w-full max-w-md">
                    <div className={`p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerLifestylePage;
