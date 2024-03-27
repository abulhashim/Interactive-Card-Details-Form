import cardFront from "../assets/images/bg-card-front.png";
import cardBack from "../assets/images/bg-card-back.png";
import logo from "../assets/images/card-logo.svg";
import { useAppContext } from "../App";

const CardView = () => {
  const { state } = useAppContext();
  const { name, number, expirationMonth, expirationYear, cvv } = state;
  return (
    <div className="mb-16 flex w-full items-center bg-Mobile bg-cover bg-no-repeat px-4 lg:mb-0 lg:min-h-screen lg:basis-1/2 lg:bg-Desktop lg:bg-contain lg:p-0">
      <div className="relative top-8 mx-auto h-[15.25rem] w-full max-w-[23rem] lg:top-0 lg:mr-4 lg:h-[32.875rem] lg:max-w-[33.75rem]">
        <div className="absolute bottom-0 z-20 order-2 max-w-[17.875rem] lg:bottom-auto lg:order-1 lg:max-w-[27.875rem]">
          <img src={cardFront} alt="front side of payment card" />
          <div className="absolute left-4 right-4 top-4 lg:left-8 lg:right-8 lg:top-7">
            <img src={logo} alt="logo icon" className="w-[22%]" />
            <div className="mt-10 text-lg tracking-widest text-white lg:mt-[4.35rem] lg:text-[1.8rem]">
              <p className="">{number || "0000 0000 0000 0000"}</p>
              <div className="mt-3 flex justify-between text-xs uppercase lg:mt-7 lg:text-sm">
                <p>{name || "Jane Appleseed"}</p>
                <p>
                  <span>{expirationMonth || "00"}</span>/
                  <span>{expirationYear || "00"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-auto right-0 z-10 order-1 max-w-[17.875rem] lg:bottom-0 lg:max-w-[27.875rem]">
          <img src={cardBack} alt="back side of payment card" />
          <div className="absolute right-10 top-[42%] text-sm text-white lg:right-[6ch] lg:top-[45%] ">
            <p>{cvv || "000"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardView;
