import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://makkahoney.store/makka/public/api/products"
        );
        setProducts(res.data.data);
      } catch (err) {
        console.error("خطأ أثناء جلب المنتجات:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-white text-right px-4 md:px-16" id="Products">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-8 flex items-center justify-center gap-2">
        <span>🐝</span> منتاجتنا
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">جاري تحميل المنتجات...</p>
      ) : (
        <Swiper
          dir="rtl"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto h-full">
                {/* الكارد داخل الـ Link ما عدا الأزرار */}
                <Link to={`/product/${product.id}`} className="block h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 object-contain mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-800 font-medium mb-1 text-right">
                    {product.name} - {product.category?.name}
                  </p>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-yellow-700 font-bold mb-2">
                    {product.price_after_discount
                      ? `${product.price_after_discount} درهم  `
                      : `${product.price} درهم  ` }
                  </p>
                </Link>

                {/* زر الواتساب + زر الكارت */}
                <div className="flex items-center gap-2 mt-2">
                  <a
                   href={`https://wa.me/201234567890?text=مرحبًا، أود طلب منتج: ${encodeURIComponent(product.name)}`}

                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-sm text-center py-2 rounded-md font-bold transition-transform duration-200 hover:scale-105"
                  >
                    اطلب عبر واتساب
                  </a>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
