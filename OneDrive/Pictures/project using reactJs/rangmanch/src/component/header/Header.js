import './Header.css';
import { BiSearchAlt } from "react-icons/bi"


function Header() {
    return (
        <div className="app-header-container">
            <div className="header-container-left">
                <img src="./assest/logo.png" alt="logo" />
                <span className="header-title">RangManch</span>

            </div>

            <div className="Searchbox">
                <input type="text" placeholder="Search..." />
                <i className="Searchicon"> <BiSearchAlt /></i>
            </div>

        </div>
    );
}

export default Header;
