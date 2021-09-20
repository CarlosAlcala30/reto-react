
import React from 'react';
import imageSponsor from "../../../Assets/Images/photos/changelog.png";

function SponsorsBlock() {
    return (
       
            <div class="card div-card mt-2">
                <img className="img-aside-right" src="{imageSponsor}" alt="changelog" />
                <div className="card-body">
                <p>New Forem Changelog Entries!</p>
                <p className="c-text-color">-&gt; "Lock Discussions on Posts"</p>
                <p className="c-text-color">-&gt; "Accessibility Enhancements"</p>
                </div>
            </div>
     )
}

export default SponsorsBlock;