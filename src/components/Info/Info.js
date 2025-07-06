import "./Info.css";
import coupleImage from "./images/2.jpg"; // Adjust the path as necessary

const Info = () => {
	return (
		<div className="ceremony-section" id="info">
			{/* Image Section */}
			<div className="ceremony-image-container">
				<img src={coupleImage} alt="Couple" className="ceremony-image" />
			</div>

			{/* Text Section */}
			<div className="ceremony-text">
				<h1 className="ceremony-title">Ceremony</h1>
				<div className="ceremony-time-container">
					<p className="ceremony-time">SEPTEMBER 13, 2025</p>
					<p className="ceremony-time">Doors Open - 4:30 PM</p>
					<p className="ceremony-time">Ceremony - 5:00 PM</p>
				</div>

				<div className="ceremony-address-container">
					<p className="ceremony-details">South Coast Botanical Gardnes</p>
					<p className="ceremony-details">Palos Verdes, CA</p>
					<a
						href="https://maps.app.goo.gl/gDgxAvpGfZwrDEpL7?g_st=ipc"
						className="ceremony-link"
					>
						Map
					</a>
				</div>
			</div>
		</div>
	);
};

export default Info;
