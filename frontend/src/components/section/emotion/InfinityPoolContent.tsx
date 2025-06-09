export default function InfinityPoolContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/1-3.jpg"
          alt="Bể bơi vô cực"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Bể bơi vô cực
        </h2>
        <p className="font-semibold text-black text-lg">Ngắm núi – Thả trôi – Chill sang chảnh</p>
        <p>
          Hòa mình vào làn nước mát lạnh, bơi giữa thiên nhiên hùng vĩ, ngắm toàn cảnh rừng núi Tây Bắc từ độ cao lý tưởng – Bể bơi vô cực là điểm sống ảo và thư giãn không thể bỏ qua tại Mộc Châu Island.
        </p>
      </div>
    </div>
  );
}
