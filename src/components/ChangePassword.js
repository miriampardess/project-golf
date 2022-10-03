import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./UI-Comps/Modal";

const ChangePassword = ({
  handleChangePasswordClick,
  isShowChangePassword,
}) => {
  const handleNewPasswordSubmit = (e) => {
    // כאן תטפלי בכל החוקיות עם הסיסמאות ובאישור הטופס של החלפת סיסמא
    e.preventDefault();
    alert("סיסמא שונתה!!!!!!!!!!!!!!!!!!");
    console.log("סיסמא שונתה!");
    handleChangePasswordClick(); //כדי לסגור תפופאפ
  };

  return (
    <>
      <Modal
        show={isShowChangePassword}
        onCancel={handleChangePasswordClick}
        onSubmit={handleNewPasswordSubmit} //!הוספתי
        header="החלפת סיסמא"
        modalButtonLeft="אישור"
        modalButtonRight="ביטול"
        width="40%"
        left="30%"
        right="30%"
      >
        {//!  לא היה לי צורך בתגית טופס וכפתורים כי הפופאפ יוצר טופס וכפתורים בכל מצב (בקומפוננטת המודל) 
        }

        <div className="change-password">
          <label htmlFor="old-password">סיסמא ישנה</label>
          <input id="old-password" type="password" name="old-password" />

          <label htmlFor="new-password">סיסמא חדשה</label>
          <p>לפחות אחת מכל 4 האפשרויות הבאות: 0-9,A-Z,a-z,תו מיוחד</p>
          <input id="new-password" type="password" name="new-password" />
          <br />
        </div>
      </Modal>
    </>
  );
};

function NavBarChangePassword({ handleChangePasswordClick }) {
  return (
    <div>
      <div>
        <span onClick={handleChangePasswordClick}>החלפת סיסמא</span>
      </div>
    </div>
  );
}

export default ChangePassword;
export { NavBarChangePassword };
