export default function BachLongContent() {
  return (
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Hình ảnh bên trái */}
       <div className="h-[320px] lg:h-[350px] w-[400px] 2xl:w-[500px] ml-auto overflow-hidden shadow-lg">
          <img
            src="https://booking.mocchaugroup.com.vn/wp-content/uploads/2024/05/jk.jpg"
            alt="Cầu Kính Bạch Long"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="text-gray-800 space-y-4">
          <h2
            className="text-green-700 text-4xl lg:text-5xl font-normal"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Cầu Kính Bạch Long
          </h2>

          <p className="text-orange-600 font-semibold text-lg">
            Kỳ quan mới của đất trời Tây Bắc
          </p>

          <p>
            Vượt qua nỗi sợ của bản thân, bước chân lên cây cầu kính Bạch Long, bạn như được hoà mình vào ranh giới nối liền giữa mây, núi và bầu trời.
            Từ trên cao hít hà một hơi thật sâu và cảm nhận hơi thở của núi rừng, những nỗi buồn sẽ tan biến thay vào đó là một cảm giác tự hào xen lẫn phấn khích
            khi được tận mắt sự hùng vĩ và bao la của đất trời.
          </p>

          <p>
            Được Guinness World Records công nhận là cầu bộ đáy kính dài nhất thế giới với tổng chiều dài 632 mét, bao gồm cầu bắc qua 2 ngọn núi, dài 290m
            và cầu đi bộ ven vách núi nối liền từng đoạn 1, dài 342m. Cầu kính tựa cung đường mây nối liền 2 sườn núi, vững mình giữa bạt ngàn rừng núi,
            “dấu đội trời, chân đạp đất” không sai khi ví rằng Cầu Kính là nơi giao thoa giữa đất và bầu trời.
          </p>
        </div>
      </div>
  );
}
