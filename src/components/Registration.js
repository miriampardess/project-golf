import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from './Input' // קומפוננטת אינפוט דינאמית במקום לחזור על הקוד
import { ApiRegistrationEmail } from '../RequestsApi'
import Footer from './Footer'
import Header from './Header'

//images
import engFlag from '../images/eng-flag.png'
import profileLogo from '../images/profile-logo.png'
import one1logo from '../images/one1-logo.png'
import teeTimeLogo from '../images/tee-time-logo.png'

//css
import "../css/golf-rtl.css";
import "../css/golfstyle.css";
import "../css/reset.css";
import "reactjs-popup/dist/index.css";

export default function Registration(props) {
    const { envDefaults } = props;

    const [ErrorMassages, setErrorMassages] = useState();
    const navigate = useNavigate();

    // שדות מידע לסטייט כדי לעשות בדיקות וכדי לקצר קוד
    const [requiredFieldsName, setRequiredFieldsName] = useState([
        { name: "First name", nameHeb: "שם פרטי", required: true, type: "text", value: "", },
        { name: "Last Name", nameHeb: "שם משפחה", required: true, type: "text", value: "", },
        { name: "Email", nameHeb: "כתובת מייל", required: true, type: "email", value: "", },
        { name: "Gender", nameHeb: "ז/נ", required: true, type: "radio", value: "", },
        { name: "Birthdate", nameHeb: "תאריך לידה", required: true, type: "date", value: "", },
    ]);
    const [requiredFieldsCity, setRequiredFieldsCity] = useState([
        { name: "City", nameHeb: "עיר", required: true, type: "text", value: "" },
        { name: "Street", nameHeb: "רחוב", required: true, type: "text", value: "", },
        { name: "House No", nameHeb: "מספר בית", required: true, type: "number", value: "", },
        { name: "Zip code", nameHeb: "מיקוד", required: true, type: "text", value: "", },
    ]);
    const [requiredFieldsPhon, setRequiredFieldsPhon] = useState([
        { name: "Phone No", nameHeb: "טלפון", required: true, type: "tel", value: "", },
        { name: "Add.Phone No", nameHeb: "טלפון נוסף", required: true, type: "tel", value: "", },
        { name: "Company Name", nameHeb: "שם חברה", required: true, type: "text", value: "", },
        { name: "Company Phone No", nameHeb: "טלפון חברה", required: true, value: "", },
    ]);

    // copying the old datas array
    let newRequiredFieldsName = [...requiredFieldsName];
    let newRequiredFieldsCity = [...requiredFieldsCity];
    let newRequiredFieldsPhone = [...requiredFieldsPhon];


    const updateArrRequiredFields = () => {

        setRequiredFieldsName(newRequiredFieldsName);
        setRequiredFieldsCity(newRequiredFieldsCity);
        setRequiredFieldsPhon(newRequiredFieldsPhone);
        //הסטייט עצמו לא מתעדכן מיד כי זה אסינכרוני ומתוזמן להתעדכן בסוף
        // לכן את כל הבדיקות  על המערכים  למעלה.

        let fieldsAreValid = true;
        //מערך שיכיל את כל השדות מכל המערכים יחד ועליו נעבור בפור
        const allFields = [...newRequiredFieldsName, ...newRequiredFieldsCity, ...newRequiredFieldsPhone]

        for (const index in allFields) {
            console.log(allFields[index])
            if (allFields[index] === undefined || (allFields[index].required && allFields[index].value === "")) {
                fieldsAreValid = false;
            }
            //hasError בדיקת תקינות לשדות עצמם נבדקת באייצטיאמל למטה איפה שכתוב 
            //hasError שאם זה לא תקין יתווסף קלאס של 
        }
        if (!fieldsAreValid) {
            setErrorMassages('לא מולאו כל שדות החובה');
        }
        else {
            let emali_site = requiredFieldsName[2].value;
            SendingEmail(emali_site);

        }
        async function SendingEmail(emali_site) {
            let url = `http://${envDefaults.basicRoute}/ApiRegistrationEmail`

            await ApiRegistrationEmail(url, emali_site)
                .then((response) => {
                    if (response === true) {
                        setErrorMassages('הטופס נשלח בהצלחה. אחד מנציגנו ייצור איתך קשר בהקדם')
                        setTimeout(() => {
                            navigate('/Login')
                        }, 3000);
                    }

                })
                .catch((err) => {
                    setErrorMassages("תקלה, אנא שלח שוב")
                }
                )
        }
    };
    return (
        <div>
            Registration
            <title>Tee Time</title>
            <Header />
            {/* <body> */}
            <nav
                className="navbar navbar-fixed-top navbar-inverse navbar-custom"
                id="MainMenu"
            >
                <div className="container">
                    <div className="navbar-header">
                        <a href="" className="navbar-brand">
                            <img src={teeTimeLogo} alt="" />
                        </a>
                    </div>
                    {/* <!-- Navbar Header--> */}
                </div>
                {/* <!-- End Container--> */}
            </nav>
            <div className="container login">
                <div className="row flag_box">
                    <a href="/#">
                        <span className="flag_icon"><img id="ufld:FLAG.DUMMY.MAALE" src={engFlag} width="21" alt="English" /></span>
                        <span className="select_lang" id="ufld:LANG.DUMMY.MAALE">English&nbsp;</span>
                    </a>
                </div>

                <div className="clearboth"></div>
                <div className="container registration">
                    <div className="form_title">
                        <span>טופס פתיחת לקוח חדש (הרשמה)</span>
                    </div>

                    <div className="row">
                        <div className="col-md-1 col-lg-2"> </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
                            <form className="form-horizontal">
                                {requiredFieldsName.map((index, key) => (
                                    <div>
                                        <Input
                                            index={index}
                                            hasError={index.required && index.value === ''}
                                            array={newRequiredFieldsName}
                                            arrkey={key}
                                        />
                                    </div>
                                ))}
                            </form>
                            <div className="form-address">
                                <span id="ufld:ADDRESSHDR.DUMMY.MAALE">כתובת</span>
                            </div>

                            <form className="form-horizontal">
                                {requiredFieldsCity.map((index, key) => (
                                    <div>
                                        {/* קומפוננטת אינפוט דינאמית במקום לחזור על הקוד */}
                                        <Input
                                            index={index}
                                            hasError={index.required && index.value === ''}
                                            array={newRequiredFieldsCity}
                                            arrkey={key}
                                        />
                                    </div>
                                ))}
                            </form>

                            <div className="form-address">
                                <span id="ufld:ADDRESSHDR.DUMMY.MAALE">טלפון</span>
                            </div>
                            <form className="form-horizontal">
                                {requiredFieldsPhon.map((index, key) => (
                                    <div>
                                        {/* קומפוננטת אינפוט דינאמית במקום לחזור על הקוד */}
                                        <Input
                                            index={index}
                                            hasError={index.required && index.value === ''}
                                            array={newRequiredFieldsPhone}
                                            arrkey={key}
                                        />
                                    </div>
                                ))}
                            </form>
                            <button
                                className="btn btn-sm btn-info pull-opp-dir"
                                type="button"
                                id="ufld:SUBMIT.DUMMY.MAALE"
                                onClick={updateArrRequiredFields}
                            >
                                צור פניה
                            </button>
                            {ErrorMassages && <div className="has-error">{ErrorMassages}</div>}
                            {/* <!--div  id="SUBMIT" onClick="GetContent(this.id)" --> */}
                            {/* <div id="SUBMIT" onClick="GetContent(this.id)" >

                            <span className="btn btn-sm btn-info pull-opp-dir" id="ufld:SUBMIT.DUMMY.MAALE" onClick={validationRequiredFields}>שלח</span>
                        </div> */}
                        </div>
                        {/* <!-- End Container--> */}
                        <div className="col-md-1 col-lg-2"> </div>
                    </div>
                </div>
                {/* <!-- Latest compiled and minified JavaScript --> */}
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

                {/* </body > */}
                {/* </html> */}
            </div>
            <Footer />
        </div>
    );
}



