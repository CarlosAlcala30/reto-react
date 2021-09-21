import React from 'react';

function NewsBlock() {
    return (
<div className="card mt-4">	
				<div className="card-header font-weight-bold">
					<h5 className="text-bold mt-2">#news</h5>
				</div>
				<ul id="newsPost" class="list-group list-group-flush">
					<a href="#" className="list-group-item">Axie Infinity Clone Script | Create your NFT Gaming Platform Like Axie Infinity | Developcoins
						<div>
							<p className="text-muted l-text">1 comment</p>
						</div>
					</a>
					<a className="list-group-item">This week in Flutter #21
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</a>
					<a className="list-group-item">Announcing x-ray
						<div>
							<p className="text-muted l-text">2 comments</p>
						</div>
					</a>
					<a className="list-group-item">Game Dev Digest — Issue #110 - Give your game a makeover
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</a>
					<a className="list-group-item ">ForgeRock IPO! <span className="emoji1"></span>
						<div>
							<button type="button bg-primary" class="btn-new">New</button>
						</div>
					</a>
				</ul>
			</div>


    )
}

export default NewsBlock;