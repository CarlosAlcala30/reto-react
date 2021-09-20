import React from 'react';

function Listings(props) {
    return (
     
            <div className="card mt-4 r-card-list">
                <div className="card-header font-weight-bold a-right">
                    <h4 className="mt-1">Listings</h4>
                    <a href="#" className="post-l">See all</a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React Developer - Full-Time, Remote
                        <div>
                            <p className="text-muted l-text">jobs</p>
                        </div>
                    </li>
                    <li className="list-group-item">Course Launch:Competitive Programming - Crack Your
                        Coding Interview
                        <div>
                            <p className="text-muted l-text">education</p>
                        </div>
                    </li>
                    <li className="list-group-item">DEVniverse Notion Template - The content creater's space
                        <div>
                            <p className="text-muted l-text">products</p>
                        </div>
                    </li>
                    <li className="list-group-item">Backkend Handbook for Ruby on Rails applications
                        <div>
                            <p className="text-muted l-text">products</p>
                        </div>
                    </li>
                    <li className="list-group-item">33 GitHub projects I have bookmarked and you should
                        <div>
                            <p className="text-muted l-text">misc</p>
                        </div>
                    </li>
                    <p className="text-center font-weight-bold mt-2">Create a Listing</p>
                </ul>
            </div>
 
    )
}

export default Listings;