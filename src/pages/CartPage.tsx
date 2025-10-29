import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

const cartItems = [
  {
    id: 1,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description: "Black Technic, Liftarm Thick 1 x 15",
    price: 0.41,
    quantity: 12,
  },
];

export const CartPage = (): JSX.Element => {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
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
            <div className="w-[140px] h-[60px] flex items-center justify-center cursor-pointer" onClick={() => navigate("/catalog")}>
              <img
                className="w-full h-full object-contain"
                alt="Frame"
                src="/frame-5.svg"
              />
            </div>
          </div>

          <div className="relative flex w-[170px] h-[60px] items-center justify-center gap-[9px] px-[22px] py-3 bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(35,33,33,1)_0%,rgba(35,33,33,1)_100%)]">
            <span className="font-semibold text-[#ffffff] text-base [font-family:'Montserrat',Helvetica]">
              Корзина
            </span>
            <img
              className="w-6 h-6"
              alt="Linear shopping"
              src="/linear---shopping--ecommerce---bag-music.svg"
            />
            <Badge className="absolute top-2 left-[129px] flex items-center justify-center w-[22px] h-[22px] bg-[#ff1b15] rounded-[30px] hover:bg-[#ff1b15] border-none p-0">
              <span className="font-bold text-[#ffffff] text-[13px] [font-family:'Montserrat',Helvetica]">
                {cartItems.length}
              </span>
            </Badge>
          </div>
        </nav>
      </header>

      <div className="max-w-[1200px] mx-auto p-4 md:p-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-semibold text-black text-2xl md:text-[32px] leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0] mb-6 md:mb-8"
        >
          Корзина
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="mb-4 md:mb-6"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 border border-[#ececec] bg-white">
                  <img className="w-full md:w-24 h-auto md:h-24" alt="Product" src={item.image} />

                  <div className="flex-1">
                    <div className="font-semibold text-black text-lg [font-family:'Montserrat',Helvetica] mb-2">
                      {item.description}
                    </div>
                    <div className="font-normal text-[#00000080] text-sm [font-family:'Montserrat',Helvetica] mb-1">
                      Номер детали: {item.partNumber}
                    </div>
                    <div className="font-normal text-[#00000080] text-sm [font-family:'Montserrat',Helvetica]">
                      Цвет: {item.color}
                    </div>
                  </div>

                  <div className="text-left md:text-right w-full md:w-auto">
                    <div className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica] mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="font-normal text-[#00000080] text-sm [font-family:'Montserrat',Helvetica] mb-4">
                      ${item.price} × {item.quantity}
                    </div>

                    <div className="flex items-center gap-2 p-1 border border-solid border-[#2321211f] justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[36px] h-[36px] p-0 hover:bg-transparent"
                      >
                        <img
                          className="w-[36px] h-[36px]"
                          alt="Decrease"
                          src="/frame-479.svg"
                        />
                      </Button>

                      <div className="w-12 font-medium text-black text-lg text-center leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
                        {item.quantity}
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[36px] h-[36px] p-0 hover:bg-transparent"
                      >
                        <img
                          className="w-[36px] h-[36px]"
                          alt="Increase"
                          src="/frame-479-1.svg"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="border border-[#ececec] p-6 sticky top-8">
              <h2 className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica] mb-6">
                Итого
              </h2>

              <Separator className="mb-4" />

              <div className="flex justify-between mb-2">
                <span className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica]">
                  Товаров:
                </span>
                <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.
                </span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica]">
                  Сумма:
                </span>
                <span className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Separator className="mb-6" />

              <Button className="w-full h-[50px] bg-[#ff1b15] hover:bg-[#ff1b15]/90 rounded-none">
                <span className="font-semibold text-white text-base [font-family:'Montserrat',Helvetica]">
                  Оформить заказ
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/catalog")}
                className="w-full h-[50px] mt-3 border border-[#ececec] rounded-none hover:bg-transparent"
              >
                <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                  Продолжить покупки
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
