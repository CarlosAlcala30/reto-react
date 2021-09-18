import React from 'react';

function NewsBlock(props) {
    return (
 <div classname="card mt-4" id="{props.id}">
  <div classname="card-header font-weight-bold">
    <h4>#news</h4>
  </div>
  <ul classname="list-group list-group-flush">
    <li classname="list-group-item">Buckle Up For a Wild Decade in Cloud Computing
      <div>
        <p classname="text-muted l-text">11 comments</p>
      </div>
    </li>
    <li classname="list-group-item">Game Dev Digest -Issue #98 - Multiplayer, starting
      shaders and more!
      <div>
        <button type="button bg-primary" classname="btn-new">New</button>
      </div>
    </li>
    <li classname="list-group-item">Our top tech news &amp; programming sites
      <div>
        <button type="button bg-primary" classname="btn-new">New</button>
      </div>
    </li>
    <li classname="list-group-item">MoonZoon Dev News (4): Actix, Async CLI, Error Handling,
      Wasmpack installer
      <div>
        <button type="button bg-primary" classname="btn-new">New</button>
      </div>
    </li>
    <li classname="list-group-item">Kassandra &amp; the Community
      <div>
        <button type="button bg-primary" classname="btn-new">New</button>
      </div>
    </li>
  </ul>
</div>

    )
}

export default NewsBlock;