import React from 'react';

function ChallengeBlock() {
    return (
        <div className="card mt-4">
            <div className="card-header font-weight-bold">
                <h4>#challenge</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Days of Code [4] - Diagonal Traverse
                    <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
                <li className="list-group-item">Curious Media lab - DocsBarcelona x Garage Stories                   
                 <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
                <li className="list-group-item">I did the JS13KGames jam: here is what I learned. 😉               
                 <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default ChallengeBlock;