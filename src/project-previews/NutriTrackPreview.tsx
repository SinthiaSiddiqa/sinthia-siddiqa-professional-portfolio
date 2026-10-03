export default function NutriTrackPreview() {
  return (
    <div className="preview preview-nutritrack">
      <div className="preview-header">
        <span>NutriTrack</span>
        <span>AI HEALTH</span>
      </div>

      <div className="health-score">
        <div>
          <small>RISK SCORE</small>
          <strong>Low</strong>
        </div>

        <div className="score-ring">
          82%
        </div>
      </div>

      <div className="preview-bars">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}