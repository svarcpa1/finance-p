import "./DateItem.css";

const DateItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date-item">
      <div className="date-item__year">{year}</div>
      <div className="date-item__month">{month}</div>
      <div className="date-item__day">{day}</div>
    </div>
  );
};

export default DateItem;
