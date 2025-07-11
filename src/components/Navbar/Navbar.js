import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import pageLogo from "./assets/pagelogo.svg";

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

	const handleFAQClick = (e) => {
		e.preventDefault();
		if (location.pathname !== "/") {
			navigate("/", { state: { scrollToInfo: true } });
		}

		const infoSection = document.getElementById("faq");
		if (infoSection) {
			infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<nav className={`navbar${atTop ? " navbar--visible" : " navbar--hidden"}`}>
			<a href="#info" onClick={handleInfoClick} className="navbar-title">
				<img src={pageLogo} alt="Peter & Monica" style={{ height: "7vh" }} />
			</a>
			<ul className="navbar-links">
				{location.pathname === "/" ? (
					<>
						<li>
							<a href="#info" onClick={handleInfoClick}>
								INFO
							</a>
						</li>
						<li>
							<a href="#info" onClick={handleFAQClick}>
								FAQ
							</a>
						</li>
						<li>
							<Link to="/our-story">OUR STORY</Link>
						</li>
					</>
				) : (
					<li>
						<a href="#info" onClick={handleInfoClick}>
							BACK TO HOME
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
