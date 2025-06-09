export default function PlaytopiaContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/ff.jpg"
          alt="Playtopia"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Playtopia
        </h2>
        <p className="font-semibold text-black text-lg">Thiên đường trẻ thơ – Sáng tạo không giới hạn</p>
        <p>
          Playtopia là tổ hợp giải trí dành cho trẻ em với hàng chục trò chơi vận động, sáng tạo, tương tác thực tế – giúp trẻ vừa chơi vừa phát triển tư duy toàn diện trong một không gian an toàn và tràn ngập sắc màu.
        </p>
      </div>
    </div>
  );
}
