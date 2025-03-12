import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LinkComp from "./components/Link";
import logo from "../assets/images/logo.png";
import { Sidebar_links } from "../dummyData/Data";

interface SidebarProps {
  setMobileOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setMobileOpen }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <div
      className={`bg-theme-dark text-white overflow-auto h-screen ${
        !menuOpen ? "w-[300px]" : "w-fit"
      }`}
    >
      {/* Close button for mobile */}
      <div className="flex justify-end lg:hidden">
        <button
          className="text-xl cursor-pointer mx-4 mt-2"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
      </div>
      {/* Sidebar content */}
      <div className="pl-4 flex items-center min-h-[102px] border-b-2 border-[#093826] relative">
        <Link to="/dashboard">
          <h1 className="text-xl md:text-2xl font-extrabold flex items-center gap-2  w-full text-theme-bright-light">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            {!menuOpen ? "EarlyBaze" : ""}
          </h1>
        </Link>
        <div
          onClick={handleMenu}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#257355] px-1 rounded-l-xl"
        >
          {!menuOpen ? (
            <i className="bi bi-arrow-left-short text-2xl"></i>
          ) : (
            <i className="bi bi-arrow-right-short text-2xl"></i>
          )}
        </div>
      </div>
      {/* Menu */}
      <div className="pt-4 ">
        <nav className="flex flex-col gap-4">
          {Sidebar_links.map((x, index) => (
            <LinkComp
              key={index}
              name={x.name}
              link={x.link}
              icon={x.icon}
              sub={x.sublinks}
              isActiveCheck={activeLink === x.link}
              onClick={() => setActiveLink(x.link)}
              menuStatus={menuOpen}
            />
          ))}
        </nav>
      </div>
      <div className="p-4 border-t-2 border-[#093826] mt-4 flex items-center justify-center">
        <button className="flex items-center justify-center p-2 gap-2 text-[#FF0000] font-bold rounded-lg w-full border border-[#F70F0F]">
          <i className="bi bi-box-arrow-left text-2xl"></i>
          {!menuOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;