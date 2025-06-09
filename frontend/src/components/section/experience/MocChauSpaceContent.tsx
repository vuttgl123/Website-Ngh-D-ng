export default function MocChauSpaceContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Hình ảnh bên trái */}
        <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/rrrrr-1.jpg"
          alt="Mộc Châu Space"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Nội dung bên phải */}
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Mộc Châu Space
        </h2>
        <p className="text-orange-600 font-semibold text-lg">
          Không gian của tương lai
        </p>
        <p>
          Nơi sáng tạo, nghệ thuật và công nghệ hội tụ — Mộc Châu Space không chỉ là điểm check-in độc đáo mà còn là nơi truyền cảm hứng sáng tạo cho giới trẻ và gia đình.
        </p>
        <p>
          Với kiến trúc hiện đại hoà quyện thiên nhiên, không gian này mang đến trải nghiệm đa giác quan: từ ánh sáng, âm thanh đến các hoạt động tương tác thực tế.
        </p>
        <p>
          Đây là nơi kết nối quá khứ – hiện tại – tương lai, là điểm hẹn lý tưởng cho những ai muốn khám phá nét mới mẻ giữa miền sơn cước.
        </p>
      </div>
    </div>
  );
}
