import React, { useState } from "react";
import { ApiForgotPassword } from '../RequestsApi'
import { useNavigate } from 'react-router-dom';
import Modal from "./UI-Comps/Modal"

const ForgetPasswordA = ({ envDefaults,isShowForgetPassword, handleForgetPasswordClick }) => {

    //Username
    const [username, setUsername] = useState();
    const navigate = useNavigate();

    //User message
    const [errorValidEmail, setErrorValidEmail] = useState("");

    // Sending Email 
    async function SendingEmail() {

        let url =`http://${envDefaults.basicRoute}/ForgotPassword`
        await ApiForgotPassword(url, username)
            .then((response) => {
                setErrorValidEmail(response)
                setTimeout(() => {
                        handleForgetPasswordClick();
                        setErrorValidEmail("")
                        setUsername("")
                    }
                , 1000);
                navigate('/Login');
                setTimeout(() => {
                    navigate('/Login');
                }, 1000);
            })
            .catch((err) => {
                setErrorValidEmail("בעית שרת")
            }
            )
    }
    return (
        //!הקלאסים לא התאימו לעיצוב אז שמתי בהערה
        // <div className={`${isShowForgetPassword ? "active" : ""} show`}>
        //     <div className="login-form">
        //         <div className="form-box solid">
                    // <form>//!לא היה צורך בתגית פורם ובכפתורים כי המודל יוצר אותם לבד 
                    <Modal
                        show={isShowForgetPassword}
                        onCancel={handleForgetPasswordClick}
                        onSubmit={e => {
                            e.preventDefault();
                            console.log('הולך לפונקציה sendingEmail')
                            SendingEmail(e.target.value);
                        }} //!לקחתי מהכפתור שכתבת למטה את הפונקציה את הזאת
                        header="שכחתי סיסמא"
                        modalButtonLeft="אישור"
                        modalButtonRight="בטל"
                        width="40%"
                        left="30%"
                        right="30%"
                    >
                        <div className="forget-password">
                            <label htmlFor="username">קוד משתמש/ת</label>
                            <input id="username" type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} />

                            {//!במקום הכפתור פה למטה- העברתי את הפונקציית קליק שלו למודל. הוא כבר ישים את זה על הכפתורים שבמודל
}
                            {/* <button
                                value="אישור" className="login-btn"
                                type="button"
                                onClick={e => {
                                    SendingEmail(e.target.value)
                                }}>
                            </button> */}

                            <label>{errorValidEmail}</label>
                        </div>
                    </Modal>
                    // </form>
            //     </div>
            //  </div>
        // </div>
    );
};


function NavBarForgetPassword({ handleForgetPasswordClick }) {
    return (
        <div >
            <div>
                <span onClick={handleForgetPasswordClick} >
                    שכחתי סיסמא
                </span>
            </div>
        </div>
    );
}



export default ForgetPasswordA
export { NavBarForgetPassword }



// import React, { useState } from "react";
// import { ApiForgotPassword } from '../RequestsApi'

// const ForgetPasswordA = ({envDefaults, isShowForgetPassword, handleForgetPasswordClick }) => {

//     //Username
//     const [username, setUsername] = useState();

//     //User message
//     const [errorValidEmail, setErrorValidEmail] = useState("");

//     // Sending Email 
//     async function SendingEmail() {

//         let url = `http://${envDefaults.basicRoute}/ForgotPassword`
        
//         await ApiForgotPassword(url, username)
//             .then((response) => {
//                 setErrorValidEmail(response)
//                 setTimeout(() => {
//                     if (response === "הסיסמה שלך נשלחה אליך לכתובת המייל") {
//                         handleForgetPasswordClick();
//                         setErrorValidEmail("")
//                         setUsername("")
//                     }
//                 }, 1000);
//             })
//             .catch((err) => {
//                 setErrorValidEmail("בעית שרת")
//             }
//             )
//     }
//     return (
//         <div className={`${isShowForgetPassword ? "active" : ""} show`}>
//             <div className="login-form">
//                 <div className="form-box solid">
//                     <form>
//                         <br></br>
//                         <input type="text" name="username" className="login-box" placeholder="הכנס שם משתמש" value={username} />
//                         <br></br>
//                         <button
//                             value="אישור" className="login-btn"
//                             type="button"
//                             onClick={e => {
//                                 SendingEmail(e.target.value)
//                             }}>
//                         </button>
//                         <label>{errorValidEmail}</label>

//                     </form>
//                 </div>
//              </div>
//         // </div>
//     );
// };


// function NavBarForgetPassword({ handleForgetPasswordClick }) {
//     return (
//         <div >
//             <div>
//                 <span onClick={handleForgetPasswordClick} >
//                     שכחתי סיסמא
//                 </span>
//             </div>
//         </div>
//     );
// }



// export default ForgetPasswordA
// export { NavBarForgetPassword }
