import { motion } from "framer-motion";
import { slideUpStagger } from "@/utils/animations";

const roomImages = [
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/neptune.webp",
    label: "NEPTUNE / URANUS ROOM",
    note: "(30 người)",
    full: true,
  },
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/venus.webp",
    label: "PHÒNG MERCURY / VENUS",
    note: "(10 người)",
  },
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/earth.webp",
    label: "PHÒNG EARTH / MARS",
    note: "(20 người)",
  },
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/jupiter.webp",
    label: "PHÒNG JUPITER / SATURN",
    note: "(48 người)",
    full: true,
  },
];

export default function NebulaGlampingSection() {
  return (
    <section className="bg-white px-4 lg:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Bên trái: hình ảnh các phòng */}
        <div className="grid grid-cols-2 gap-4">
          {roomImages.map((room, index) => (
            <motion.div
              key={room.label}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUpStagger}
              className={`${room.full ? "col-span-2" : ""} relative overflow-hidden`}
            >
              <img src={room.src} alt={room.label} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full text-center bg-black/70 text-white py-1 text-sm font-semibold">
                {room.label} <span className="font-normal">{room.note}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bên phải: ảnh banner không viền + mô tả có viền */}
        <div className="flex flex-col">
          {/* Ảnh KHÔNG viền */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="overflow-hidden"
          >
            <img
              src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/9.jpg"
              alt="Nebula Glamping"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Mô tả CÓ viền xanh */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="border border-green-600 border-t-0 p-6"
          >
            <h3 className="text-green-700 text-2xl font-bold mb-2">NEBULA GLAMPING</h3>
            <p className="font-semibold mb-1">Chu du trên giải ngân hà</p>
            <p className="text-sm text-gray-700 mb-4">
              Lấy cảm hứng từ hệ mặt trời trong dải ngân hà, Nebula Glamping là sự lựa chọn lý tưởng
              cho đoàn đông để cắm trại. Với sức chứa toàn khu lên đến <strong>300 người</strong> cùng
              cơ sở vật chất tiện nghi, chu đáo, mang đến chuyến đi đáng nhớ cho tất cả thành viên.
            </p>

            <p className="font-semibold">Tổng 11 phòng</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-green-900 mt-4">
              <li>✅ Minibar</li>
              <li>✅ Điều hòa 2 chiều</li>
              <li>✅ Wifi miễn phí</li>
              <li>✅ Ban công lớn</li>
              <li>✅ Khu nướng BBQ riêng</li>
              <li>✅ Bãi đỗ xe miễn phí</li>
              <li>✅ TV màn hình phẳng</li>
              <li>✅ Minibar</li>
              <li>✅ Điều hòa 2 chiều</li>
              <li>✅ Wifi miễn phí</li>
              <li>✅ Tủ Locker riêng</li>
              <li>✅ Nhà vệ sinh trong phòng</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
