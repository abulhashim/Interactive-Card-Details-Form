import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
function InputCVV({ clickHandler, error }) {
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  function handleChange(e) {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setErrorMessage("CVV must contain only digits");
    } else {
      setErrorMessage("");
    }
    clickHandler(e);
  }

  return (
    <div className="basis-1/2">
      <label
        htmlFor="cvv"
        className="text-xs font-semibold uppercase tracking-[0.185em] text-VeryDarkViolet"
      >
        cvc
        <input
          type="text"
          name="cvv"
          id="cvv"
          maxLength={3}
          onChange={handleChange}
          placeholder="e.g. 123"
          className={`mt-1.5 block w-full rounded-md border px-4 py-[0.5625rem] text-base placeholder:text-LightGrayishViolet ${
            errorMessage
              ? "border-Red outline-Red focus:border-Red"
              : "border-LightGrayishViolet"
          }`}
        />
      </label>
      {errorMessage && (
        <div
          aria-live="polite"
          className="mt-1 text-sm font-normal normal-case italic text-Red"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}
export default InputCVV;
