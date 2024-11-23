"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaNewspaper,
  FaCalendarAlt,
  FaBars,
  FaAngleDown,
} from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", address: "/admin" },
    {
      icon: <FaNewspaper />,
      text: "Articles",
      address: "/admin/news",
      subItems: [
        { text: "All Articles", address: "/admin/news/update" },
        { text: "Create Article", address: "/admin/news/create" },
        { text: "Manage Categories", address: "/admin/news/categories" },
      ],
    },
    {
      icon: <FaCalendarAlt />,
      text: "Events",
      address: "/admin/events",
      subItems: [
        { text: "All Events", address: "/admin/events" },
        { text: "Create Events", address: "/admin/events/create" },
      ],
    },
  ];

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Header */}
        <div className="h-[64px] p-4 pb-2 flex justify-between items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnytJsHDAluP-VjxpuKJhDMF2BKagFxXAOw&s"
            className={`overflow-hidden h-[46px] transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Sidebar Items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                address={item.address}
                subItems={item.subItems}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        {/* Footer */}
        <div className="border-t flex p-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLFUO9V-7LCC_tU1c3YjPx7FWH1335ukY0A&s"
            alt="Avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">hehehehe</h4>
              <span className="text-xs text-gray-600">ngoc99hp@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, address, subItems }) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();
  const isActive = address && pathname === address;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!expanded) setIsOpen(false);
  }, [expanded]);

  return (
    <>
      {/* Parent Item */}
      {/* <div
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {subItems &&
          expanded && ( // Show arrow only when sidebar is expanded
            <FaAngleDown
              className={`ml-auto transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          )}
      </div> */}

      {/* Sub-Items with Animation */}
      {/* <AnimatePresence>
        {expanded && isOpen && subItems && (
          <motion.ul
            className="pl-8"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {subItems.map((subItem, index) => {
              const isSubItemActive = pathname === subItem.address;
              return (
                <Link href={subItem.address} key={index}>
                  <li
                    className={`py-2 px-3 my-1 font-medium rounded-md cursor-pointer text-gray-600 hover:bg-indigo-50 ${
                      isSubItemActive
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : ""
                    }`}
                  >
                    {subItem.text}
                  </li>
                </Link>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence> */}

      {/* popup */}
      {!expanded && !isOpen && subItems ? (
        <Popover placement="right-start" >
          <PopoverTrigger>
            <div
              className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                isActive
                  ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
              }`}
            >
              {icon}
            </div>
          </PopoverTrigger>
          <PopoverContent>
            {subItems.map((subItem, index) => {
              const isSubItemActive = pathname === subItem.address;
              return (
                <Link href={subItem.address} key={index} className="w-full">
                  <div
                    className={`w-full py-2 px-3 my-1 font-medium rounded-md cursor-pointer text-gray-600 hover:bg-indigo-50 ${
                      isSubItemActive
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : ""
                    }`}
                  >
                    {subItem.text}
                  </div>
                </Link>
              );
            })}
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <div
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
              isActive
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {icon}
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              {text}
            </span>
            {subItems &&
              expanded && ( // Show arrow only when sidebar is expanded
                <FaAngleDown
                  className={`ml-auto transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
          </div>

          {/* Sub-Items with Animation */}
          <AnimatePresence>
            {expanded && isOpen && subItems && (
              <motion.ul
                className="pl-8"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {subItems.map((subItem, index) => {
                  const isSubItemActive = pathname === subItem.address;
                  return (
                    <Link href={subItem.address} key={index}>
                      <li
                        className={`py-2 px-3 my-1 font-medium rounded-md cursor-pointer text-gray-600 hover:bg-indigo-50 ${
                          isSubItemActive
                            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                            : ""
                        }`}
                      >
                        {subItem.text}
                      </li>
                    </Link>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
