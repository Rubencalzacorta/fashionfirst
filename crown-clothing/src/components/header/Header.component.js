import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { auth } from "../../firebase/firebase.utils"

import { ReactComponent as Logo } from "../../assets/Logo.svg"


import "./header.style.scss"

const Header = ({ currentUser }) => {
    return (

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="Logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    SHOP
                </Link>

                {currentUser ?

                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                        </div>
                    :
                    <Link classNane="option" to="/signin">
                        Sign In
                    </Link>


                }



            </div>

        </div>
    )
}

export default Header