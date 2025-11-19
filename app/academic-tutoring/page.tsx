'use client';

import { motion } from 'framer-motion';
import { FaLanguage, FaLaptopCode, FaFlask, FaTrophy, FaQuestionCircle, FaShieldAlt, FaBook, FaChartLine, FaUsers, FaBalanceScale } from 'react-icons/fa';

const AcademicTutoringPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sections = [
    {
      icon: <FaLanguage className="text-4xl text-blue-600" />,
      title: '语言考试培训',
      content: '针对不同阶段、不同目标的语言考试，提供定制化课程：TOEFL / IELTS / 多邻国（Duolingo）, GRE / GMAT（含 AWA 写作）, SAT / ACT（含阅读与数学）, Academic Writing 强化写作专项',
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-600" />,
      title: '课程作业与学术辅导',
      content: '为大学及研究生阶段学生提供专业课程与作业辅导，涵盖各类课程作业、项目修改、GPA 提升计划及线上 Office Hour 答疑支持。热门学科方向包括：数学 / 统计 / 计算机 / 商科 / 工程, 金融建模 / 数据分析 / Python & R 编程, 人文社科类课程论文修改与逻辑梳理',
    },
    {
      icon: <FaFlask className="text-4xl text-purple-600" />,
      title: '科研论文与实习辅导',
      content: '协助学生在本科与硕士阶段完成高质量科研和实习成果，包括匹配真实高校导师与科研项目、全流程辅导、英文论文写作与投稿支持，强化申请文书与推荐信获取。',
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-600" />,
      title: '国际竞赛与背景提升',
      content: '提供初高中至大学阶段的竞赛全流程指导，涵盖 STEM (AMC, AIME, USACO), 商科 & 人文 (NEC, DECA, CTB)，并可协助申请全球项目（哈佛、MIT 夏校；牛剑冬校）及国际志愿项目。',
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-teal-600" />,
      title: '学术问题答疑 & 导师支持',
      content: '配备长期导师提供一对一答疑与辅导，包括 Academic Writing 与引用规范、学术伦理问题咨询、时间管理、学习方法、压力管理等软性支持。',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      title: '学术纪律 & 法律合规咨询',
      content: '针对海外复杂学习环境，提供学术警告/Probation 处理建议、作弊/抄袭指控应对指导、校内纪律委员会沟通辅导，以及法律风险识别与专业渠道推荐。',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            全方位学习支持，奠定坚实根基
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OFFERMASTER 致力于为不同阶段学生提供全方位学习支持，帮助你打好学术基础、提升综合能力，为名校申请奠定坚实根基。
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-800 ml-4">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicTutoringPage;
