import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { useState } from "react";

const productDetails = {
  id: 1,
  image: "/image-2-4.png",
  partNumber: "32278",
  color: "Black",
  description: "Black Technic, Liftarm Thick 1 x 15",
  fullDescription:
    "Это универсальная деталь LEGO Technic, которая используется в различных механических конструкциях. Лифтарм толщиной 1 x 15 отверстий идеально подходит для создания прочных и гибких соединений в ваших проектах.",
  price: 0.41,
  priceRub: 28.7,
  priceByn: 1.23,
  stockQuantity: 48,
  stockColor: "#03b92e",
  specifications: [
    { label: "Длина", value: "15 отверстий" },
    { label: "Толщина", value: "Толстая (Thick)" },
    { label: "Материал", value: "ABS пластик" },
    { label: "Серия", value: "LEGO Technic" },
  ],
};

export const ProductDetailPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

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
            <div className="w-[140px] h-[60px] flex items-center justify-center cursor-pointer" onClick={() => navigate("/catalog")}>
              <img
                className="w-full h-full object-contain"
                alt="Frame"
                src="/frame-5.svg"
              />
            </div>
          </div>

          <div
            className="relative flex w-[170px] h-[60px] items-center justify-center gap-[9px] px-[22px] py-3 bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.2)_100%),linear-gradient(0deg,rgba(35,33,33,1)_0%,rgba(35,33,33,1)_100%)] cursor-pointer"
            onClick={() => navigate("/cart")}
          >
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
                1
              </span>
            </Badge>
          </div>
        </nav>
      </header>

      <div className="max-w-[1200px] mx-auto p-4 md:p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center p-6 md:p-12 bg-[#f9f9f9] border border-[#ececec]"
          >
            <img
              className="w-full max-w-[400px] h-auto"
              alt={productDetails.description}
              src={productDetails.image}
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-semibold text-black text-2xl md:text-[32px] leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0] mb-4"
            >
              {productDetails.description}
            </motion.h1>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-6"
            >
              <div className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica] mb-2">
                Номер детали: <span className="text-black">{productDetails.partNumber}</span>
              </div>
              <div className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica]">
                Цвет: <span className="text-black">{productDetails.color}</span>
              </div>
            </motion.div>

            <Separator className="mb-6" />

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="font-semibold text-black text-3xl md:text-[36px] [font-family:'Montserrat',Helvetica] mb-2">
                ${productDetails.price}
              </div>
              <div className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica]">
                (~{productDetails.priceRub} RUB, {productDetails.priceByn} BYN)
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: productDetails.stockColor }}
              />
              <div className="font-normal text-black text-base leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
                В наличии {productDetails.stockQuantity} шт.
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 p-1 border border-solid border-[#2321211f]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[42px] h-[42px] p-0 hover:bg-transparent"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <img
                    className="w-[42px] h-[42px]"
                    alt="Decrease"
                    src="/frame-479.svg"
                  />
                </Button>

                <div className="w-16 font-medium text-black text-lg text-center leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
                  {quantity}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[42px] h-[42px] p-0 hover:bg-transparent"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <img
                    className="w-[42px] h-[42px]"
                    alt="Increase"
                    src="/frame-479-1.svg"
                  />
                </Button>
              </div>

              <Button className="flex-1 w-full md:w-auto h-[50px] bg-[#ff1b15] hover:bg-[#ff1b15]/90 rounded-none gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-semibold text-white text-base [font-family:'Montserrat',Helvetica]">
                  Добавить в корзину
                </span>
              </Button>
            </motion.div>

            <Separator className="mb-6" />

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-6"
            >
              <h2 className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica] mb-4">
                Описание
              </h2>
              <p className="font-normal text-black text-base [font-family:'Montserrat',Helvetica] leading-relaxed">
                {productDetails.fullDescription}
              </p>
            </motion.div>

            <Separator className="mb-6" />

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-semibold text-black text-xl [font-family:'Montserrat',Helvetica] mb-4">
                Характеристики
              </h2>
              <div className="space-y-3">
                {productDetails.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-normal text-[#00000080] text-base [font-family:'Montserrat',Helvetica]">
                      {spec.label}:
                    </span>
                    <span className="font-normal text-black text-base [font-family:'Montserrat',Helvetica]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
