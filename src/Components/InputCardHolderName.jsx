import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function InputCardHolderName({ clickHandler, error }) {
  const [errorMessage, setErrorMessage] = useState(error);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  function handleChange(e) {
    if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
      setErrorMessage("Wrong format, letters only");
    } else if (e.target.value.length < 3) {
      setErrorMessage("Must contain at least 3 letters");
    } else {
      setErrorMessage("");
    }
    clickHandler(e);
  }

  return (
    <div>
      <label
        htmlFor="name"
        className="text-xs font-semibold uppercase tracking-[0.185em] text-VeryDarkViolet"
      >
        Cardholder Name
        <input
          type="text"
          name="name"
          id="name"
          maxLength={26}
          onChange={handleChange}
          placeholder="e.g. Jane Appleseed"
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
export default InputCardHolderName;
