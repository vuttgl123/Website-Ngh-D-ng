import { motion } from "framer-motion";
import { slideUpStagger } from "@/utils/animations";

const roomData = [
  {
    img: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/couchette.webp",
    label: "PHÒNG COUCHETTE",
    note: "(02 người)",
    full: true,
  },
  {
    img: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/roomette.webp",
    label: "PHÒNG ROOMETTE",
    note: "(04–06 người)",
  },
  {
    img: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/pullman.webp",
    label: "PHÒNG PULLMAN (VIP)",
    note: "(02 người)",
  },
];

export default function AccommodationSection() {
  return (
    <section className="bg-[#f5eee5] lg:px-20 py-16">
      {/* Tiêu đề */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2
          className="text-green-700 text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Dịch vụ lưu trú
        </h2>
        <p className="text-gray-700">
          Lấy cảm hứng từ cuộc hành trình vượt qua giải ngân hà, mỗi khu vực lưu trú của Mộc Châu Island mang một màu sắc và phong cách riêng biệt, tạo điểm nhấn độc bản giữa lòng thung lũng đầy sắc xanh.
        </p>
      </div>

      {/* Grid chia 2 cột */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Cột trái: ảnh + mô tả */}
        <div className="flex flex-col">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="overflow-hidden shadow-lg"
          >
            <img
              src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/2-1.jpg"
              alt="Bullet Hotel"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="bg-white p-6 border border-green-600"
          >
            <h3 className="text-green-700 text-2xl font-bold mb-2">BULLET HOTEL</h3>
            <p className="mb-1 font-semibold">Chuyến tàu xuyên không</p>
            <p className="text-sm text-gray-700 mb-4">
              Thiết kế hiện đại mang hình dáng của con tàu siêu tốc xuyên không tọa lạc giữa núi
              rừng thiên nhiên với hướng nhìn trọn Mộc Châu Island.
            </p>

            <p className="font-semibold">Tổng 37 phòng</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-green-900 mt-4">
              <li>✅ Minibar</li>
              <li>✅ Bồn tắm lớn</li>
              <li>✅ 2 Bể bơi vô cực</li>
              <li>✅ Điều hòa 2 chiều</li>
              <li>✅ 50m2</li>
              <li>✅ Bãi đỗ xe miễn phí</li>
              <li>✅ Wifi miễn phí</li>
              <li>✅ Bữa sáng</li>
              <li>✅ TV màn hình phẳng</li>
              <li>✅ Bàn làm việc</li>
              <li>✅ Xe điện nội khu</li>
              <li>✅ Phòng khách riêng</li>
              <li>✅ Khu nướng BBQ riêng</li>
              <li>✅ View nhìn ra cầu kính</li>
            </ul>
          </motion.div>
        </div>

        {/* Cột phải: 3 ảnh phòng */}
        <div className="grid grid-cols-2 gap-4">
          {roomData.map((room, index) => (
            <motion.div
              key={room.label}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUpStagger}
              className={`${room.full ? "col-span-2" : ""} relative overflow-hidden`}
            >
              <img src={room.img} alt={room.label} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full text-center bg-black/70 text-white py-1 text-sm font-semibold">
                {room.label} <span className="font-normal">{room.note}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
