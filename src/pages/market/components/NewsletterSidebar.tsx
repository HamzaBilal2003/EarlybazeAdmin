import React from "react";
import { FaHeading, FaParagraph, FaImage, FaLink } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

interface NewsletterSidebarProps {
  addSection: (type: "heading" | "paragraph" | "image" | "link") => void;
}

const NewsletterSidebar: React.FC<NewsletterSidebarProps> = ({ addSection }) => {
  return (
    <div className="col-span-3 bg-[#052B16] p-4 rounded-lg">
      {/* Date & Status */}
      <div className="mb-6">
        <p className="text-gray-400">Date Created</p>
        <p className="text-lg font-semibold">01 - 01 - 25 / 06:23 AM</p>
      </div>
      <div className="mb-6">
        <p className="text-gray-400">Status</p>
        <div className="flex items-center gap-2">
          <span className="text-green-500">Not Started</span>
          <span className="border border-green-500 px-2 py-1 rounded-full text-xs">0%</span>
        </div>
      </div>

      {/* Add Sections */}
      <div className="mb-6">
        <p className="text-gray-400">Add Sections</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button
            onClick={() => addSection("heading")}
            className="flex flex-col items-center p-2 bg-[#031E11] rounded-md"
          >
            <FaHeading className="text-2xl" />
            <p className="text-xs">Heading</p>
          </button>
          <button
            onClick={() => addSection("paragraph")}
            className="flex flex-col items-center p-2 bg-[#031E11] rounded-md"
          >
            <FaParagraph className="text-2xl" />
            <p className="text-xs">Paragraph</p>
          </button>
          <button
            onClick={() => addSection("image")}
            className="flex flex-col items-center p-2 bg-[#031E11] rounded-md"
          >
            <FaImage className="text-2xl" />
            <p className="text-xs">Image</p>
          </button>
          <button
            onClick={() => addSection("link")}
            className="flex flex-col items-center p-2 bg-[#031E11] rounded-md"
          >
            <FaLink className="text-2xl" />
            <p className="text-xs">Links</p>
          </button>
        </div>
      </div>

      {/* Audience */}
      <div>
        <p className="text-gray-400">Audience</p>
        <div className="flex items-center gap-2 p-3 bg-[#031E11] rounded-lg mt-2">
          <AiOutlineUsergroupAdd className="text-2xl" />
          <p className="text-xs">+200 Others</p>
        </div>
        <button className="mt-3 w-full py-2 bg-green-600 rounded-md">Edit</button>
      </div>
    </div>
  );
};

export default NewsletterSidebar;