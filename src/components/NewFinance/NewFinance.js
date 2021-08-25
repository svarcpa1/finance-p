import React from "react";

import "./NewFinance.css";
import FinanceForm from "./FinanceForm";
import Card from "../General UI/Card";

const NewFinance = (props) => {
  const saveExpenseDataHandler = (enteredFinanceData) => {
    const financeData = {
      ...enteredFinanceData,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100).toString(),
    };

    props.onAddFinanceData(financeData);
  };

  return (
    <Card className="new-finance">
      <FinanceForm onSaveFinanceData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewFinance;
