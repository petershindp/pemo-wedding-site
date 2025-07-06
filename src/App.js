import logo from "./logo.svg";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import OurStory from "./pages/OurStory/OurStory";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import "./App.css";

// Dynamically import all images from MasonryGallery
function importAll(r) {
	return r.keys().map(r);
}
const masonryImages = importAll(
	require.context(
		"./components/MasonryGallery/images/compressed",
		false,
		/\.(jpe?g|png|JPG|webp)$/
	)
);

const preloadImages = [
	"/images/hero.jpg",
	"/images/snowboard.jpg",
	"/images/walking.jpg",
	...masonryImages,
];

function preloadAssets() {
	return Promise.all(
		preloadImages.map(
			(src) =>
				new Promise((resolve) => {
					const img = new window.Image();
					img.src = typeof src === "string" ? src : src.default || src;
					img.onload = img.onerror = resolve;
				})
		)
	);
}

function AnimatedRoutes() {
	const location = useLocation();
	const nodeRef = useRef(null);
	const [showLoading, setShowLoading] = useState(false);
	const [fadeState, setFadeState] = useState("fade-in");
	const [pendingLocation, setPendingLocation] = useState(null);

	// Listen for navigation events
	useEffect(() => {
		if (fadeState === "fade-in") return;
		if (pendingLocation) {
			setShowLoading(true);
			preloadAssets().then(() => {
				setTimeout(() => {
					setShowLoading(false);
					setFadeState("fade-in");
					window.scrollTo({ top: 0, left: 0, behavior: "instant" });
				}, 700); // match fade duration
			});
		}
	}, [fadeState, pendingLocation]);

	// Listen for route changes
	useEffect(() => {
		if (fadeState === "fade-in") {
			setFadeState("fade-out");
			setPendingLocation(location);
		}
		// eslint-disable-next-line
	}, [location.key]);

	return (
		<TransitionGroup component={null}>
			{showLoading ? (
				<CSSTransition
					key="loading"
					classNames="fade"
					timeout={700}
					nodeRef={nodeRef}
				>
					<div ref={nodeRef} className="route-fade-bg">
						<LoadingScreen />
					</div>
				</CSSTransition>
			) : (
				<CSSTransition
					key={pendingLocation ? pendingLocation.pathname : location.pathname}
					classNames="fade"
					timeout={700}
					nodeRef={nodeRef}
				>
					<div ref={nodeRef} className="route-fade-bg">
						<Routes location={pendingLocation || location}>
							<Route path="/" element={<Home />} />
							<Route path="/our-story" element={<OurStory />} />
						</Routes>
					</div>
				</CSSTransition>
			)}
		</TransitionGroup>
	);
}

function App() {
	return (
		<Router basename="/pemo-wedding-site">
			<Navbar />
			<AnimatedRoutes />
		</Router>
	);
}

export default App;
