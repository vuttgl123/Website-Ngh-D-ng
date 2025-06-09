export default function WaterGunContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/gggg-1066x800.jpg"
          alt="Water Gun"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Water Gun
        </h2>
        <p className="font-semibold text-black text-lg">Chiến đấu nước vui nhộn – Giải nhiệt cực đã</p>
        <p>
          Với hàng trăm súng nước, pháo nước và các mô hình tương tác, khu vui chơi Water Gun tại Mộc Châu Island là nơi bạn và gia đình có thể “bung xõa” cực đã giữa mùa hè sôi động.
        </p>
      </div>
    </div>
  );
}
