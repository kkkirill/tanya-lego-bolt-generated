import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Package, Truck, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export const PaymentConditionsPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white"
    >
      <header className="w-full h-[60px] bg-[#ffffff] border-b border-[#ececec]">
        <nav className="flex items-center justify-between h-full px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/catalog")}
              className="hover:bg-transparent"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="w-[100px] md:w-[140px] h-[60px] flex items-center justify-center cursor-pointer" onClick={() => navigate("/catalog")}>
              <img
                className="w-full h-full object-contain"
                alt="Frame"
                src="/frame-5.svg"
              />
            </div>
          </div>

          <div
            className="relative flex w-[100px] md:w-[170px] h-[60px] items-center justify-center gap-[9px] px-3 md:px-[22px] py-3 bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(35,33,33,1)_0%,rgba(35,33,33,1)_100%)] cursor-pointer"
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
        </nav>
      </header>

      <div className="max-w-[900px] mx-auto p-4 md:p-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-semibold text-black text-2xl md:text-[32px] leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0] mb-8"
        >
          Условия покупки
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                Способы оплаты
              </h2>
            </div>
            <div className="pl-0 md:pl-[60px] space-y-3">
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                Мы принимаем следующие способы оплаты:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Банковские карты (Visa, Mastercard, МИР)
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Электронные кошельки (ЮMoney, QIWI)
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Банковский перевод для юридических лиц
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Наложенный платеж при доставке
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                Доставка
              </h2>
            </div>
            <div className="pl-0 md:pl-[60px] space-y-3">
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                Доставка осуществляется по всей России и странам СНГ:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  <strong>Курьерская доставка</strong> — 1-3 дня (в пределах Москвы и Санкт-Петербурга)
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  <strong>Почта России</strong> — 5-14 дней
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  <strong>СДЭК, Boxberry</strong> — 2-7 дней
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  <strong>Самовывоз</strong> — бесплатно
                </li>
              </ul>
              <p className="font-normal text-[#00000080] text-sm [font-family:'Montserrat',Helvetica] leading-relaxed mt-4">
                Стоимость доставки рассчитывается автоматически при оформлении заказа.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                Минимальный заказ
              </h2>
            </div>
            <div className="pl-0 md:pl-[60px] space-y-3">
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                Минимальная сумма заказа составляет <strong>$10</strong> (~700 RUB).
              </p>
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                При заказе на сумму от <strong>$100</strong> — доставка по России бесплатно!
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                Гарантии
              </h2>
            </div>
            <div className="pl-0 md:pl-[60px] space-y-3">
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                Мы гарантируем:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  100% оригинальные детали LEGO
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Возврат и обмен в течение 14 дней
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Компенсация за поврежденные при доставке товары
                </li>
                <li className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Техническая поддержка по подбору деталей
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <div className="bg-[#f9f9f9] p-6 border-l-4 border-[#ff1b15]">
            <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
              <strong>Важно:</strong> Все цены на сайте указаны в долларах США ($). Конвертация в рубли (RUB) и белорусские рубли (BYN) производится автоматически по курсу на момент оформления заказа.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={() => navigate("/catalog")}
              className="h-[50px] px-8 bg-[#ff1b15] hover:bg-[#ff1b15]/90 rounded-none"
            >
              <span className="font-semibold text-white text-base [font-family:'Montserrat',Helvetica]">
                Перейти к каталогу
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
