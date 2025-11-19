import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">OFFERMASTER</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/study-abroad" className="text-gray-600 hover:text-gray-800">
                留学申请
              </Link>
            </li>
            <li>
              <Link href="/academic-tutoring" className="text-gray-600 hover:text-gray-800">
                学习辅导
              </Link>
            </li>
            <li>
              <Link href="/career-lifestyle" className="text-gray-600 hover:text-gray-800">
                工作生活
              </Link>
            </li>
            <li>
              <Link href="/offer-admissions" className="text-gray-600 hover:text-gray-800">
                Offer录取
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
