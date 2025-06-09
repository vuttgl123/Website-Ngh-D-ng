export default function KartClubContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
    <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/cupkkk.jpg"
          alt="F1 Kart Club"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          F1 kart Club
        </h2>
        <p className="font-semibold text-black text-lg">Thử thách tốc độ lần đầu tiên có tại Tây Bắc</p>
        <p>
          Thông đường đua F1 Kart Club dài 650m và các chiến mã “cực cháy” động cơ 270cc chỉ có tại Mộc Châu Island sẽ thoả mãn đam mê cho mọi du khách yêu thích tốc độ và mạo hiểm.
        </p>
      </div>
    </div>
  );
}
