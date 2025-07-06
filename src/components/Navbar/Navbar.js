import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [atTop, setAtTop] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => setAtTop(window.scrollY < 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleInfoClick = (e) => {
		e.preventDefault();
		if (location.pathname !== "/") {
			navigate("/", { state: { scrollToInfo: true } });
		} else {
			const infoSection = document.getElementById("info");
			if (infoSection) {
				infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<nav className={`navbar${atTop ? " navbar--visible" : " navbar--hidden"}`}>
			<div className="navbar-title">Peter & Monica</div>
			<ul className="navbar-links">
				<li>
					<a href="#info" onClick={handleInfoClick}>
						Info
					</a>
				</li>
				<li>
					<Link to="/our-story">Our Story</Link>
				</li>
				<li>
					<a href="#rsvp">RSVP</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
