import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <>
        <div class="mainWrapper py-4 my-3 bg-dark" className="mainWrapper" style={{backgroundImage:"url('')"}}>
            <h1 class="text-secondary mb-5 mx-4">Ibrahim Ali</h1>
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

