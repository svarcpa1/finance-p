import React, { useState } from "react";

import FinanceItemBox from "./components/Finance/FinanceItemBox";
import NewFinance from "./components/NewFinance/NewFinance";

let INITIAL_FINANCE = [
  {
    id: "900",
    title: "Book",
    date: new Date(2020, 2, 8),
    price: 400,
    currency: "CZK",
  },
  {
    id: "112",
    title: "Drink",
    date: new Date(2021, 4, 8),
    price: 120,
    currency: "CZK",
  },
  {
    id: "113",
    title: "Pizza",
    date: new Date(2021, 10, 7),
    price: 200,
    currency: "CZK",
  },
];

const App = () => {
  const [financeItemsAll, setFinanceItems] = useState(INITIAL_FINANCE);

  const addFinanceDataHandler = (enteredFinanceData) => {
    setFinanceItems((prevFinance) => {
      return [enteredFinanceData, ...prevFinance];
    });
  };

  const deleteFinance = (id) => {
    const financeItemsAllRemoved = [...financeItemsAll].filter(
      (item) => item.id !== id
    );
    setFinanceItems(financeItemsAllRemoved);
  };

  return (
    <div>
      <NewFinance onAddFinanceData={addFinanceDataHandler} />
      <FinanceItemBox
        financeItems={financeItemsAll}
        onDelete3={deleteFinance}
      ></FinanceItemBox>
    </div>
  );
};

export default App;
