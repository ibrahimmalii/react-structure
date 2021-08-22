import './Header.css';
import '../shared.css';
import React from 'react';

const Header = (props) => {
    return (
        <>
            <div class="mainWrapper py-4 my-3 bg-dark" className="mainWrapper">
                <h1 class="text-secondary pt-4 mb-5 mx-4">{props.Name}</h1>
                <button class="btn btn-danger mx-4">Contact Me</button>
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

