/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

function InputExpirationDate({ clickHandler, error }) {
  const [errorMessage, setErrorMessage] = useState(error);

  const expirationMonthRef = useRef(null);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (!/^[0-9]+$/.test(value)) {
      setErrorMessage("Wrong format, digits only");
    } else if (value.length !== 2) {
      setErrorMessage("Must contain 2 digits");
    } else {
      setErrorMessage("");
    }

    if (name === "expirationMonth") {
      if (value < 1 || value > 12) {
        setErrorMessage("Invalid month");
      }
    } else {
      if (value === "00") {
        setErrorMessage("Invalid year");
      } else {
        const currentYear = new Date().getFullYear();
        const twoDigitCurrentYear = currentYear % 100; // get last two digits of current year
        const enteredYear = parseInt(value, 10);

        if (
          enteredYear < twoDigitCurrentYear - 10 ||
          enteredYear > twoDigitCurrentYear + 10
        ) {
          setErrorMessage("Must be close to present");
        }
      }
    }

    clickHandler(e);
  }

  return (
    <fieldset className="mt-2 basis-1/2">
      <legend
        onClick={() => {
          expirationMonthRef.current.focus();
        }}
        className="text-xs uppercase tracking-[0.185em] text-VeryDarkViolet"
      >
        exp. date (mm/yy)
      </legend>
      <div className="flex gap-3">
        <input
          type="text"
          name="expirationMonth"
          id="expirationMonth"
          ref={expirationMonthRef}
          maxLength={2}
          onChange={handleChange}
          placeholder="MM"
          aria-label="Expiration Month"
          className={`mt-1.5 w-full rounded-md border px-4 py-[0.5625rem] text-base placeholder:text-LightGrayishViolet ${
            errorMessage
              ? "border-Red outline-Red focus:border-Red"
              : "border-LightGrayishViolet"
          }`}
        />

        <input
          type="text"
          name="expirationYear"
          id="expirationYear"
          maxLength={2}
          onChange={handleChange}
          placeholder="YY"
          aria-label="Expiration Year"
          className={`mt-1.5 w-full rounded-md border px-4 py-[0.5625rem] text-base placeholder:text-LightGrayishViolet ${
            errorMessage
              ? "border-Red outline-Red focus:border-Red"
              : "border-LightGrayishViolet"
          }`}
        />
      </div>
      {errorMessage && (
        <div
          aria-live="polite"
          className="mt-1 text-sm font-normal normal-case italic text-Red"
        >
          {errorMessage}
        </div>
      )}
    </fieldset>
  );
}
export default InputExpirationDate;
