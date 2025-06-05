import { motion } from "framer-motion";
import { slideRight, slideLeft } from "../../utils/animations"; // Đường dẫn tùy dự án

export default function InspirationSection() {
  return (
    <section className="bg-[#f5eee5] px-4 md:px-8 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">

        {/* Ảnh bên trái - trái sang phải */}
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl shadow-lg group h-full max-h-[520px]"
        >
          <img
            src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/ooo-992x800.jpg"
            alt="Moc Chau Island"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-green-900/90 text-white px-6 py-4 text-xl font-semibold flex items-center gap-2">
            <span className="text-3xl leading-none">“</span>
            <span>Ánh sáng chan hòa</span>
          </div>
        </motion.div>

        {/* Nội dung bên phải - phải sang trái */}
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="border border-green-300 border-dashed rounded-2xl p-8 flex flex-col h-full max-h-[520px]"
        >
          <h2
            className="text-green-700 text-3xl lg:text-4xl mb-6 leading-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Nguồn cảm hứng từ những giá trị vượt thời gian
          </h2>
          <div className="text-xs md:text-sm lg:text-base text-gray-800 space-y-4 leading-normal">
            <p>
              Mộc Châu Group – giống như một người dân bản địa hiếu khách – là cầu nối gìn giữ vẻ đẹp thiên nhiên,
              bảo tồn bản sắc địa phương song hành cùng sáng tạo và phát triển những tiện nghi hiện đại...
            </p>
            <p>
              Không chỉ dừng lại ở cảnh đẹp, hay giải trí đơn thuần, Mộc Châu Group mang đến cho du khách trải nghiệm thật sự giá trị...
            </p>
            <p>
              Đồng hành với mọi thăng – trầm từ sâu trong tâm hồn, Mộc Châu Group như “chiếc nôi” ôm ấp và nâng niu...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
