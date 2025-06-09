export default function ZiplineContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
        <img
          src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/cau-kinh-bach-long-16725667368801124632457-1067x800.webp"
          alt="Zipline"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-800 space-y-4">
        <h2
          className="text-green-700 text-4xl lg:text-5xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Zipline
        </h2>
        <p className="font-semibold text-black text-lg">“Bay” trên những miền xanh thiên nhiên</p>
        <p>
          Đón đầu xu hướng, Zipline Sky Tour với trang thiết bị hiện đại, đảm bảo an toàn sẽ là “liều thuốc tinh thần” khiến ai cũng phải phấn khích và thử một lần tại Mộc Châu Island.
        </p>
      </div>
    </div>
  );
}
