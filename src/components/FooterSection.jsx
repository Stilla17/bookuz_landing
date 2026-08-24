import React from "react";
import { Store, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white ">
      <div className="w-full px-4 mb-6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwOWj1Oe9TZyKuy530iSoWmVF8Yej1TcicfEv3xYOjjeamWg/viewform?usp=dialog"
          className="w-full"
        >
          <button
            className="purchase-button-float relative w-full text-white font-bold mt-7 py-4 items-center justify-center rounded-xl border border-[#FF9D35] bg-[#FF7900] shadow-xl active:scale-[0.99] active:opacity-90"
            style={{
              boxShadow:
                "inset 0 -2px 2px rgba(56, 35, 25, 0.45), inset 0 30px 40px rgba(255,255,255,0.35), 0 4px 5px rgba(0,0,0,0.35)",
            }}
          >
            Xarid qilish
          </button>
        </a>
      </div>
      <div className="w-full bg-[#005ba6] text-white pt-8 pb-10 px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold tracking-wide">
            Book.uz — asosiy do'kon
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold">
                Book.uz — asosiy do'kon
              </span>
            </div>
            <a
              href="tel:+998712300050"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold">+998 71 230 00 50</span>
            </a>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold leading-snug">
                Toshkent shahri, Chilonzor tumani, Qatortol ko'chasi 60-B uy
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/15 my-1" />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold tracking-wide">
            Ijtimoiy tarmoqlar
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://t.me/bookuzbekistan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 fill-current text-white -translate-x-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.98-3.02 8.39-3.61 4-.1 1.68.83 4.88 2.16 4.9 0 0 .15 0 .22.02.07.02.13.08.15.15.02.07.03.18.01.29z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">@bookuzbekistan</span>
            </a>

            <a
              href="https://instagram.com/bookuzbekistan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 fill-none stroke-current text-white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="text-sm font-semibold">@bookuzbekistan</span>
            </a>

            <a
              href="https://facebook.com/bookuzbekistan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">/bookuzbekistan</span>
            </a>

            <a
              href="https://youtube.com/@bookuzbekistan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-sm font-semibold">@bookuzbekistan</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
