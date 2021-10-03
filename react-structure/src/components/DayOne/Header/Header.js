import './Header.css';
import '../shared.css';
import React from 'react';

const Header = (props) => {
    return (
        <>
            <div className="mainWrapper py-5">
                <h1 className="portName m-5 text-dark">{props.Name}</h1>
                <button className="btn btn-primary p-3 mx-5">Contact Me</button>
            </div>
        </>
    )
}

export default Header;





//================= field ===========================//
// export default class Header extends React.component{
//     render(){
//         return(
//             <>
//                 <h1>Welcome from header</h1>
//             </>
//         )
//     }
// }




// export const Header = React.createClass({
//     render(){
//         return(
//             <>
//                 <h1>Welcome from header</h1>
//             </>
//         )
//     }
// })

