
// import player from '../images/player.jpg'

// import '../css/golf-rtl.css'
// import '../css/golfstyle.css'
// import '../css/reset.css'

// export default function Profile() {

//     return (
//         <div>

//             <title>Tee Time</title>
//             {/* <!-- לבקשת ירון --> */}
//             <meta name="Default" content="Uniface 9" />
//             <meta charset="utf-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <link rel="stylesheet" type="text/css" href="../css/udsp.css" />
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
//             {/* <!-- Optional theme --> */}
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" />
//             <link rel="stylesheet" type="text/css" href="../css/reset.css" />
//             {/* <!-- Latest compiled and minified CSS --> */}
//             <link rel="stylesheet" type="text/css" href="../css/golfstyle.css" />
//             <link rel="stylesheet" type="text/css" href="../css/golf-rtl.css" />
//             <link href="https://fonts.googleapis.com/css?family=Assistant" rel="stylesheet" />
//             <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
//             {/* <!-- Latest compiled and minified JavaScript --> */}
//             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
//             <script src="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>

//             <body>
//                 <div className="container">
//                     <div className="form_title">
//                         <span>הזמנת משחק</span>
//                     </div>
//                     {/* <!-- End form_title --> */}
//                     <div className="butcenter">
//                         <div className="form_subtitle">
//                             <span>בחר מגרש</span>
//                         </div>
//                         {/* <!-- End form_subtitle --> */}
//                         <div className="btn-group-justified but  " role="group">
//                             <div className="btn-group" role="group ">
//                                 <button type="button" className="btn  btn-success " id="ufld:HOLES18.DUMMY.MAALE">Left</button>
//                             </div>

//                             <div className="btn-group but" role="group">
//                                 <button type="button" className="btn btn-default" id="ufld:PAR3.DUMMY.MAALE">Middle</button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- End Button group --> */}
//                     <div className="form_subtitle">
//                         <span>בחר תאריך</span>
//                     </div>
//                     {/* <!-- End form_subtitle --> */}
//                     <div className="col-md-12 month-selection nopadding">
//                         <a href=""><div className="col-xs-4 col-sm-3 col-md-3 month-select">ינואר 2018</div></a>
//                         <a href=""> <div className="col-xs-4 col-sm-3 col-md-3 month-select">פברואר 2018</div></a>
//                         <a href=""><div className="col-xs-4 col-sm-3 col-md-3 month-select">מרץ 2018</div></a>
//                         <a href=""><div className="col-xs-4 col-sm-3 col-md-3 month-select month-select-last">אפריל 2018</div></a>


//                     </div>
//                     <div className="course_calendar">
//                         <div className="month-name">ינואר 2018</div>
//                         <div className="row DaysSection">
//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box ">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail thumbnail-current"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">16.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box" disabled="disabled">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnaildisabled"> */}
//                                 <div className="day_box_title disabledtext">
//                                     <div className="date_label disabledtext">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}


//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box" disabled="disabled">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnaildisabled"> */}
//                                 <div className="day_box_title disabledtext">
//                                     <div className="date_label disabledtext">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box" disabled="disabled">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnaildisabled"> */}
//                                 <div className="day_box_title disabledtext">
//                                     <div className="date_label disabledtext">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}


//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}

//                             <div className="col-xs-4 col-sm-3 col-md-2 col-lg-2 text-center day_box" disabled="disabled">
//                                 {/* <a href=javascript:order("17/05/2016") className="thumbnail"> */}
//                                 <div className="day_box_title">
//                                     <div className="date_label">
//                                         15.4.16
//                                     </div>
//                                     <div className="day_name">
//                                         <span>Sun</span>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End day_box_title --> */}
//                                 {/* </a> */}
//                             </div>
//                             {/* <!--End day_box --> */}
//                         </div>
//                     </div>
//                     {/* <!-- End course_calendar --> */}

//                 </div>
//                 {/* <!-- End Container --> */}
//             </body>

//         </div>
//     )
// }
