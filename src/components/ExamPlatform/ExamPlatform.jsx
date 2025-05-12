import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const questions = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  question: `What is three fifth of ${100 + i}?`,
  options: ["3", "5", "20", "60"],
}));

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(Array(30).fill(null));
  const [unansweredError, setUnansweredError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    if (answeredCount === 0) {
      alert("Please attempt at least one question before submitting.");
      return;
    }
    navigate('/submit');
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const selectOption = (idx) => {
    const a = [...answers];
    a[currentQ] = idx;
    setAnswers(a);
    setUnansweredError(false);
  };

  const handlePrevious = () => {
    setUnansweredError(false);
    setCurrentQ((q) => Math.max(0, q - 1));
  };

  const handleNext = () => {
    if (answers[currentQ] === null) {
      setUnansweredError(true);
      return;
    }
    setCurrentQ((q) => Math.min(29, q + 1));
  };

  const handleJump = (idx) => {
    if (answers[currentQ] === null) {
      setUnansweredError(true);
      return;
    }
    setUnansweredError(false);
    setCurrentQ(idx);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-4 gap-4">

      <div className="flex-1 bg-white shadow p-20 rounded">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          Scrum Master Professional Certificate (SMPC)
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <span>{formatTime(timeLeft)}</span>
          </div>
          <div>Attempted: {answers.filter((a) => a !== null).length}/30</div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">
            Question {questions[currentQ].id}
          </h3>
          <p className="text-gray-800 mb-4">
            {questions[currentQ].question}
          </p>
          <div className="space-y-2">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = answers[currentQ] === idx;
              const needsRed = unansweredError && answers[currentQ] === null;
              return (
                <button
                  key={idx}
                  onClick={() => selectOption(idx)}
                  className={`w-full text-left p-3 border rounded transition
                    ${isSelected
                      ? "bg-blue-100 border-blue-500 hover:bg-blue-100"
                      : needsRed
                        ? "bg-red-100 border-red-500 hover:bg-red-100"
                        : "bg-white border-gray-300 hover:bg-blue-50"
                    }
                  `}
                >
                  {String.fromCharCode(65 + idx)}. {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQ === 0}
            className={`px-4 py-2 rounded text-white ${currentQ === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900"
              }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded text-white bg-blue-800 hover:bg-blue-900"
          >
            Next
          </button>
        </div>
      </div>

    
      <div className="w-full md:w-64 bg-white shadow p-4 rounded">
        <div className="grid mt-20 grid-cols-5 gap-2 mb-4">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => handleJump(i)}
              className={`w-10 h-10 rounded border-1 text-black ${currentQ === i
                  ? "bg-blue-300"
                  : answers[i] !== null
                    ? "bg-green-500"
                    : "bg-white-400"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="text-xs mb-4 space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded" /> Attempted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white-400 rounded" /> Unattempted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded" /> skipped
          </div>
        </div>
        <Link to="/submit">
        <button
      onClick={handleSubmit}
      className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-900"
    >
      Submit Test
    </button>
        </Link>

      </div>
    </div>
  );
}
