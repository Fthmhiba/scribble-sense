import React, { useRef, useState, useEffect } from "react";
import "./LetterTracing.css";

const LetterTracing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [showMessage, setShowMessage] = useState("");
  const [showStars, setShowStars] = useState(false);
  const [completedLetters, setCompletedLetters] = useState([]);
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ff00aa";
    ctx.shadowColor = "#ff00aa";
    ctx.shadowBlur = 1;
  }, []);

  // Check if all letters are completed
  useEffect(() => {
    if (completedLetters.length === 3) {
      setAllCompleted(true);
    }
  }, [completedLetters]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setShowStars(false);
    setShowMessage("");
  };

  const submitDrawing = () => {
    // Simple random check for success (simulate correct tracing)
    const success = Math.random() > 0.5;
    if (success) {
      setShowMessage("🎉 Great job!");
      setShowStars(true);
      
      // Add to completed letters if not already there
      if (!completedLetters.includes(selectedLetter)) {
        setCompletedLetters(prev => [...prev, selectedLetter]);
      }
    } else {
      setShowMessage("❌ Try again!");
      setShowStars(false);
    }
  };

  const getCompletionStatus = (letter) => {
    return completedLetters.includes(letter) ? "✅" : "";
  };

  return (
    <div className="tracing-container">
      <div className="tracing-box">
        <h2 className="tracing-title">Trace the Letter</h2>
        <p className="tracing-subtext">Follow the dotted guide and trace carefully!</p>

        <div className="progress-section">
          <p className="progress-text">
            Progress: {completedLetters.length}/3 letters completed
          </p>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(completedLetters.length / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="letter-buttons">
          {["A", "B", "C"].map((letter) => (
            <button
              key={letter}
              className={`${selectedLetter === letter ? "active" : ""} ${
                completedLetters.includes(letter) ? "completed" : ""
              }`}
              onClick={() => {
                setSelectedLetter(letter);
                resetCanvas();
              }}
            >
              {letter} {getCompletionStatus(letter)}
            </button>
          ))}
        </div>

        <div className="canvas-area">
          <div className="letter-overlay dotted">{selectedLetter}</div>
          <canvas
            ref={canvasRef}
            width={300}
            height={200}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
          {showStars && (
            <div className="star-container">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button className="reset-btn" onClick={resetCanvas}>Reset</button>
          <button className="submit-btn" onClick={submitDrawing}>Submit</button>
        </div>

        {showMessage && <p className="result-message">{showMessage}</p>}

        {allCompleted && (
          <div className="completion-section">
            <div className="completion-message">
              <h3>🎊 Congratulations! 🎊</h3>
              <p>You've completed all three letters! Ready for more fun?</p>
            </div>
            <div className="download-section">
              <a 
                href="https://play.google.com/store/apps/details?id=com.scribblesense.app" // Replace with your actual app download link
                className="download-link"
              >
                📱 Download Full App
              </a>
              <p className="download-subtext">
                Get the complete app with all letters, numbers, and full interactive features!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterTracing;