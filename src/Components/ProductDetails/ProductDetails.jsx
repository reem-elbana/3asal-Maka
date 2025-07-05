import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const [allRes, offersRes] = await Promise.all([
          axios.get("https://makkahoney.store/makka/public/api/products"),
          axios.get("https://makkahoney.store/makka/public/api/products/latest-discounted"),
        ]);

        const allProducts = [...allRes.data.data, ...offersRes.data.data];

        const foundProduct = allProducts.find((p) => p.id === parseInt(id));

        setProduct(foundProduct);
      } catch (err) {
        console.error("خطأ في جلب تفاصيل المنتج:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-10 text-center text-gray-600">جاري تحميل المنتج...</div>;
  }

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-10 text-right">
      <div className="max-w-md mx-auto border rounded-lg shadow-md p-4 md:p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-[250px] mx-auto object-contain mb-4"
        />

        <h1 className="text-xl md:text-2xl font-bold text-yellow-600 mb-2">
          {product.name}
        </h1>

        <p className="text-gray-600 mb-1">
          القسم: <span className="font-medium">{product.category?.name}</span>
        </p>

        <span
          className={`inline-block text-sm px-2 py-1 rounded-full mb-2 ${
            product.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {product.status === "active" ? "مُتاح" : "غير متاح"}
        </span>

        <p className="text-gray-800 mb-4 text-base leading-loose">
          {product.description}
        </p>

        <p className="text-yellow-700 font-bold text-lg mb-4">
          {product.price_after_discount
            ? `${product.price_after_discount}درهم `
            : `${product.price} درهم `}
        </p>

        {/* زر واتساب */}
        <a
          href={`https://wa.me/201234567890?text=مرحبًا، أود طلب منتج: ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition duration-200 mb-4"
        >
          اطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
