import { motion } from "framer-motion";
import { slideUpStagger } from "@/utils/animations";

const roomImages = [
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/newmoon.webp",
    label: "NEW MOON",
    note: "(2 người)",
  },
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/fullmoon.webp",
    label: "FULL MOON",
    note: "(4 người)",
  },
  {
    src: "https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/crescent.webp",
    label: "CRESCENT",
    note: "(8 người)",
    full: true,
  },
];

export default function LuneCampingSection() {
  return (
    <section className=" lg:px-20 py-16 bg-[#f5eee5]">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Bên trái: ảnh banner + mô tả có border */}
        <div className="flex flex-col">
          {/* Ảnh KHÔNG viền */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="overflow-hidden"
          >
            <img
              src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/v-1.jpg"
              alt="Lune Camping"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Mô tả CÓ viền xanh */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpStagger}
            className="border border-green-600 border-t-0 p-6"
          >
            <h3 className="text-green-700 text-2xl font-bold mb-2">LUNE CAMPING</h3>
            <p className="font-semibold mb-1">Đắm chìm trong ánh trăng huyền ảo</p>
            <p className="text-sm text-gray-700 mb-4">
              Nằm trên vị trí cao nhất của Mộc Châu Island, Lune Camping như vầng trăng huyền ảo và
              đầy thơ mộng của hòn đảo trú phù. Tại đây, du khách sẽ lần đầu tiên được trải nghiệm
              khu cắm trại hiện đại nhất, đem tới cảm giác an nhiên khi được sống gần gũi với thiên nhiên.
            </p>

            <p className="font-semibold">Tổng 15 phòng</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-green-900 mt-4">
              <li>✅ Bữa sáng</li>
              <li>✅ Xe điện nội khu</li>
              <li>✅ View nhìn ra thung lũng</li>
              <li>✅ 2 Bể bơi vô cực</li>
              <li>✅ Bãi đỗ xe miễn phí</li>
              <li>✅ Điều hòa, quạt</li>
              <li>✅ Đèn sưởi (Mùa đông)</li>
            </ul>
          </motion.div>
        </div>

        {/* Bên phải: ảnh các phòng */}
        <div className="grid grid-cols-2 gap-4">
          {roomImages.map((room, index) => (
            <motion.div
              key={room.label}
              custom={index + 2}
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
      </div>
    </section>
  );
}
