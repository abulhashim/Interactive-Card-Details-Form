import { useState } from "react";
import { useAppContext } from "../App";
import InputCVV from "./InputCVV";
import InputCardHolderName from "./InputCardHolderName";
import InputCardNumber from "./InputCardNumber";
import InputExpirationDate from "./InputExpirationDate";

// eslint-disable-next-line react/prop-types
const Form = ({ setIsFormValid }) => {
  const [errors, setErrors] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const { state, setState } = useAppContext();

  function clickHandler(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formErrors = {};
    if (!state.name) {
      formErrors.cardHolderName = "Can't be blank";
    }
    if (!state.number) {
      formErrors.cardNumber = "Can't be blank";
    }
    if (!state.expirationMonth || !state.expirationYear) {
      formErrors.expiration = "Can't be blank";
    }
    if (!state.cvv) {
      formErrors.cvv = "Can't be blank";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // All inputs are filled, proceed with form submission
      setIsFormValid(true);
    }
  }

  return (
    <div className="p-5 lg:basis-1/2 lg:p-0">
      <form
        className="mx-auto flex max-w-[23.875rem] flex-col gap-3.5 lg:ml-28 lg:gap-[1.3125rem]"
        onSubmit={handleSubmit}
      >
        <InputCardHolderName
          clickHandler={clickHandler}
          error={errors.cardHolderName}
        />
        <InputCardNumber
          clickHandler={clickHandler}
          error={errors.cardNumber}
        />
        <div className="flex gap-4">
          <InputExpirationDate
            clickHandler={clickHandler}
            error={errors.expiration}
          />
          <InputCVV clickHandler={clickHandler} error={errors.cvv} />
        </div>
        <button
          type="submit"
          className="mt-4 inline-block w-full rounded-lg bg-VeryDarkViolet py-[0.9375rem] font-semibold tracking-wider text-white"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};
export default Form;
