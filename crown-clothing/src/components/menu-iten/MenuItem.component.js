import React from "react"
import "./menuItem.styles.scss"

const MenuItem = ({ title, imageUrl, size }) => (

    <div className={`${size} menu-item`}>

        <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <h1 className="Title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem