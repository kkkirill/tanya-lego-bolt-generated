import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { Separator } from "../../../../components/ui/separator";

const menuItems = [
  {
    title: "Инструкции",
    isOpen: true,
    hasChildren: true,
    children: [
      {
        title: "Персонажи",
        isOpen: true,
        hasChildren: true,
        children: [
          { title: "Персонажи", isActive: false },
          { title: "Персонажи", isActive: true },
          { title: "Персонажи", isActive: false },
        ],
      },
      { title: "Для девочек", isOpen: false, hasChildren: true },
      { title: "Для мальчиков", isOpen: false, hasChildren: true },
      { title: "Наборы", isOpen: false, hasChildren: true },
    ],
  },
  { title: "Детали", isOpen: false, hasChildren: true },
  { title: "Раздел", isOpen: false, hasChildren: true },
];

export const SidebarSection = (): JSX.Element => {
  const [openSections, setOpenSections] = React.useState<
    Record<string, boolean>
  >({
    Инструкции: true,
    Персонажи: true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="flex flex-col w-full items-start gap-px bg-[#ececec] lg:max-h-screen lg:overflow-y-auto">
      <div className="flex flex-col items-start gap-3 p-4 md:p-8 w-full bg-[#ececec]">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex h-[62px] items-center gap-2.5 px-4 py-2.5 w-full bg-white cursor-pointer"
        >
          <SearchIcon className="w-6 h-6 text-black" />
          <span className="font-medium text-black text-base [font-family:'Montserrat',Helvetica] tracking-[0]">
            Поиск
          </span>
        </motion.div>

        <motion.button
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2.5 w-full text-left"
        >
          <UploadIcon className="w-6 h-6 text-black flex-shrink-0" />
          <div className="flex flex-col items-start flex-1">
            <div className="font-medium text-black text-[15px] [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal whitespace-nowrap">
              Загрузить список
            </div>
            <div className="font-medium text-[#00000080] text-sm [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal">
              Загрузите текстовый файл весом до 5Мб
            </div>
          </div>
        </motion.button>
      </div>

      <div className="flex flex-col items-start gap-3 p-4 md:p-8 flex-1 w-full bg-[#ececec]">
        <h2 className="font-semibold text-black text-[22px] [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal">
          Каталог деталей
        </h2>

        <div className="flex flex-col items-start gap-4 w-full">
          <Separator className="bg-black/20" />

          <nav className="flex flex-col items-start gap-3 w-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 w-full"
              >
                <Collapsible
                  open={openSections[item.title]}
                  onOpenChange={() => toggleSection(item.title)}
                  className="w-full"
                >
                  <CollapsibleTrigger className="flex items-center gap-3 w-full hover:text-[#ff1b15] transition-colors">
                    <span className="font-medium text-lg [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal">
                      {item.title}
                    </span>
                    {item.hasChildren && (
                      <motion.div
                        animate={{ rotate: openSections[item.title] ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRightIcon className="w-[9.5px] h-[5.5px]" />
                      </motion.div>
                    )}
                  </CollapsibleTrigger>

                  {item.children && (
                    <CollapsibleContent className="flex flex-col items-start gap-2.5 w-full mt-2.5">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className="w-full">
                          {child.children ? (
                            <Collapsible
                              open={openSections[child.title]}
                              onOpenChange={() => toggleSection(child.title)}
                              className="w-full"
                            >
                              <CollapsibleTrigger className="flex items-center gap-3 px-4 w-full hover:text-[#ff1b15] transition-colors">
                                <span className="font-medium text-lg [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal">
                                  {child.title}
                                </span>
                                {child.hasChildren && (
                                  <motion.div
                                    animate={{ rotate: openSections[child.title] ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRightIcon className="w-[9.5px] h-[5.5px]" />
                                  </motion.div>
                                )}
                              </CollapsibleTrigger>

                              <CollapsibleContent className="flex flex-col items-start gap-1.5 w-full mt-1.5">
                                {child.children.map(
                                  (subChild, subChildIndex) => (
                                    <motion.button
                                      key={subChildIndex}
                                      whileHover={{ x: 5 }}
                                      transition={{ duration: 0.2 }}
                                      className="flex items-center gap-3 px-8 w-full text-left"
                                    >
                                      <span
                                        className={`font-normal text-lg [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal ${
                                          subChild.isActive
                                            ? "text-[#ff1b15]"
                                            : "text-black"
                                        }`}
                                      >
                                        {subChild.title}
                                      </span>
                                    </motion.button>
                                  ),
                                )}
                              </CollapsibleContent>
                            </Collapsible>
                          ) : (
                            <button className="flex items-center gap-3 px-4 w-full text-left">
                              <span className="font-medium text-black text-lg [font-family:'Montserrat',Helvetica] tracking-[0] leading-normal">
                                {child.title}
                              </span>
                              {child.hasChildren && (
                                <ChevronRightIcon className="w-[9.5px] h-[5.5px]" />
                              )}
                            </button>
                          )}
                        </div>
                      ))}
                    </CollapsibleContent>
                  )}
                </Collapsible>

                {index < menuItems.length - 1 && (
                  <Separator className="bg-black/20" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};
