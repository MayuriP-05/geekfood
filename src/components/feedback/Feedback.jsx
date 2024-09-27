import React from 'react';
import './Feedback.css'; // Assuming your CSS file is named Feedback.css

const Feedback = () => {
  return (
    <div className="feedback-container">
      <section>
        <div className="feedback-section">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="feedback-item">
              <blockquote className="feedback-quote">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Maxime minima dicta amet, molestiae aliquam incidunt suscipit 
                  recusandae labore ratione doloremque, architecto et illo minus 
                  quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel 
                  ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem 
                  nam, eveniet enim ad inventore laudantium est illum voluptatem 
                  quis.
                </p>
              </blockquote>
              <div className="feedback-author">
                <img
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                />
                <div className="feedback-author-info">
                  <p className="feedback-author-name">Gladis Lennon</p>
                  <p className="feedback-author-role">Head of SEO</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feedback;
