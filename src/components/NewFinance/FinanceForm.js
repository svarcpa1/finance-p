import React, { useState } from "react";

import "./FinanceForm.css";

const FinanceForm = (props) => {
  /*const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");*/

  const [userInput, setUserinput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "2021-09-01",
  });

  const addFinanceHandler = (event) => {
    // prevents default behavior = request not send, page not reloaded
    event.preventDefault();

    if (userInput.enteredTitle === "" || userInput.enteredAmount === 0) {
      alert("Please add Title and Price");
      return;
    }

    const financeData = {
      title: userInput.enteredTitle,
      date: new Date(userInput.enteredDate),
      price: +userInput.enteredAmount,
      currency: "CZK",
    };

    props.onSaveFinanceData(financeData);

    // setting value back to empty after submit
    // two way binding
    setUserinput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "2021-09-01",
    });
  };

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    /*setUserinput({
      ...userInput,
      enteredTitle: event.target.value,
    });*/

    setUserinput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserinput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserinput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  return (
    <form onSubmit={addFinanceHandler}>
      <div className="new-finance__controls"></div>
      <div className="new-finance__control">
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
          required="true"
          placeholder="Insert a name"
        />
      </div>
      <div className="new-finance__control">
        <label>Amount</label>
        <input
          type="number"
          min="1"
          step="1"
          value={userInput.enteredAmount}
          onChange={amountChangeHandler}
          required="true"
          placeholder="Insert a price"
        />
      </div>
      <div className="new-finance__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={userInput.enteredDate}
          required="true"
        />
      </div>
      <div className="new-finance__actions">
        <button onClick={props.onCancelFinanceForm} type="button">
          Cancel
        </button>
        <button onClick={addFinanceHandler} type="submit">
          Add Finance
        </button>
      </div>
    </form>
  );
};

export default FinanceForm;
