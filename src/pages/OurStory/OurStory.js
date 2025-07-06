import Masonry from "react-responsive-masonry";
import "./OurStory.css";
import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

const OurStory = () => {
	return (
		<div>
			<div className="story-hero">
				<div className="story-hero-content">
					<h2 className="story-hero-subtitle">
						Peter fell in love with Monica at first sight. <br />
						Sike! He says he really only "saw her as a friend" *side eye*
					</h2>
				</div>
			</div>
			<div className="story-part-two">
				<div className="story-content">
					<div className="story-content-text">
						They actually met on a Christian dance team called V3, where they
						did not have a single conversation in the first year... Until they
						worked on a video project together. Four actually!
						<br />
						<br />
						To celebrate their hard work, they decided to plan a snowboarding
						trip with some friends to end the year. Not much happened, except
						they both discovered a newfound love for snowboarding... and they
						all got covid (except for Peter LOL).
						<br />
						<br />
						That trip led to many more texts about snowboarding. One thing led
						to another, and they went snowboarding together, ALONE! Monica
						sprained her elbow that day.
						<br />
						<br />
						What more do you need to know? More texts, lunches, V3, video
						projects, snowboarding, hockey games. Before they knew it, they both
						had caught feelings. Aww.
						<br />
						<br /> After one Mammoth snowboarding trip with friends in May of
						2022, they decided to make it official. ♡
					</div>
				</div>
			</div>
			<div className="gallery">
				<MasonryGallery />
			</div>
		</div>
	);
};

export default OurStory;
