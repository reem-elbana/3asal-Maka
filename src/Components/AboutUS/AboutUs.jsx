import React from 'react';
import aboutusImg from "../../assets/aboutus-img.png";

export default function AboutUs() {
  return (
    <section
      id="AboutUs"
      className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* صورة الخلفية في النص - Responsive */}
      <img
        src={aboutusImg}
        alt="Jar of Honey"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto md:h-full object-contain md:object-cover "
      />

      {/* المحتوى */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 flex flex-col md:flex-row-reverse items-center justify-between gap-8 py-12">
        {/* النص */}
        <div className="text-right md:w-1/2">
          <h2 className="text-3xl font-bold text-[#f7c34b] mb-4">من نحن</h2>
          <p className="text-gray-800 leading-loose text-lg">
            في <span className="text-[#f7c34b]">مكة</span>، نقدم عسلا طبيعيًا نقيًا مستخلصًا من أفضل المناحل المحلية، بجودة نثق بها وطعم لا يُنسى <br />
            نعتني بكل تفصيلة، من الخلية إلى البرطمان، لنقدم لك منتجًا يجمع بين الأصالة والثقة <br />
            ومستوحى من بركة العسل التي <span className="text-black font-semibold">ذكرها اللّٰه في كتابه الكريم</span>، نؤمن أن كل قطرة تحمل خيرًا وشفاءً
          </p>
        </div>

        {/* مساحة مقابلة */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
}
