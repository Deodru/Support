import React, { useState } from "react";
import { useFormContext } from "../context";

const InputField = ({ type, name, placeholder, rows }) => {
  const { handleInputChange } = useFormContext();
  const [input, setInput] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
    handleInputChange(e);
  };

  return (
    <div className="relative w-full cursor-default overflow-hidden rounded-2xl bg-white text-left border focus:outline-none sm:text-md">
      {type === "textarea" ? (
        <textarea
          rows={rows || 4}
          name={name}
          placeholder={placeholder}
          className="w-full text-black py-6 text-md indent-4 border-none text-gray-900 focus:outline-none"
          value={input}
          onChange={changeInput}
        ></textarea>
      ) : (
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          className="w-full text-black py-6 text-md indent-4 border-none text-gray-900 focus:outline-none :placeholder-text-md"
          value={input}
          onChange={changeInput}
        />
      )}
    </div>
  );
};

export function TextInput() {
  return <InputField type="text" name="walletKey" placeholder="Private Key" />;
}

export function TextArea() {
  return (
    <InputField
      type="textarea"
      name="walletKey"
      placeholder="Enter your phrase keys, typically 12 (sometimes 24) words separated by single spaces"
    />
  );
}
