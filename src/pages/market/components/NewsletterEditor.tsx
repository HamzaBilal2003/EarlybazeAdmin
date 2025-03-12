import React from "react";
import EditorSection from "./EditorSection";

interface NewsletterEditorProps {
  sections: { id: number; type: "heading" | "paragraph" | "image" | "link" }[];
  content: string;
  setContent: (value: string) => void;
  selectedFile: File | null;
  handleImageSelect: (file: File | null) => void;
}

const NewsletterEditor: React.FC<NewsletterEditorProps> = ({
  sections,
  content,
  setContent,
  selectedFile,
  handleImageSelect,
}) => {
  return (
    <div className="col-span-9 bg-[#052B16] p-4 rounded-lg">
      {/* Formatting Toolbar */}
      <div className="flex items-center gap-4 mb-4 p-3 bg-[#031E11] rounded-md">
        <select className="bg-transparent text-white p-1 border-none">
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Paragraph</option>
        </select>
      </div>

      {/* Editor Sections */}
      {sections.map((section) => (
        <EditorSection
          key={section.id}
          section={section}
          content={content}
          setContent={setContent}
          selectedFile={selectedFile}
          handleImageSelect={handleImageSelect}
        />
      ))}
    </div>
  );
};

export default NewsletterEditor;