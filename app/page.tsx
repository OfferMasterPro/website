import Link from "next/link";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">OFFERMASTER 全球留学</h1>
          <p className="text-xl mb-8">专业留学服务，助你拿下世界名校 offer</p>
          <Link href="/study-abroad" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            {/* Who We Are */}
            <InfoCard title="我们是谁？">
              <p>OFFERMASTER 全球留学 由来自 哥伦比亚大学、加州理工学院、哈佛大学、杜克大学、牛津大学、悉尼大学 等学校的教授和PhD专业科研人员组成的固定专家团队创办，致力于打造一个 高端、专业、可信、优质 的留学服务和人生运营平台。</p>
              <p>我们联合全球 mentor 资源，建立了持久综合合作的 固定导师团队，其中不乏联合创始人、超级项目经理、全职经验 mentor 等专家成员，并接入了一套自主运营的 家族精英工作室制度，以确保维持服务质量和持续更新学员体验。</p>
              <p>我们不仅包括美英留学申请，还专注于后期语言培训、学术辅导、职业运营、根据精细频道结合数据分析进行特色化调研，真正做到“一站式留学规划，一定能成功”。</p>
            </InfoCard>

            {/* Our Services */}
            <InfoCard title="我们的服务">
              <ul className="list-disc list-inside space-y-2">
                <li>名校申请项目（美国 / 英国 / 加拿大 / 澳大利亚 / 新加坡 等）</li>
                <li>海外本科、硕士、博士申请一站式指导服务</li>
                <li>文书修改与优化</li>
                <li>面试辅导与背景打造</li>
                <li>个性化申请规划</li>
                <li>海外生活指导</li>
                <li>语言培训（托福 / 雅思 / GRE / GMAT / 多邻国）</li>
                <li>系统备考课程与小组辅导规划</li>
                <li>正规/非正规项目经验运营指导</li>
              </ul>
            </InfoCard>

            {/* Contact Us */}
            <InfoCard title="联系我们">
              <div>
                <p>微信: OfferMaster2009</p>
                <p>电话: 18863124830</p>
                <p>邮箱: offerprocom@gmail.com</p>
                <div className="mt-4 text-center">
                  <Image
                    src="/wechat-qrcode.png"
                    alt="WeChat QR Code"
                    width={128}
                    height={128}
                    className="mx-auto"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    扫码添加微信，获取免费项目评估
                  </p>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
