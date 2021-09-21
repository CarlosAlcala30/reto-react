/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const listingPosts= [
    {title:'React Developer - Full-Time, Remote', category:'jobs', link:'#'}, 
    {title:'Turn what you\'ve learned into experience for jobs!!', category:'collabs', link:'#'}, 
    {title:'Tailwind UI Kit - 1000+ tailwindcss ready-to-drop-in components, 30 templates, built-in support for react, angular, and vue', category:'products', link:'#'}, 
    {title:'Simple Code Execution Monitoring, built for developers', category:'products', link:'#'}, 
    {title:'Bomberland is live 🎉 A competitive sandbox for practising machine learning', category:'products', link:'#'}, 
    {title:'NotionMailer - a tool that allows to write, manage and send newsletters directly from Notion', category:'products', link:'#'}, 
]
function Listings() {
    return (
     
        <div className="card mt-4">	
        <div class="card-header font-weight-bold a-right">
            <h5 className="text-bold mt-2">Listings</h5>
            <a href="#" class="post-l">See all</a>
        </div>
                <ul id="listingsPost" className="list-group list-group-flush">
                    {
                        listingPosts.map(listingPost => (
                            <a href="#" className="list-group-item">{listingPost.title} 
                            <div>
                                <p className="text-muted l-text">{listingPost.category}</p>
                            </div>
                        </a>
                        ))
                    }
                   
                    <p className="text-center font-weight-bold mt-2">Create a Listing</p>
                </ul>
            </div>
 
    )
}

export default Listings;