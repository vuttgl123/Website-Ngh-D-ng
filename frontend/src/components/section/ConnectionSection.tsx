import { Car, Clock } from "lucide-react"

export default function ConnectionSection() {
  return (
    <section className="bg-[#fdfaf5] px-4 md:px-12 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Ảnh bản đồ bên trái */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/koooo.png"
            alt="Map Connection"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="text-gray-800">
          <h2
            className="text-green-700 text-7xl md:text-7xl font-normal"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Kết nối trải nghiệm
          </h2>
          <div className="text-sm lg:text-base space-y-4 leading-relaxed">
            <p>
              Nằm giữa ngút ngàn núi non Tây Bắc, nơi đất trời giao thoa, Mộc Châu Island tạo nên kết nối “có một không hai” giữa thiên nhiên kỳ vĩ với siêu quần thể nghỉ dưỡng, giải trí và văn hoá Tây Bắc.
            </p>
            <p>
              Những trải nghiệm chân thật và vẹn đầy tại Mộc Châu Island giúp ta tìm về giá trị nguyên bản nhất, nuôi dưỡng và cân bằng tâm trí.
            </p>
            <div className="space-y-2 mt-6">
              <p className="text-green-700 font-semibold">Di chuyển từ Hà Nội:</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-green-800">
                  <Car className="w-5 h-5" /> 188km
                </span>
                <span className="flex items-center gap-1 text-green-800">
                  <Clock className="w-5 h-5" /> 4 tiếng
                </span>
              </div>

              <p className="text-green-700 font-semibold mt-2">Di chuyển từ Thị trấn Mộc Châu:</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-green-800">
                  <Car className="w-5 h-5" /> 10km
                </span>
                <span className="flex items-center gap-1 text-green-800">
                  <Clock className="w-5 h-5" /> 18 phút
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
