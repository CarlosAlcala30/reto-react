import React from 'react';

function MetaBlock() {
    return (
        <div className="card mt-4" id="{props.id}">
            <div className="card-header font-weight-bold">
                <h4>#challenge</h4>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">CodeLand is almost here! 🌈
                    <div>
                        <button type="button bg-primary" className="btn-new">New</button>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default MetaBlock;