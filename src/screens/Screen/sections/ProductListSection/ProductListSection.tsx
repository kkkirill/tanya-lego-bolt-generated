import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

const productData = [
  {
    id: 1,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description:
      "Black Technic, Liftarm Thick 1 x 15 Black Technic, Liftarm Thick 1 x 15",
    price: "0.41$",
    priceConverted: "(~28.7 RUB, 1.23 BYN)",
    inStock: true,
    stockQuantity: 48,
    quantity: 12,
    stockColor: "#03b92e",
  },
  {
    id: 2,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description:
      "Black Technic, Liftarm Thick 1 x 15 Black Technic, Liftarm Thick 1 x 15",
    price: "0.41$",
    priceConverted: "(~28.7 RUB, 1.23 BYN)",
    inStock: false,
    stockQuantity: 0,
    quantity: 0,
    stockColor: "#bcbcbc",
  },
  {
    id: 3,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description:
      "Black Technic, Liftarm Thick 1 x 15 Black Technic, Liftarm Thick 1 x 15",
    price: "0.41$",
    priceConverted: "(~28.7 RUB, 1.23 BYN)",
    inStock: true,
    stockQuantity: 2,
    quantity: 0,
    stockColor: "#03b92e",
  },
  {
    id: 4,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description:
      "Black Technic, Liftarm Thick 1 x 15 Black Technic, Liftarm Thick 1 x 15",
    price: "0.41$",
    priceConverted: "(~28.7 RUB, 1.23 BYN)",
    inStock: true,
    stockQuantity: 48,
    quantity: 0,
    stockColor: "#03b92e",
  },
  {
    id: 5,
    image: "/image-2-4.png",
    partNumber: "32278",
    color: "Black",
    description:
      "Black Technic, Liftarm Thick 1 x 15 Black Technic, Liftarm Thick 1 x 15",
    price: "0.41$",
    priceConverted: "(~28.7 RUB, 1.23 BYN)",
    inStock: true,
    stockQuantity: 48,
    quantity: 0,
    stockColor: "#03b92e",
  },
];

export const ProductListSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productData);

  const updateQuantity = (id: number, delta: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(0, product.quantity + delta);
          return { ...product, quantity: newQuantity };
        }
        return product;
      }),
    );
  };

  return (
    <section className="flex flex-col w-full items-start gap-5">
      <h1 className="self-stretch font-semibold text-black text-xl md:text-[28px] leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
        Каталог деталей
      </h1>

      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex items-start justify-between w-full">
          <Select defaultValue="price-asc">
            <SelectTrigger className="inline-flex items-center gap-2 px-3 py-2.5 w-auto border border-solid border-[#d6d6d6] h-auto rounded-none">
              <SelectValue>
                <span className="font-medium text-dark-gray text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                  Сначала дешевле
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Сначала дешевле</SelectItem>
              <SelectItem value="price-desc">Сначала дороже</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="25">
            <SelectTrigger className="inline-flex items-center gap-2 px-3 py-2.5 w-auto border border-solid border-[#d6d6d6] h-auto rounded-none">
              <SelectValue>
                <span className="font-medium text-dark-gray text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                  Показывать по 25
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25">Показывать по 25</SelectItem>
              <SelectItem value="50">Показывать по 50</SelectItem>
              <SelectItem value="100">Показывать по 100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden lg:grid grid-cols-[80px_108px_100px_230px_170px_171px] gap-5 w-full">
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
            Фото
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
            Номер детали
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
            Цвет
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
            Описание
          </div>
          <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
            Цена
          </div>
          <div></div>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col items-start gap-6 w-full"
            >
              {index === 0 && <Separator className="w-full" />}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 w-full"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-full md:w-20 h-auto md:h-20 cursor-pointer"
                  alt="Product"
                  src={product.image}
                  onClick={() => navigate(`/product/${product.id}`)}
                />

                <div className="grid grid-cols-1 lg:grid-cols-[108px_100px_230px_170px_171px] gap-3 lg:gap-5">
                  <div className="flex flex-col lg:contents">
                    <div className="lg:hidden font-normal text-[#00000080] text-sm mb-1">
                      Номер детали
                    </div>
                    <div
                      className="font-normal text-black text-base leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0] cursor-pointer hover:text-[#ff1b15] transition-colors"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.partNumber}
                    </div>
                  </div>

                  <div className="flex flex-col lg:contents">
                    <div className="lg:hidden font-normal text-[#00000080] text-sm mb-1">
                      Цвет
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                      {product.color}
                    </div>
                  </div>

                  <div className="flex flex-col lg:contents">
                    <div className="lg:hidden font-normal text-[#00000080] text-sm mb-1">
                      Описание
                    </div>
                    <div
                      className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] cursor-pointer hover:text-[#ff1b15] transition-colors"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.description}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1">
                    <div className="lg:hidden font-normal text-[#00000080] text-sm mb-1">
                      Цена
                    </div>
                    <div className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
                      {product.price}
                    </div>

                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#00000080] text-sm tracking-[0] leading-[normal]">
                      {product.priceConverted}
                    </div>

                    <div className="inline-flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5"
                        style={{ backgroundColor: product.stockColor }}
                      />

                      <div className="font-normal text-black text-sm leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
                        {product.inStock
                          ? `В наличии ${product.stockQuantity} шт.`
                          : "Нет в наличии"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 p-1 border border-solid border-[#2321211f] w-full lg:w-auto">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[42px] h-[42px] p-0 hover:bg-transparent"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        <img
                          className="w-[42px] h-[42px]"
                          alt="Decrease"
                          src="/frame-479.svg"
                        />
                      </Button>
                    </motion.div>

                    <div className="flex-1 font-medium text-black text-lg text-center leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
                      {product.quantity}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-[42px] h-[42px] p-0 hover:bg-transparent"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <img
                          className="w-[42px] h-[42px]"
                          alt="Increase"
                          src="/frame-479-1.svg"
                        />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <Separator className="w-full" />
            </div>
          ))}

          <div className="flex flex-col items-center gap-[11px] w-full">
            <div className="flex flex-col items-center w-full">
              <div className="font-normal text-dark-gray text-sm leading-5 [font-family:'Montserrat',Helvetica] tracking-[0]">
                Показано 12 из 78
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 p-0 hover:bg-transparent"
                  >
                    <img
                      className="w-4 h-4"
                      alt="Previous"
                      src="/arrow-right.svg"
                    />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-10 h-10 bg-[#ff1b15] hover:bg-[#ff1b15]/90 rounded-lg p-3">
                    <span className="font-medium text-white text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                      1
                    </span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    className="w-10 h-10 rounded-lg p-3 hover:bg-transparent"
                  >
                    <span className="font-medium text-dark-gray text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                      2
                    </span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    className="w-10 h-10 rounded-lg p-3 hover:bg-transparent"
                  >
                    <span className="font-medium text-dark-gray text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                      3
                    </span>
                  </Button>
                </motion.div>

                <Button
                  variant="ghost"
                  className="w-10 h-10 rounded-lg p-3 hover:bg-transparent"
                >
                  <span className="font-medium text-dark-gray text-sm leading-5 whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                    ...
                  </span>
                </Button>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 p-0 hover:bg-transparent"
                  >
                    <img
                      className="w-4 h-4"
                      alt="Next"
                      src="/arrow-right-1.svg"
                    />
                  </Button>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="w-[171px] h-[50px] gap-1.5 px-[18px] py-[15px] border border-solid border-[#efefef] rounded-none hover:bg-transparent"
                >
                  <span className="font-normal text-dark-gray text-base leading-[22px] whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
                    Показать еще
                  </span>
                  <img
                    className="w-4 h-4"
                    alt="Show more"
                    src="/frame-2087326034.svg"
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
