import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";
import footerimg from "../../assets/Footer-img.png";
import logo from "../../assets/footer-logo.png";
import axios from "axios";

export default function Footer() {
  const [contacts, setContacts] = useState({
    whatsapp: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    snapchat: "",
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          "https://makkahoney.store/makka/public/api/contacts"
        );
        setContacts(res.data.data);
      } catch (error) {
        console.error("خطأ في جلب بيانات التواصل:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <footer
      className="relative bg-[#f7c34b] text-black text-center py-10 px-4 overflow-hidden"
      id="ContactUs"
    >
      {/* صورة الخلفية */}
      <img
        src={footerimg}
        alt="footer background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* اللوجو */}
        <img src={logo} alt="شعار مكة" className="w-24 mb-4" />

        {/* روابط السياسات */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">
            سياسة خصوصية البيانات
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            سياسة التواصل
          </a>
        </div>

        {/* أيقونات التواصل */}
        <div className="flex gap-4 text-xl mt-2">
          {/* رابط واتساب ثابت */}
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:text-green-700"
          >
            <FaWhatsapp />
          </a>

          {contacts.linkedin && (
            <a href={contacts.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}
          {contacts.facebook && (
            <a href={contacts.facebook} target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          )}
          {contacts.tiktok && (
            <a href={contacts.tiktok} target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          )}
          {contacts.instagram && (
            <a href={contacts.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          )}
          {contacts.snapchat && (
            <a href={contacts.snapchat} target="_blank" rel="noreferrer">
              <FaSnapchat />
            </a>
          )}
        </div>

      

        {/* الحقوق */}
        <p className="text-sm mt-2">
          جميع الحقوق محفوظة © 2025 لخدمات العسل الطبيعي
        </p>
      </div>
    </footer>
  );
}
