import { useNavigate } from "react-router-dom";
import "./Story.css";

const Story = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/our-story");
	};

	return (
		<div className="story-section">
			<div className="story">
				<h1 className="story-title">See how it all started</h1>
				<button className="story-button" onClick={handleClick}>
					Our Story
				</button>
			</div>
		</div>
	);
};

export default Story;
