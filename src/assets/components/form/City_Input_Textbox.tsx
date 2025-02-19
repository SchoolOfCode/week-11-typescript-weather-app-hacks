"use client";

import { useState } from "react";

interface FormProps {
  onSubmit: (inputValue: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(inputValue)
    onSubmit(inputValue);
    setInputValue(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Enter City Name
        </div><input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter city name..."
      />
      <button
        type="submit">
        Submit
      </button>
    </form>
  );
}
