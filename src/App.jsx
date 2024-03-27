import { createContext, useContext, useState } from "react";
import CardView from "./Components/CardView";
import Form from "./Components/Form";
import SuccessMsg from "./Components/SuccessMsg";

const AppContext = createContext({});

const App = () => {
  const [state, setState] = useState({
    name: "",
    number: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <main className="font-SpaceGrotesk lg:flex lg:items-center">
        <h1 className="sr-only">Card details form</h1>
        <CardView />
        {isFormValid ? (
          <SuccessMsg setIsFormValid={setIsFormValid} />
        ) : (
          <Form setIsFormValid={setIsFormValid} />
        )}
      </main>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default App;
