import React from 'react'

const TestimonialCard = ({ stars, text, author, location }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">{stars}</div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <strong>{author}</strong>
        <span>{location}</span>
      </div>
    </div>
  )
}

export default TestimonialCard

