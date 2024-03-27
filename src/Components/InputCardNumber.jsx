import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
function InputCardNumber({ clickHandler, error }) {
  const [formattedValue, setFormattedValue] = useState("");

  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const unformattedValue = inputValue.replace(/\s/g, "");
    let formatted = "";

    for (let i = 0; i < unformattedValue.length; i++) {
      formatted += unformattedValue[i];
      if ((i + 1) % 4 === 0 && i + 1 !== unformattedValue.length) {
        formatted += " ";
      }
    }

    if (!/^[0-9]+$/.test(unformattedValue)) {
      setErrorMessage("Wrong format, numbers only");
    } else if (unformattedValue.length !== 16) {
      setErrorMessage("Must be 16 digits");
    } else {
      setErrorMessage("");
    }

    setFormattedValue(formatted);
    clickHandler(e);
  };

  return (
    <div>
      <label
        htmlFor="number"
        className="text-xs uppercase tracking-[0.185em] text-VeryDarkViolet"
      >
        card number
        <input
          type="text"
          name="number"
          id="number"
          maxLength={19}
          value={formattedValue}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
          className={`mt-1.5 block w-full rounded-md border px-4 py-[0.5625rem] text-base placeholder:text-LightGrayishViolet ${
            errorMessage
              ? "border-Red outline-Red focus:border-Red"
              : "border-LightGrayishViolet"
          }`}
        />
        {errorMessage && (
          <div
            aria-live="polite"
            className="mt-1 text-sm font-normal normal-case italic text-Red"
          >
            {errorMessage}
          </div>
        )}
      </label>
    </div>
  );
}
export default InputCardNumber;
