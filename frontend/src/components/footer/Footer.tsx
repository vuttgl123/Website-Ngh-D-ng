import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#f5eee5] text-gray-900 pb-12 px-6 lg:px-20 font-serif overflow-hidden">
      {/* Sóng phía trên */}
    
      {/* Nội dung footer */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Logo + Thông tin công ty */}
        <div className="flex items-start gap-6 w-full lg:w-1/2">
          <div className="flex-shrink-0">
            <img
              src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/cropped-MCG_Logo-2.png"
              alt="Moc Chau Group"
              className="w-40"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Mộc Châu Group</p>
            <p>Hotline: 0588662626</p>
            <p>Email: info@mcgroup.com.vn</p>
            <p>Địa chỉ: BT4, Lô 21 Mễ Trì Thượng, P. Mễ Trì, Q. Nam Từ Liêm, Hà Nội</p>
            <p>GPĐKKD: 0110709631</p>
            <div className="flex gap-4 text-xl pt-2">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Danh mục */}
        <div className="flex flex-col gap-2 text-sm w-full lg:w-1/4">
          <h4 className="text-lg font-bold mb-3">Giới thiệu</h4>
          <a href="#" className="hover:text-green-700 transition-all">Nghỉ dưỡng</a>
          <a href="#" className="hover:text-green-700 transition-all">Ẩm thực</a>
          <a href="#" className="hover:text-green-700 transition-all">Vui chơi giải trí</a>
          <a href="#" className="hover:text-green-700 transition-all">Hoạt động trải nghiệm</a>
          <a href="#" className="hover:text-green-700 transition-all">Liên hệ</a>
        </div>

        {/* Đăng ký */}
        <div className="w-full lg:w-1/4">
          <h4 className="text-lg font-bold mb-3">Liên hệ với chúng tôi</h4>
          <p className="text-sm mb-2">Đăng ký để nhận bản tin và ưu đãi</p>
          <form className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Điện thoại"
              className="px-4 py-2 rounded-full border border-gray-300 w-full focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full text-sm"
            >
              GỬI ĐI
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
