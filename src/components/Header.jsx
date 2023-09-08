import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<header id="header" class="fixed-top d-flex align-items-center ">
				<div class="container d-flex justify-content-between align-items-center">
					<div class="logo">
						<h1 class="text-light"><a href="index.html" rel="noreferrer"><span>PMS</span></a></h1>
					</div>
					<nav id="navbar" class="navbar">
						<ul>
							<li><Link to="/"> Users</Link></li>
							<li><Link to="/add-user">Add User</Link></li>
						</ul>
						<i class="bi bi-list mobile-nav-toggle"></i>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
