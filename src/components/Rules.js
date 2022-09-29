

import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Rules(props) {
    const { setConnect, connect} = props;
    const handleOnChange = () => {
        setConnect(!connect);
    };
    return (
        <div>
            Rules תקנון האתר

            <Link to="/Login">
                <button >
                    חזור
                </button>
            </Link>

            <Link to="/Login">
                <button onClick={handleOnChange}>
                    אישור
                </button>
            </Link>
        </div>
    )
}
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from './Footer'
// import Header from './Header'

// //css
// import '../css/golf-rtl.css'
// import '../css/golfstyle.css'
// import '../css/reset.css'


// export default function Rules(props) {
//     const { setConnect, connect} = props;
    
//     const handleOnChange = () => {
//         setConnect(!connect);
//     };
//     return (
//         <div>
//             {/* <Header /> */}
//             Rules תקנון האתר

//             <Link to="/Login">
//                 <button >
//                     חזור
//                 </button>
//             </Link>

//             <Link to="/Login">
//                 <button onClick={handleOnChange}>
//                     אישור
//                 </button>
//             </Link>
//             <br></br>
//             <Footer/>
//         </div>
       
//     )
// }