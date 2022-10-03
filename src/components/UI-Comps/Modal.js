import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";

import "./Modal.css";

// תצוגת פופאפ

const ModalOverlay = (props) => {
  const content = (
    <div
      style={{
        width: `${props.width ? props.width : "30%"}`,
        left: `${props.left}`,
        right: `${props.right}`,
      }}
      className={`modal`}
    >
      {/* כותרת הפופ אפ */}
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
        <span className="x_close" onClick={props.onCancel}>
          x
        </span>
      </header>

      {/* אם זה פופאפ שיש בתוכו שדות של טופס אז תהיה אפשרות גם לשלוח פונקציה של אישור בפרופס  */}
      <form
        // אם הפופ אפ הוא טופס, ניתן לשלוח פונקציה שתגיד מה לעשות באישורו
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        {/* תוכן הפופאפ */}
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>

        <hr />
        {/* תחתית הפופאפ - כפתורים */}
        <div className={`modal__footer`}>
          {/*-  אם יש עוד כפתור - הכפתור הימני הוא לביטול והכפתור השמאלי יהיה לאישור*/}
          <button
            type={props.onSubmit ? "" : "button"}
            className="modal_button button_left"
            onClick={props.modalButtonRight ? props.onSubmit : props.onCancel}
          >
            {props.modalButtonLeft}
          </button>

          {/* אם יש עוד כפתור */}
          {props.modalButtonRight && (
            <button
              type="button"
              className="modal_button button_right"
              onClick={props.onCancel}
            >
              {" "}
              {props.modalButtonRight}{" "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
