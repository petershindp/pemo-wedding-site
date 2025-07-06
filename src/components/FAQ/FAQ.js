import React, { useState } from "react";
import "./FAQ.css";
import coupleImage from "./images/3.jpg"; // Adjust the path as necessary

const faqData = [
	{
		question: "When is the RSVP deadline?",
		answer:
			"Please RSVP by August 1st, so we can have an accurate headcount and prepare all accommodations for you.",
	},
	{
		question: "Where should I park?",
		answer: "There will be plenty of free parking at the venue.",
	},
	{
		question: "Can I bring a plus one?",
		answer:
			"Please check your invite! If your invite does not allow for a +1, we kindly ask that you do not bring any extra guests that did not receive an invite.",
	},
	{
		question: "What should I wear?",
		answer:
			"We kindly ask our guests to dress in formal or semi-formal attire for our celebration.",
	},
	{
		question: "Is the wedding indoors or outdoors?",
		answer:
			"The wedding ceremony and reception are outdoors. We recommend checking the weather and bringing the appropriate outerwear to stay warm and enjoy the night. 🥂",
	},
	{
		question: "Do you have a wedding registry?",
		answer:
			"Your presence is a gift to us ♡ If you feel inclined to bless us as a newlywed couple, we will graciously receive Venmo (@ptrshin) or cash contributions at the check in table.",
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className="faq-section">
			<div className="faq-text">
				<h1 className="faq-title">FAQ</h1>
				<div className="faq-list">
					{faqData.map((item, idx) => (
						<div className="faq-item" key={idx}>
							<button
								className={`faq-question${openIndex === idx ? " open" : ""}`}
								onClick={() => toggleFAQ(idx)}
								aria-expanded={openIndex === idx}
							>
								{item.question}
								<span className="faq-chevron"></span>
							</button>
							<div
								className="faq-answer"
								style={{
									maxHeight: openIndex === idx ? "200px" : "0",
									opacity: openIndex === idx ? 1 : 0,
									transition:
										"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
								}}
							>
								{openIndex === idx && <div>{item.answer}</div>}
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Image Section */}
			<div className="faq-image-container">
				<img src={coupleImage} alt="Couple" className="ceremony-image" />
			</div>
		</div>
	);
};

export default FAQ;
