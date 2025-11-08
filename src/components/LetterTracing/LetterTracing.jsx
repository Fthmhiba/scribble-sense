import React, { useRef, useState, useEffect } from "react";
import "./LetterTracing.css";

const LetterTracing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [showMessage, setShowMessage] = useState("");
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ff00aa";
    ctx.shadowColor = "#ff00aa";
    ctx.shadowBlur = 1;
  }, []);

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
    } else {
      setShowMessage("❌ Try again!");
      setShowStars(false);
    }
  };

  return (
    <div className="tracing-container">
      <div className="tracing-box">
        <h2 className="tracing-title">Trace the Letter</h2>
        <p className="tracing-subtext">Follow the dotted guide and trace carefully!</p>

        <div className="letter-buttons">
          {["A", "B", "C"].map((letter) => (
            <button
              key={letter}
              className={selectedLetter === letter ? "active" : ""}
              onClick={() => {
                setSelectedLetter(letter);
                resetCanvas();
              }}
            >
              {letter}
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
      </div>
    </div>
  );
};

export default LetterTracing;
