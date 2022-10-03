import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword, { NavBarChangePassword } from "./ChangePassword";

import ForgetPasswordA, { NavBarForgetPassword } from "./ForgetPassword";
import { login } from "../RequestsApi";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./UI-Comps/Modal";

//images
import engFlag from "../images/eng-flag.png";
import profileLogo from "../images/profile-logo.png";
import one1logo from "../images/one1-logo.png";
import teeTimeLogo from "../images/tee-time-logo.png";

//css
// import "../css/golf-rtl.css";
// import "../css/golfstyle.css";
// import "../css/reset.css";
import "reactjs-popup/dist/index.css";

export default function Login(props) {
  const { envDefaults, connect, setConnect } = props;

  const navigate = useNavigate();

  //login
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [messageError, setMessageError] = useState("");

  //popups states
  const [showCheckboxPopup, setShowCheckboxPopup] = useState(false); // !!!false סטייט שאומר מתי להציג תפופאפ - תשני את האתחול ל
  const [showUserPwdPopup, setShowUserPwdPopup] = useState(false); //! בקוד צריך לעדכן אותו לטרו אחרי הבדיקות
  const [isShowForgetPassword, setIsShowForgetPassword] = useState(false);
  const [isShowChangePassword, setIsShowChangePassword] = useState(false);

  async function checkUserName() {}
  const requestApiLogin = async (e) => {
    //!אם אחד מהשדות ריק - יקפיץ פופאפ ויצא מהפונקציה
    e.preventDefault();
    if (e.target.form[0].value == ""  || e.target.form[1].value == "") {
      setShowUserPwdPopup(true);
      return;
    }
    let url = `http://localhost:8000/login`;
    login(url, username, password).then(
      (response) => {
        if (response === "false") {
          setMessageError("שם משתמש או הסיסמא לא חוקיים");
        } else if (response === "true" && connect) {
          navigate("/Main");
          setTimeout(() => {
            navigate("/Main");
          }, 1000);
        } else {
          setShowCheckboxPopup(true); //! הוספתי אני
          setMessageError("אנא אשר כי קראת את התקנון");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  //   !הוספתי
  const handleCloseErrorPopups = () => {
    // שמתי את שתיהם בפונקציה אחת כי גם ככה שסוגרים אחד בטוח שגם השני צריך להיות סגור
    setShowCheckboxPopup(false);
    setShowUserPwdPopup(false);
  };

  const handleForgetPasswordClick = () => {
    setIsShowForgetPassword((isShowForgetPassword) => !isShowForgetPassword);
  };
  const handleChangePasswordClick = () => {
    setIsShowChangePassword((isShowChangePassword) => !isShowChangePassword);
  };
  //Rules
  const handleCheckboxChange = () => {
    setConnect((connect) => !connect);
  };

  const goRules = () => {
    navigate("/Rules");
  };
  const goRegistration = () => {
    navigate("/Registration");
  };

  return (
    <div>
      <title>Tee Time</title>

      <div>
        {/* onLoad={() => checkUserName()} */}

        <Header />
        <div className="container login">
          <div className="clearboth"></div>
          {/* <!-- End flag_box --> */}

          <div className="container login">
            <div className="row flag_box">
              <a href="/#">
                <span className="flag_icon">
                  <img
                    id="ufld:FLAG.DUMMY.MAALE"
                    src={engFlag}
                    width="21"
                    alt="English"
                  />
                </span>
                <span className="select_lang" id="ufld:LANG.DUMMY.MAALE">
                  English&nbsp;
                </span>
              </a>
            </div>

            <div className="clearboth"></div>

            <div className="row">
              <div className="clearboth"></div>
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-lg-8">
                <form action="" className="form-horizontal login-form">
                  <div className="login_box ">
                    <div className="login_title">
                      <span id="ufld:HEADER.DUMMY.MAALE">כניסת משתמשים</span>
                    </div>
                    <div className="user_name col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="text"
                        className="form-control textField"
                        id="ufld:USERNAME.DUMMY.MAALE"
                        placeholder="הכנס שם משתמש"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className="user_password col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <input
                        type="password"
                        className="form-control textField"
                        id="ufld:PASWORD.DUMMY.MAALE"
                        placeholder="הכנס סיסמה"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {/*//!!!!!! --------!!!!!פופאפ ללא הוכנס שם משתמש וסיסמא ------------}
                   */}
                  <Modal
                    show={showUserPwdPopup}
                    onCancel={handleCloseErrorPopups} //for canceling when we click the backdrop
                    header="Tee Time"
                    modalButtonLeft="Ok"
                    left="35%"
                    right="35%"
                  >
                    {/* תוכן המודל נכתב בין שתי התגיות שלו */}

                    <p>לא הוזן שם משתמש וסיסמא</p>
                  </Modal>
                  {/*//!!!!!! -----------------------------------}
                   */}
                  {/* <!-- End login_box --> */}
                  <div className="forgot_pass  col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a>
                      {/*//!!!!!! --------! פופאפ לשכחתי סיסמא ------------}
                       */}
                      <NavBarForgetPassword
                        handleForgetPasswordClick={handleForgetPasswordClick}
                      />
                    </a>

                    <ForgetPasswordA
                      isShowForgetPassword={isShowForgetPassword}
                      handleForgetPasswordClick={handleForgetPasswordClick}
                      envDefaults={envDefaults}
                    />
                  </div>
                  <div className="forgot_pass  col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a>
                      {/*//!!!!!! --------! פופאפ להחלפת סיסמא ------------}
                       */}
                      <NavBarChangePassword
                        handleChangePasswordClick={handleChangePasswordClick}
                      />
                    </a>

                    <ChangePassword
                      isShowChangePassword={isShowChangePassword}
                      handleChangePasswordClick={handleChangePasswordClick}
                    />
                  </div>

                  <div className="site_rules_box col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="rules_checkbox pull-dir"></div>

                    <input
                      type="checkbox"
                      id="topping"
                      name="topping"
                      value="Paneer"
                      checked={connect}
                      onChange={handleCheckboxChange}
                    />
                    <div className="rules_text">
                      &nbsp;קראתי את&nbsp;
                      <a
                        href="http://localhost:3000/Rules"
                        id="ufld:HDR_TAKANON.DUMMY.MAALE"
                      >
                        התקנון
                      </a>
                    </div>
                    {/*//!!!!!! --------!!!!!פופ של אישור תקנון ------------}
                     */}
                    <Modal
                      show={showCheckboxPopup}
                      onCancel={handleCloseErrorPopups} //for canceling when we click the backdrop
                      header="Tee Time"
                      modalButtonLeft="Ok"
                      left="35%"
                      right="35%"
                    >
                      {/* תוכן המודל נכתב בין שתי התגיות שלו */}

                      <p>חובה לאשר את קריאת התקנון</p>
                    </Modal>
                    {/*//!!!!!! -----------------------------------}
                     */}
                  </div>
                  {/* <!-- End site_rules_box --> */}
                  <div className="row NoMargin">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
                    <div className="form-group enterBtn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      {/* <span className="btn btn-sm btn-info btn-block btn-enter" id="ufld:ENTER.DUMMY.MAALE"
                                                disabled={!(username && password)}
                                                onClick={
                                                    requestApiLogin}> כניסה
                                            </span> */}
                      <button
                        className="btn btn-sm btn-info btn-block btn-enter"
                        id="ufld:ENTER.DUMMY.MAALE"
                        onClick={requestApiLogin}
                      >
                        <span className="btn btn-sm btn-info btn-block btn-enter" />
                        כניסה
                      </button>
                      <div className="labelMessageError">{messageError}</div>
                    </div>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
                  </div>
                  <div className="row newcustomer_box">
                    <div className="newcustomer_lbl col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <span id="ufld:HDR_NEWCUSTOMER.DUMMY.MAALE">
                        לקוח חדש ?
                      </span>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
                    <div className="form-group enterBtn col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <span
                        className="btn btn-sm btn-info btn-block btn-reg"
                        id="ufld:NEWCUSTOMER.DUMMY.MAALE"
                        onClick={goRegistration}
                      >
                        הרשמה
                      </span>
                    </div>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
                  </div>
                </form>
              </div>

              {/* <!-- End newcustomer_box --> */}
              <div className="col-sm-2 col-md-2 col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Container--> */}
      <Footer />
    </div>
  );
}

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// //images
// import engFlag from '../images/eng-flag.png'
// import teeTimeLogo from '../images/tee-time-logo.png'

// //css
// import '../css/golf-rtl.css'
// import '../css/golfstyle.css'
// import '../css/reset.css'
// import 'reactjs-popup/dist/index.css';

// import Rules from './Rules'
// import ForgetPassword, { ForgetPasswordA, NavBarForgetPassword } from '../components/ForgetPassword'
// import { login } from '../RequestsApi'
// import Footer from './Footer'
// import Header from './Header'

// export default function Login(props) {

//     const { envDefaults, connect, setConnect } = props;
//     console.log("envDefaults", envDefaults);
//     const navigate = useNavigate();

//     //login
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const [messageError, setMessageError] = useState("");

//     async function checkUserName() {
//     }
//     async function requestApiLogin() {
//         let url = `http://${envDefaults.basicRoute}/login`;
//         login(url, username, password)
//             .then((response) => {
//                 if (response === "false") {
//                     setMessageError("Invalid username or password")
//                 } else if (response === "true") {
//                     setTimeout(() => {
//                         navigate('/Main', { username, password });
//                     }, 1000);
//                 }
//             },
//                 (error) => {

//                     console.log(error)
//                 })
//     }

//     // ForgetPassword
//     const [isShowForgetPassword, setIsShowForgetPassword] = useState(true);

//     const handleForgetPasswordClick = () => {
//         setIsShowForgetPassword((isShowForgetPassword) => !isShowForgetPassword);
//     };

//     //Rules
//     const handleOnChange = () => {
//         setConnect(!connect);
//     };

//     const goRules = () => {
//         navigate('/Rules');

//     };
//     const goRegistration = () => {
//         navigate('/Registration');

//     };

//     return (
//         <div>

//             <title>Tee Time</title>

//             <div>
//                 {/* onLoad={() => checkUserName()} */}
//                 <Header />
//                 <div className="container login">

//                     <div className="clearboth"></div>
//                     {/* <!-- End flag_box --> */}

//                     <div className="container login">
//                         <div className="row flag_box">
//                             <a href="/#">
//                                 <span className="flag_icon"><img id="ufld:FLAG.DUMMY.MAALE" src={engFlag} width="21" alt="English" /></span>
//                                 <span className="select_lang" id="ufld:LANG.DUMMY.MAALE">English&nbsp;</span>
//                             </a>
//                         </div>

//                         <div className="clearboth"></div>

//                         <div className="row">
//                             <div className="clearboth"></div>
//                             <div className="col-sm-2 col-md-2 col-lg-2"></div>
//                             <div className="col-sm-12 col-md-8 col-lg-8 col-lg-8">
//                                 <form action="" className="form-horizontal login-form">
//                                     <div className="login_box ">
//                                         <div className="login_title">
//                                             <span id="ufld:HEADER.DUMMY.MAALE">כניסת משתמשים</span>
//                                         </div>
//                                         <div className="user_name col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                             <input type="text" className="form-control textField" id="ufld:USERNAME.DUMMY.MAALE" placeholder="הכנס שם משתמש" value={username}
//                                                 onChange={(e) => {
//                                                     setUsername(e.target.value)
//                                                 }} />

//                                         </div>
//                                         <div className="user_password col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                             <input type="password" className="form-control textField" id="ufld:PASWORD.DUMMY.MAALE" placeholder="הכנס סיסמה" value={password}
//                                                 onChange={(e) => {
//                                                     setPassword(e.target.value)
//                                                 }} />
//                                         </div>
//                                     </div>
//                                     {/* <!-- End login_box --> */}
//                                     <div className="forgot_pass  col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                         <a>
//                                             <NavBarForgetPassword handleForgetPasswordClick={handleForgetPasswordClick} />
//                                             <ForgetPassword isShowForgetPassword={isShowForgetPassword} handleForgetPasswordClick={handleForgetPasswordClick} envDefaults={envDefaults} />
//                                         </a>
//                                     </div>

//                                     <div className="site_rules_box col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                         <div className="rules_checkbox pull-dir" >
//                                         </div>

//                                         <input
//                                             type="checkbox"
//                                             id="topping"
//                                             name="topping"
//                                             value="Paneer"
//                                             checked={connect}
//                                             onChange={handleOnChange}

//                                         />
//                                         <div className="rules_text"

//                                         >&nbsp;קראתי את&nbsp;
//                                             <a href="http://localhost:3000/Rules"
//                                                 id="ufld:HDR_TAKANON.DUMMY.MAALE">
//                                                 התקנון
//                                             </a>

//                                         </div>
//                                     </div>
//                                     {/* <!-- End site_rules_box --> */}
//                                     <div className="row NoMargin">
//                                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
//                                         <div className="form-group enterBtn col-xs-6 col-sm-6 col-md-6 col-lg-6">

//                                             <span className="btn btn-sm btn-info btn-block btn-enter" id="ufld:ENTER.DUMMY.MAALE" disabled={!(username && password)}
//                                                 onClick={
//                                                     requestApiLogin}>כניסה</span>
//                                             <div className="labelMessageError">{messageError}</div>

//                                         </div>

//                                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
//                                     </div>
//                                     <div className="row newcustomer_box">
//                                         <div className="newcustomer_lbl col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                                             <span id="ufld:HDR_NEWCUSTOMER.DUMMY.MAALE">לקוח חדש ?</span>
//                                         </div>
//                                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
//                                         <div className="form-group enterBtn col-xs-6 col-sm-6 col-md-6 col-lg-6">
//                                             <span className="btn btn-sm btn-info btn-block btn-reg" id="ufld:NEWCUSTOMER.DUMMY.MAALE" onClick={goRegistration}>הרשמה</span>
//                                         </div>
//                                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>

//                                     </div>
//                                 </form>
//                             </div>

//                             {/* <!-- End newcustomer_box --> */}
//                             <div className="col-sm-2 col-md-2 col-lg-2"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- End Container--> */}
//             <Footer />
//         </div>
//     )
// }
