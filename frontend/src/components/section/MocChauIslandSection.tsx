export default function MocChauIslandSection() {
  return (
    <section className="bg-[#fdfaf5] px-4 py-14 md:px-12 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Nội dung bên trái */}
        <div className=" flex flex-col h-full max-h-[520px]">
          <h2
            className="text-green-700 text-7xl md:text-7xl font-normal"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Mộc Châu Island
          </h2>
          <div className="text-xs md:text-sm lg:text-base text-gray-800 space-y-4 leading-normal">
            <p>
              Lấy cảm hứng từ sự trường tồn của thiên nhiên, tại trái tim của miền Tây Bắc hùng tráng mà cũng đầy xinh đẹp,
              Mộc Châu Island vẽ nên bức tranh giao thoa của giá trị lịch sử và tương lai, tạo ra những giá trị độc bản cho du khách.
            </p>
            <p>
              Hành trình trải nghiệm từ những cảnh sắc, biểu tượng đậm bản sắc văn hóa Tây Bắc đến những công trình tân tiến
              được con người tiếp tục viết nên sẽ mang tới cho bạn kỳ nghỉ trọn vẹn, đẳng cấp nơi thung lũng bình yên.
            </p>
            <p>
              <strong>Quy mô:</strong> 24 HA<br />
              <strong>Vị trí:</strong> Mường Sang, Mộc Châu, Sơn La
            </p>
          </div>
        </div>

        {/* Ảnh bên phải */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg group h-full max-h-[320px]">
          <img
            src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/vvvvvv.webp"
            alt="Moc Chau Island"
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
