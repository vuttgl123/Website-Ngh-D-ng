export default function AirslideContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
     <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/111.jpg"
          alt="Airslide"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Airslide
        </h2>
        <p className="font-semibold text-lg text-black">
          Trượt trên cầu vồng –{" "}
          <span className="italic text-green-700">Bay trong những màu sắc kỳ thú</span>
        </p>
        <p>
          Trò chơi trượt phao dành cho mọi lứa tuổi giúp bạn có những giây đáng nhớ cùng gia đình
          và người thân khi có thể trượt cùng lúc với nhiều người trên đường trượt dài hơn 250m
          trùng điệp tựa núi đồi.
        </p>
      </div>
    </div>
  );
}
