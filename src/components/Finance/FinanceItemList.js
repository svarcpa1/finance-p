import "./FinanceItemList.css";

import FinanceItem from "./FinanceItem";

const FinanceItemList = (props) => {
  if (props.filteredFinance.length > 0) {
    return (
      <ul className="finance-list">
        {props.filteredFinance.map((fi) => (
          <FinanceItem
            key={fi.id}
            title={fi.title}
            date={fi.date}
            price={fi.price}
            currency={fi.currency}
          ></FinanceItem>
        ))}
      </ul>
    );
  }
  return <h3 className="finance-list__fallback">Please add something!!!</h3>;
};

export default FinanceItemList;
