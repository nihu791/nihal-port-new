import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-Assisted Game Development</h4>
                <h5>Project Experience</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed core gameplay mechanics for web and mobile. Used Gemini, Claude, and Copilot for rapid prototyping.
              Collaborated with teams and researched AI-driven approaches to solve technical challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Treasurer</h4>
                <h5>Kaarwaa.N Society</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Managed and monitored society funds, ensuring transparent budgeting and accurate records.
              Streamlined expense tracking and reporting processes, improving financial clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
