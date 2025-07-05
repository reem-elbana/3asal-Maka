import React from 'react';
import {
  BadgeCheck,
  Droplets,
  ShoppingCart,
  ShieldCheck,
  Microscope,
  Wallet,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "شهادة الجودة",
      description:"نضمن لك جودة عالية في كل خطوة من خطوات الانتاج باشراف مختصين واستخدام افضل المعايير ",
       icon: <BadgeCheck className="w-7 h-7 text-gray-600" />,
    },
    {
      title: "الإنتاج النقي",
      description: "يتم جمع العسل يدويا من المناحل بعناية دون اي تدخل صناعي",
      icon: <Droplets className="w-7 h-7 text-gray-600" />,
    },
    {
      title: "شراء الجملة",
      description: "مناسب للمحلات، والموزعين، وهواة التوزيع الشخصي ",
      icon: <ShoppingCart className="w-7 h-7 text-gray-600" />,
    },
    {
      title: "فحص الجودة",
      description: "من أول الخلية وحتي وصول البرطمان إليك, نتابع كل خطوة",
      icon: <ShieldCheck className="w-7 h-7 text-gray-600" />,
    },
    {
      title: "تحليل المخاطر",
      description: "كل منتج يخضع لفحوصات دقيقة لضمان السلامة ",
      icon: <Microscope className="w-7 h-7 text-gray-600" />,
    },
    {
      title: "تسعير عادل",
      description: "نوفر لك أفضل سعر مقابل الجودة، بدون أى وسطاء.",
      icon: <Wallet className="w-7 h-7 text-gray-600" />,
    },
  ];

  return (
  <section className="bg-white py-14 px-5 md:px-20 text-center relative overflow-hidden">
    {/* عنوان في الأعلى للموبايل والتابلت */}
    <h2 className="text-3xl font-bold text-black mb-10 block lg:hidden">
      <span>🐝</span> مميزاتنا
    </h2>

    {/* للموبايل والتابلت: شبكة مربعة */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-full bg-yellow-100 border border-gray-500 rounded-xl flex flex-col items-center justify-between text-center p-5 shadow-md hover:scale-105 hover:shadow-xl transition hover:border-yellow-600"
          style={{
            clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
          }}
        >
          <h3 className="font-bold mb-1 text-yellow-700">{feature.title}</h3>
          <p className="text-sm text-gray-700 leading-snug">{feature.description}</p>
          <div className="text-4xl mb-2 text-black grayscale">{feature.icon}</div>
        </div>
      ))}
    </div>

    {/* للشاشات الكبيرة: توزيع دائري */}
    <div className="relative w-[700px] h-[700px] mx-auto hidden lg:block">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="text-3xl font-bold text-black"><span>🐝</span> مميزاتنا</h2>
      </div>

      {features.map((feature, index) => {
        const radius = 210;
        const angleStep = (2 * Math.PI) / features.length;
        const angle = index * angleStep - Math.PI / 2;

        const x = radius * Math.cos(angle) + 350 - 112;
        const y = radius * Math.sin(angle) + 350 - 112;

        return (
          <div
            key={index}
            className="absolute w-56 h-56 bg-beige border border-gray-500 rounded-xl flex flex-col items-center justify-between text-center p-5 shadow-md hover:scale-105 hover:shadow-xl transition hover:border-yellow-600"
            style={{
              clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <h3 className="font-bold mb-1 text-yellow-700">{feature.title}</h3>
            <p className="text-sm text-gray-700 leading-snug">{feature.description}</p>
            <div className="text-4xl mb-2 text-black grayscale">{feature.icon}</div>
          </div>
        );
      })}
    </div>
  </section>
);
}