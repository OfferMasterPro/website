const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold">OFFERMASTER</h3>
            <p className="text-gray-400">您值得信赖的教育与职业发展伙伴</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">联系我们</h3>
            <p className="text-gray-400">微信: OfferMaster2009</p>
            <p className="text-gray-400">电话: 18863124830</p>
            <p className="text-gray-400">邮箱: offerprocom@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Offermaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
