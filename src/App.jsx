import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Onyx TechHub</h1>
        <p>Training Platform to Reach More Audience</p>
      </header>
      
      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to Onyx TechHub</h2>
          <p>Your gateway to comprehensive technical training and professional development.</p>
        </section>
        
        <section className="features-section">
          <h3>What We Offer</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>Technical Training</h4>
              <p>Comprehensive courses designed to enhance your technical skills.</p>
            </div>
            <div className="feature-card">
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div className="feature-card">
              <h4>Flexible Learning</h4>
              <p>Online and offline training options to fit your schedule.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Onyx TechHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
