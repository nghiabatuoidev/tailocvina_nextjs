import { FaEarthAmericas, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thông Tin Liên Hệ | Tài Lộc Vi Na",
  description:
    "Địa chỉ: khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam hoặc liên hệ qua hotline 0989 015 053 để được tư vấn trực tiếp",
  alternates: {
    canonical: "https://www.phelieutailocvina.com/lien-he",
  },
  openGraph: {
    title: "Thông Tin Liên Hệ | Tài Lộc Vi Na",
    description:
      "Địa chỉ: khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam hoặc liên hệ qua hotline 0989 015 053 để được tư vấn trực tiếp",
    url: "https://www.phelieutailocvina.com/lien-he",
    siteName: "Phế Liệu Tài Lộc Vi Na",
    type: "website",
    images: [
      {
        url: "https://www.phelieutailocvina.com/banner.jpg", // Must be an absolute URL
        width: 800,
        height: 400,
        type: "image/jpg",
      },
    ],
    locale: "vi_VN",
  },
};
const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="uppercase font-bold text-2xl lg:text-3xl text-center mt-7">
        Liên Hệ Công Ty Thu Mua Phế Liệu Giá Cao | Tài Lộc Vi Na
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pb-7">
        <div className="mt-7  bg-[#f6f6f6] border p-5">
          <h2 className="uppercase font-bold  text-lg mb-3">
            CÔNG TY THU MUA PHẾ LIỆU TÀI LỘC VI NA
          </h2>
          <div className="flex flex-col gap-5 text-justify ">
            <p className="leading-loose">
              Hãy liên hệ ngay với{" "}
              <strong> Công ty thu mua Phế Liệu Tài Lộc Vi Na</strong>, đơn vị
              uy tín chuyên thu mua phế liệu, vải vụn số lượng lớn và xử lý rác
              thải công nghiệp tại Bình Dương.
            </p>

            <div className="flex gap-2 ">
              <div className="flex items-center">
                <FaPhone className="text-lg" />
              </div>
              <p className="flex items-center gap-2">
                <span className="font-bold">Hotline</span>: 0989 015 053
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-center">
                <MdEmail className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Email: </span>
                phelieutailocvina@gmail.com
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-center">
                <FaEarthAmericas className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Website: </span>
                https://www.phelieutailocvina.com/
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-start">
                <FaLocationDot className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Địa chỉ:</span> Thửa đất số 1046, tờ
                bản đồ số 171, khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố
                Thuận An, Tỉnh Bình Dương, Việt Nam
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 text-justify leading-loose p-5 border">
          <h2 className=" font-bold  text-lg mb-3 uppercase">
            Bản đồ chỉ đường
          </h2>
          <p className="mb-3">
            Chúng tôi tọa lạc tại khu vực trung tâm, dễ dàng tiếp cận. Hãy ghé
            thăm địa chỉ của chúng tôi hoặc liên hệ qua các phương thức bên trên
            để được hỗ trợ tốt nhất.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.1828727448565!2d106.71582547504445!3d10.949554689209958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU2JzU4LjQiTiAxMDbCsDQzJzA2LjIiRQ!5e0!3m2!1svi!2s!4v1733105962656!5m2!1svi!2s"
            width="100%"
            height="450"
            loading="lazy"
            title="Bản đồ chỉ đường công ty thu mua phế liệu tài lộc vi na giá cao"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
