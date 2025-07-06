import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import FAQ from "../../components/FAQ/FAQ";
import Story from "../../components/Story/Story";
import RSVP from "../../components/RSVP/RSVP";
import "./Home.css"; // Import the Home.css file for styling

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Info />
			<FAQ />
			<Story />
			<RSVP />
		</div>
	);
};

export default Home;
