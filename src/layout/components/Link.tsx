import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface SubLink {
  name: string;
  link: string;
  icon: string;
}

interface LinkCompProps {
  name: string;
  link: string;
  sub?: SubLink[];
  isActiveCheck?: boolean;
  icon: string;
  onClick?: () => void;
  menuStatus?: boolean;
}

const LinkComp: React.FC<LinkCompProps> = ({
  name,
  link,
  sub = [],
  isActiveCheck,
  icon,
  onClick,
  menuStatus,
}) => {
  console.log("The Icon is", icon);
  const location = useLocation();
  const [isActive, setIsActive] = useState(isActiveCheck);

  useEffect(() => {
    if (
      location.pathname === link ||
      sub.some((subItem) => location.pathname === subItem.link)
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, link, sub]);

  return (
    <>
      <div>
        <div className="px-4 relative">
          {isActive ? (
            <div className="absolute left-0 top-0 h-full bg-[#257355] w-2 rounded"></div>
          ) : (
            ""
          )}
          <Link
            to={link}
            onClick={onClick}
            className={`${
              menuStatus ? "w-fit" : ""
            } flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer  ${
              isActive
                ? "bg-gradient-to-r from-[#022216] to-[#0f4c35]"
                : "hover:bg-gradient-to-r hover:from-[#022216] hover:to-[#19AC74]"
            }`}
          >
            <div className="flex items-center gap-3">
              <img src={icon} alt={`${name} icon`} className="2xl" />

              {!menuStatus && (
                <span className="capitalize font-semibold">{name}</span>
              )}
            </div>
            {!menuStatus && sub.length > 0 && (
              <i className="bi bi-plus-square 2xl"></i>
            )}
          </Link>
        </div>
        {isActive && sub.length > 0 && (
          <div
            className={`sublinks relative flex flex-col ${
              !menuStatus ? "ml-14" : ""
            } gap-2 mt-4 animate-slide-down`}
          >
            {!menuStatus && (
              <div className="absolute left-0 top-0 h-[78%] w-[2px] bg-[#257355]"></div>
            )}
            {sub.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  className={`flex items-center gap-2 ${
                    !menuStatus ? "pl-[20px]" : "pl-[28px]"
                  } text-lg ${
                    location.pathname === item.link ? "text-[#44efad]" : ""
                  } relative`}
                >
                  {!menuStatus && (
                    <div className="absolute left-0 top-1/2 h-[2px] w-[20px] bg-[#257355]"></div>
                  )}
                  <i className={`${item.icon} 2xl pl-1`}></i>
                  {!menuStatus && (
                    <span className="capitalize font-semibold">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default LinkComp;