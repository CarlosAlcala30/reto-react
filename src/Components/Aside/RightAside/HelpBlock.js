import React from 'react';

function HelpBlock() {
    return (
        <div className="card mt-4">
            <div className="card-header font-weight-bold">
                <h4>#help</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">2021 Best Laptops for Software Development
                    <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
                <li className="list-group-item">How can i create a dynamic menu
                    <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default HelpBlock;