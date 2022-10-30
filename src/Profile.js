import React from "react"
import Socials from "./Socials"



function Profile() {
    return (
        <div className="profile-body">
            <div>
                <img src="/Icon (1).png" alt="" className="profile-body-link"/>
                <img src="/Icon.png" alt="" className="profile-body-link-second"/>
            </div>
            <div>
                <img src="./profile__img.png" alt="profile-pic" className="profile-body-photo"/>
                <p className="profile-body-text">Taiwo Ibrahim</p>
            </div>
            <div className="profile-btn">
                <button className="btn"><a href="https://twitter.com/ibroleeskyy" >Twitter Link</a></button>
                <button className="btn"><a href="https://training.zuri.team/">Zuri Team</a></button>
                <button className="btn"><a href=" http://books.zuri.team ">Zuri Books</a></button>
                <button className="btn"><a href="https://books.zuri.team">Python Books</a></button>
                <button className="btn"><a href="https://background.zuri.team">Background Check for Coders</a></button>
                <button className="btn"><a href="https://books.zuri.team/design-rules">Design Books</a></button>
            </div>
            <Socials />
        </div>
    )
}

export default Profile