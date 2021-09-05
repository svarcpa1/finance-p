import React, { useState } from "react";

import "./NewFinance.css";
import FinanceForm from "./FinanceForm";
import Card from "../General UI/Card";

const NewFinance = (props) => {
  const [showFinanceForm, setShowFinanceForm] = useState(false);

  const saveExpenseDataHandler = (enteredFinanceData) => {
    const financeData = {
      ...enteredFinanceData,
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100).toString(),
    };

    //comment
    props.onAddFinanceData(financeData);
  };

  const showFinanceFormHandler = (event) => {
    setShowFinanceForm(true);
  };

  const cancelFinanceFormHandler = (event) => {
    setShowFinanceForm(false);
  };

  if (!showFinanceForm) {
    return (
      <Card className="new-finance">
        <button type="button" onClick={showFinanceFormHandler}>
          Insert Finance Record
        </button>
      </Card>
    );
  }

  return (
    <Card className="new-finance">
      <FinanceForm
        onSaveFinanceData={saveExpenseDataHandler}
        onCancelFinanceForm={cancelFinanceFormHandler}
      />
    </Card>
  );
};

export default NewFinance;
