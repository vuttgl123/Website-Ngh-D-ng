export default function TrekkingContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Hình ảnh bên trái */}
     <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/p.jpg"
          alt="Trekking"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nội dung bên phải */}
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Trekking
        </h2>
        <p className="text-orange-600 font-semibold text-lg">
          Chạm tới giới hạn bản thân
        </p>
        <p>
          Không đơn thuần là một hành trình khám phá, trekking tại Mộc Châu Island là chuyến phiêu lưu giữa đại ngàn – nơi bạn thực sự cảm nhận được sức sống của thiên nhiên nguyên bản.
        </p>
        <p>
          Những cung đường rừng, những thác nước hoang sơ, những ngọn đồi đầy gió sẽ là thử thách và cũng là món quà cho những trái tim ưa mạo hiểm và khám phá.
        </p>
        <p>
          Hãy để đôi chân dẫn lối, để tâm trí được giải phóng và hòa vào hơi thở núi rừng Tây Bắc.
        </p>
      </div>
    </div>
  );
}
