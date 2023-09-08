import React from 'react'
import defaultPic from '../assets/a.png'
import { Link } from 'react-router-dom';

const ucWord = (str) => {
	let arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	let str2 = arr.join(" ");
	return str2
}
const UserCard = ({ item }) => {

	return (
		<div class="col-lg-4 col-md-6 d-flex align-items-stretch">

			<div class="member">
				<div class="member-img">
					<Link to={`user-details/${item.id}`}>
						<img src={item.profilePic || defaultPic} height="400px" width="420px" alt="" />
					</Link>
					<div class="social">
						<a href={item.twitter} rel="noreferrer"target='_blank'><i class="bi bi-twitter"></i></a>
						<a href={item.facebook} rel="noreferrer" target='_blank'><i class="bi bi-facebook"></i></a>
						<a href={item.instagram} rel="noreferrer" target='_blank'><i class="bi bi-instagram"></i></a>
						<a href={item.linkedIn} rel="noreferrer" target='_blank'><i class="bi bi-linkedin"></i></a>
					</div>
				</div>
				<div class="member-info">
					<h4>{ucWord(item.name)}</h4>
					<span>{item.designation}</span>
				 <p>{item.description}</p>
				</div>
			</div>

		</div>

	)
}

export default UserCard;
