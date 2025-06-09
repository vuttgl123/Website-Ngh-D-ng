export default function DongChimThanContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Hình ảnh bên trái */}
     <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/e-1201x800.jpg"
          alt="Động Chim Thần"
          className="object-cover w-full h-full "
        />
      </div>

      {/* Nội dung bên phải */}
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Động Chim Thần
        </h2>
        <p className="text-orange-600 font-semibold text-lg">
          Trở về miền ký ức
        </p>
        <p>
          Nối tiếp cuối chân Cầu Kính Bạch Long là hang động Chim Thần – nơi bạn sẽ bước vào một không gian kỳ ảo được hình thành từ triệu năm trước.
        </p>
        <p>
          Với những khối nhũ đá được thiên nhiên điêu khắc kỳ công, từng bước đi như đưa bạn trở về quá khứ – nơi những truyền thuyết Tây Bắc còn vang vọng.
        </p>
        <p>
          Chạm tay vào những vách đá mát lạnh, bạn sẽ cảm nhận được sự sống đang thở – những giá trị nguyên bản chưa hề phai mờ bởi thời gian.
        </p>
      </div>
    </div>
  );
}
