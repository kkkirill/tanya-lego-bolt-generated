import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export const ContactPage = (): JSX.Element => {
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
          Связаться с нами
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-[#f9f9f9] p-6 md:p-8 border border-[#ececec]">
            <p className="font-normal text-black text-base md:text-lg [font-family:'Montserrat',Helvetica] leading-relaxed mb-6">
              Мы всегда рады помочь вам с подбором деталей, ответить на вопросы о заказе или просто пообщаться о LEGO!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <div className="bg-white border-2 border-[#ececec] hover:border-[#ff1b15] transition-colors p-6 md:p-8 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#0088cc] rounded-full">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                    Telegram
                  </h2>
                </div>
                <p className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica] leading-relaxed mb-4">
                  Напишите нам в Telegram для быстрой связи. Отвечаем в течение 15 минут в рабочее время.
                </p>
                <div className="font-semibold text-[#0088cc] text-lg [font-family:'Montserrat',Helvetica]">
                  @yourusername
                </div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@legoparts.ru"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <div className="bg-white border-2 border-[#ececec] hover:border-[#ff1b15] transition-colors p-6 md:p-8 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#ff1b15] rounded-full">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                    Email
                  </h2>
                </div>
                <p className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica] leading-relaxed mb-4">
                  Отправьте нам письмо для детальных вопросов или коммерческих предложений.
                </p>
                <div className="font-semibold text-[#ff1b15] text-lg [font-family:'Montserrat',Helvetica]">
                  info@legoparts.ru
                </div>
              </div>
            </motion.a>
          </div>

          <Separator className="my-8" />

          <div className="space-y-6">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                  Телефон
                </h2>
              </div>
              <div className="pl-0 md:pl-[60px] space-y-3">
                <p className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica]">
                  +7 (495) 123-45-67
                </p>
                <p className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                  Звонки принимаются в рабочее время (с понедельника по пятницу, с 10:00 до 19:00 МСК)
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ff1b15] rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-semibold text-black text-xl md:text-2xl [font-family:'Montserrat',Helvetica]">
                  Время работы
                </h2>
              </div>
              <div className="pl-0 md:pl-[60px] space-y-2">
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                    Понедельник - Пятница:
                  </span>
                  <span className="font-semibold text-black text-base [font-family:'Montserrat',Helvetica]">
                    10:00 - 19:00
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                    Суббота:
                  </span>
                  <span className="font-semibold text-black text-base [font-family:'Montserrat',Helvetica]">
                    11:00 - 17:00
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                    Воскресенье:
                  </span>
                  <span className="font-semibold text-[#ff1b15] text-base [font-family:'Montserrat',Helvetica]">
                    Выходной
                  </span>
                </div>
              </div>
            </section>
          </div>

          <Separator className="my-8" />

          <div className="bg-[#f9f9f9] p-6 border-l-4 border-[#ff1b15]">
            <h3 className="font-semibold text-black text-lg [font-family:'Montserrat',Helvetica] mb-3">
              Часто задаваемые вопросы
            </h3>
            <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed mb-2">
              Перед тем как обратиться к нам, рекомендуем ознакомиться с разделом{" "}
              <span
                onClick={() => navigate("/payment-conditions")}
                className="text-[#ff1b15] cursor-pointer hover:underline font-semibold"
              >
                Условия покупки
              </span>
              , где содержатся ответы на самые популярные вопросы.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={() => navigate("/catalog")}
              className="h-[50px] px-8 bg-[#ff1b15] hover:bg-[#ff1b15]/90 rounded-none"
            >
              <span className="font-semibold text-white text-base [font-family:'Montserrat',Helvetica]">
                Вернуться в каталог
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
