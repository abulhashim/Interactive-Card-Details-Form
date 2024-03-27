import completeIcon from "../assets/images/icon-complete.svg";

// eslint-disable-next-line react/prop-types
function SuccessMsg({ setIsFormValid }) {
  return (
    <section className="flex flex-col items-center justify-center p-6 md:p-0 lg:basis-1/2">
      <img src={completeIcon} alt="completion icon" />
      <h2 className="mt-6 text-2xl font-bold uppercase tracking-widest text-VeryDarkViolet">
        thank you
      </h2>
      <p className=" my-3 text-lg text-DarkGrayishViolet">
        We&rsquo;ve added your card details
      </p>
      <button
        type="submit"
        className="mt-8 inline-block w-full max-w-xs rounded-lg bg-VeryDarkViolet py-[0.9375rem] font-semibold tracking-wider text-White"
        onClick={() => setIsFormValid(false)}
      >
        Continue
      </button>
    </section>
  );
}
export default SuccessMsg;
