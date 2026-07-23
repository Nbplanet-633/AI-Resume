import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">
      <section className="content">
        <header className="hero">
          <div className="hero-text">
            <strong>Create Your Custom</strong>
            <h1>Interview Plan</h1>
          </div>
          <p>
            Let our AI analyze the job requirements and your unique profile to
            build a winning strategy.
          </p>
        </header>

        <div className="interview-grid">
          <article className="card job-card">
            <div className="card-header">
              <span className="card-title">Target Job Description</span>
              <span className="badge">Required</span>
            </div>
            <textarea
              id="jobDescription"
              name="jobDescription"
              placeholder="Paste the full job description here..."
            />
            <div className="card-footer">
              <span className="hint">
                e.g. "Senior Frontend Engineer at Google requires proficiency in
                React, TypeScript, and large-scale system design..."
              </span>
              <span className="char-count">0 / 5000 chars</span>
            </div>
          </article>

          <article className="card profile-card">
            <div className="card-header">
              <span className="card-title">Your Profile</span>
            </div>

            <label className="upload-panel" htmlFor="resume">
              <div className="upload-icon">+</div>
              <div>
                <p>Click to upload or drag & drop</p>
                <small>PDF or DOCX (Max 5MB)</small>
              </div>
            </label>
            <input
              hidden
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.docx"
            />

            <div className="input-group">
              <label htmlFor="selfDescription">Quick Self-Description</label>
              <textarea
                id="selfDescription"
                name="selfDescription"
                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
              />
            </div>

            <div className="info-box">
              Either a Resume or a Self Description is required to generate a
              personalized plan.
            </div>
          </article>
        </div>

        <footer className="action-row">
          <button className="button primary-button">
            Generate My Interview Strategy
          </button>
          <span className="small-note">
            AI-Powered Strategy Generation • Approx 30s
          </span>
        </footer>
      </section>
    </main>
  );
};

export default Home;
