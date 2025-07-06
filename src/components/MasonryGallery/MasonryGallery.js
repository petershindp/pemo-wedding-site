import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./MasonryGallery.css";

// Dynamically import all images from the images directory
const importAll = (r) => r.keys().map(r);
const images = importAll(
	require.context("./images/compressed", false, /\.(jpe?g|png|JPG|webp)$/)
);

const Carousel = ({ images }) => (
	<div className="carousel-gallery-wrapper">
		<div className="carousel-hint">
			<span className="carousel-arrow">&#8592;</span>
			<span className="carousel-hint-text">Swipe</span>
			<span className="carousel-arrow">&#8594;</span>
		</div>
		<div className="carousel-gallery">
			{images.map((src, idx) => (
				<div className="carousel-img-wrapper" key={src}>
					<img src={src} alt={`Gallery ${idx + 1}`} className="carousel-img" />
				</div>
			))}
		</div>
	</div>
);

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 600);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return isMobile;
};

const MasonryGallery = () => {
	const isMobile = useIsMobile();

	return isMobile ? (
		<Carousel images={images} />
	) : (
		<ResponsiveMasonry
			columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
			gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
		>
			<Masonry>
				{images.map((src, idx) => (
					<img
						key={idx}
						src={src}
						alt={`Gallery ${idx + 1}`}
						style={{ width: "100%", display: "block", borderRadius: "12px" }}
						loading="lazy"
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonryGallery;
