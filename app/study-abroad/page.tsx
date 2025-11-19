'use client';

import { motion } from 'framer-motion';
import ProgramTabs from '@/components/ProgramTabs';
import { FaBullseye, FaBrain, FaGraduationCap, FaUserTie, FaRocket, FaPencilAlt, FaComments, FaBookOpen } from 'react-icons/fa';

const coreServices = [
  { icon: <FaBullseye className="text-4xl text-blue-600" />, text: '申请规划定制' },
  { icon: <FaGraduationCap className="text-4xl text-blue-600" />, text: '院校与项目选择' },
  { icon: <FaPencilAlt className="text-4xl text-blue-600" />, text: '文书撰写与润色' },
  { icon: <FaUserTie className="text-4xl text-blue-600" />, text: '申请系统辅导' },
  { icon: <FaComments className="text-4xl text-blue-600" />, text: '面试训练与软实力包装' },
  { icon: <FaBookOpen className="text-4xl text-blue-600" />, text: '补充材料支持' },
  { icon: <FaRocket className="text-4xl text-blue-600" />, text: '背景提升项目匹配' },
];

const whyChooseUs = [
    { title: '固定导师机制', description: '导师稳定长期合作，熟悉申请流程与国际项目要求' },
    { title: '数据驱动选校', description: '内部数据库结合学生画像精准匹配专业' },
    { title: '同校同项目导师加持', description: '直击目标院校审美，快速理解录取口味' },
    { title: '适配非典型背景', description: '针对转专业、Gap Year、跨背景申请者提供独家策略' },
];

const programTabs = [
  { label: '高中申请', content: <div>...High School Content...</div> },
  { label: '大学本科申请', content: <div>...Bachelor Content...</div> },
  { label: '硕士申请', content: <div>...Master Content...</div> },
  { label: '博士申请', content: <div>...PhD Content...</div> },
  { label: '研究学者', content: <div>...Research Scholar Content...</div> },
];

const StudyAbroadPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const tabsData = [
    {
      label: '高中申请',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>SAT/ACT、IB、A-Level 课程体系衔接指导</li>
          <li>常春藤本科直申、牛剑申请支持</li>
          <li>竞赛规划支持：AMC、AIME、USACO、IGEM、ISEF、DECA、HOSA、写作竞赛等竞赛结合申请节奏定制</li>
        </ul>
      ),
    },
    {
      label: '大学本科申请',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Common App / UCAS / CAAS 系统全面辅导</li>
          <li>文书结构训练 + 成长线设计</li>
          <li>科研背景强化：对接 REU、Simons、RSIF 暑研项目</li>
          <li>项目型竞赛规划（如 Hackathon、建模大赛、咨询挑战等）</li>
        </ul>
      ),
    },
    {
      label: '硕士申请',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>针对 STEM、商科、社科、教育等专业分别定制方案</li>
          <li>强调实习/科研成果与项目对齐度</li>
          <li>推荐信与文书共同设计逻辑</li>
          <li>针对 Top 10 项目开设深度定制路径规划</li>
        </ul>
      ),
    },
    {
      label: '博士申请',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>拆解研究型简历、套磁策略、文书结构</li>
          <li>提供项目建议、论文编辑与投稿规划</li>
          <li>多轮模拟答辩式面试训练</li>
          <li>协助设计研究计划（Research Proposal）</li>
        </ul>
      ),
    },
    {
      label: '研究学者',
      content: (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>支持申请 Visiting Scholar / Exchange Fellow / Postdoc 等项目</li>
          <li>协助 J1 / H1B 签证规划</li>
          <li>强化研究适配性、国际合作能力展示</li>
          <li>推荐信写作与合作成果归档建议</li>
        </ul>
      ),
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
            🌟 我们如何帮助你拿下梦校 Offer？
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OFFER MASTER 全球留学 提供从选校规划、文书打磨到系统填写与面试准备的全流程服务。我们的导师团队由来自世界顶尖高校（如哈佛、哥大、杜克、剑桥等）的 PhD 与教授组成，服务专业、系统、有深度、真实可信。
          </p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🎯 核心服务内容</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {coreServices.map((service, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="flex justify-center items-center mb-2">{service.icon}</div>
                <p className="font-semibold text-gray-700">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🧠 为什么选择我们？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🎓 各阶段留学项目概览</h2>
          <ProgramTabs tabs={tabsData} />
        </motion.div>
      </div>
    </div>
  );
};

export default StudyAbroadPage;
