import React from 'react';

function DiscussBlock() {
    return (
        <div className="card mt-4">
            <div className="card-header font-weight-bold">
                <h4>#discuss</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ALPHA REACT 18 HAS ARRIVED
                    <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
                <li className="list-group-item">Should You Really be Coding in Dark Mode?
                    <div>
                        <p className="text-muted l-text">11 comments</p>
                    </div>
                </li>
                <li className="list-group-item">What was your win this week0?
                    <div>
                        <p className="text-muted l-text">10 comments</p>
                    </div>
                </li>
                <li className="list-group-item">How I got 1000 followers on DEV
                    <div>
                        <p className="text-muted l-text">4 comments</p>
                    </div>
                </li>
                <li className="list-group-item">How do you stay up to date with the latest developments
                    in tech?
                    <div>
                        <p className="text-muted l-text">35 comments</p>
                    </div>
                </li>
            </ul>
        </div>


    )
}

export default DiscussBlock;