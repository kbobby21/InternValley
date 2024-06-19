import React from "react";
import "../styles/Reviews.css";

// Sample data for reviews
const reviews = [
  {
    userName: "Misha Kashyap",
    rating: 4,
    review:
      "Firstly i would like to say that it is my first internship from InternValley and i am very happy after completing this internship, I learn many things by working on projects and it made me more stronger .Thank you InternValley for this opportunity.",
  },
  {
    userName: "Manish Kumar",
    rating: 5,
    review:
      "It was a nice experience to be a part of InternValley. Through this internship i was able to do exciting projects. The tasks given were unique and interesting to do it. I thank InternValley team for giving me this wonderful opportunity.",
  },
  {
    userName: "Utkarsh",
    rating: 4,
    review:
      "I am a student of Chandigarh University. After searching for 2-3 months i got to know about InternValley. Trust me guyzz. I was not the same person after doing this internship. Got to learnt various things.",
  },
  {
    userName: "Shivani Thakur",
    rating: 5,
    review:
      "I did the internship in Python Development and During this journey I got to know various things like how actually live projects work. One of the best decision of my life.",
  },
  // Add more reviews as needed
];

const Review = ({ userName, rating, review }) => (
  <div className="review">
    <div className="comment">{review}</div>
    <div className="stars">{"★".repeat(rating)}</div>
    <div className="user">{userName}</div>
  </div>
);

const Testimonial = () => {
  return (
    <div className="all-places-packages">
      <h1 className="review-title">Student Feedbacks</h1>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
