import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">John McNeil</a>
		{/*}
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">About</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/articles-list">Portfolio</Link>
					</li>
				</ul>
			</div>
		{*/}
		</div>
	</nav>
);

export default NavBar;