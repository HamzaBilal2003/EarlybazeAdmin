import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsletterSidebar from "./components/NewsletterSidebar";
import NewsletterEditor from "./components/NewsletterEditor";

interface Section {
  type: "heading" | "paragraph" | "image" | "link";
  id: number;
}

const MarketCreate: React.FC = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<Section[]>([]);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const addSection = (type: "heading" | "paragraph" | "image" | "link") => {
    setSections([...sections, { type, id: Date.now() }]);
  };

  const handleImageSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const sendNewsletter = () => {
    console.log("Newsletter Sent!");
    console.log("Sections:", sections);
    console.log("Content:", content);
    console.log("Selected File:", selectedFile);
  };

  return (
    <div className="p-6 bg-[#031E11] text-white min-h-screen">
      <div className="flex items-center gap-4 mb-5">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]"
        >
          <i className="bi bi-chevron-left text-xl"></i>
        </div>
        <h1 className="text-4xl ">Newsletters</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <NewsletterSidebar addSection={addSection} />
        <NewsletterEditor
          sections={sections}
          content={content}
          setContent={setContent}
          selectedFile={selectedFile}
          handleImageSelect={handleImageSelect}
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="bg-gray-700 px-6 py-2 rounded-md">Cancel</button>
        <button onClick={sendNewsletter} className="bg-green-500 px-6 py-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default MarketCreate;