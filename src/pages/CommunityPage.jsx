// CommunityPage.jsx

import React from 'react';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-container">
      <h1>Our Flourishing Online Community</h1>
      <p>
        Join a network of like-minded individuals, unlock new possibilities, and experience growth on your journey to success.
      </p>
      <div className="community-stats">
        <div className="stat">
          <h2 className='pop'>2K+</h2>
          <p>LinkedIn community</p>
        </div>
        <div className="stat">
          <h2 className='pop'>1K+</h2>
          <p>Telegram community</p>
        </div>
        <div className="stat">
          <h2 className='pop'>1k+</h2>
          <p>Youtube community</p>
        </div>
        <div className="stat">
          <h2 className='pop'>10k+</h2>
          <p>Website Traffic per month</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
