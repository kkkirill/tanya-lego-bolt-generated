import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const FilterSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[60px] bg-[#ffffff] border-b border-[#ececec]">
      <nav className="flex items-center justify-between h-full px-2 md:px-4">
        <div className="flex items-center">
          <div className="w-[100px] md:w-[140px] h-[60px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              alt="Frame"
              src="/frame-5.svg"
            />
          </div>

          <Button
            variant="ghost"
            className="h-[60px] px-2 md:px-5 py-2.5 rounded-none hover:bg-transparent hidden md:flex"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-6 h-6"
                alt="Linear settings fine"
                src="/linear---settings--fine-tuning---widget-.svg"
              />
              <span className="font-medium text-black text-base [font-family:'Montserrat',Helvetica]">
                Каталог
              </span>
            </div>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          <button
            className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-black text-sm hidden md:inline">
              Связаться с нами
            </span>
            <img
              className="w-[18px] h-[18px]"
              alt="Linear call call"
              src="/linear---call---call-chat.svg"
            />
          </button>

          <button
            className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => navigate("/payment-conditions")}
          >
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#dc1914] text-sm hidden md:inline">
              Условия покупки
            </span>
            <div className="w-[18px] h-[18px] relative">
              <img
                className="absolute top-px left-px w-4 h-4"
                alt="Vector"
                src="/vector.svg"
              />
            </div>
          </button>

          <div
            className="relative flex w-[100px] md:w-[170px] h-[60px] items-center justify-center gap-[9px] px-3 md:px-[22px] py-3 bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(35,33,33,1)_0%,rgba(35,33,33,1)_100%)] cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => navigate("/cart")}
          >
            <span className="font-semibold text-[#ffffff] text-base [font-family:'Montserrat',Helvetica] hidden md:inline">
              Корзина
            </span>
            <img
              className="w-6 h-6"
              alt="Linear shopping"
              src="/linear---shopping--ecommerce---bag-music.svg"
            />
            <Badge className="absolute top-2 left-[70px] md:left-[129px] flex items-center justify-center w-[22px] h-[22px] bg-[#ff1b15] rounded-[30px] hover:bg-[#ff1b15] border-none p-0">
              <span className="font-bold text-[#ffffff] text-[13px] [font-family:'Montserrat',Helvetica]">
                1
              </span>
            </Badge>
          </div>
        </div>
      </nav>
    </header>
  );
};
