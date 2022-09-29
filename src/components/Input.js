import react from "react";

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css';

//קומפוננטת אינפוט דינאמית שמקבלת בפרופס את הערכים להגדרת אינפוט חדש
const Input = (props) => {
  //מזהה ייחודי לכל אינפוט
  const id = `ufld:${props.index.name.replace(" ", "").toUpperCase()}.DUMMY.MAALE`;
  return (
    <div
      className={`form-group form-fields ${props.hasError ? "has-error" : ""}`}
    >
      <label
        htmlFor={id}
        className="col-xs-3 col-sm-2 col-md-2 col-lg-2 NoPadding"
      >
        <span id={id}>{props.index.nameHeb}</span>
      </label>

      <div className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
        {/* אינפוט זכר או נקבה אמור להיות מסוג רדיו, אז בודקים מה הסוג ולפי זה מציגים אינפוט מתאים */}
        {props.index.nameHeb === "ז/נ" ? (
          <div className="gender-radio">
            <input
              name="gender"
              type={props.index.type}
              id={id + "MALE"}
              className="form-control"
              onChange={(e) => {
                props.array[props.arrkey].value = e.target.value;
              }}
            />
            <label htmlFor={id + "MALE"}>זכר</label>
            <input
              name="gender"
              type={props.index.type}
              id={id + "FEMALE"}
              className="form-control"
              onChange={(e) => {
                props.array[props.arrkey].value = e.target.value;
              }}
            />
            <label htmlFor={id + "FEMALE"}>נקבה</label>
          </div>
        ) : (
          // אם הוא לא אינפוט זכר או נקבה אז תציג אינפוט רגיל
          <input
            type={props.index.type}
            id={id}
            className="form-control"
            onChange={(e) => {
              props.array[props.arrkey].value = e.target.value;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Input;