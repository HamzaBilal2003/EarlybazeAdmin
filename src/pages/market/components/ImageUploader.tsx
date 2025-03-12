import React from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  selectedFile: File | null;
  handleImageSelect: (file: File | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ selectedFile, handleImageSelect }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      handleImageSelect(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()} className="border border-dashed p-6 text-center cursor-pointer">
      <input {...getInputProps()} />
      {selectedFile ? (
        <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="w-full rounded-md" />
      ) : (
        <p className="text-gray-400">Select Image</p>
      )}
    </div>
  );
};

export default ImageUploader;