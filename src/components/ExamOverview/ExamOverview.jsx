import { useNavigate } from "react-router-dom";

import NewSidebarExam from "../sidenew/NewSidebarExam";

const ExamOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <NewSidebarExam />
      <div className="ml-64 p-8">
        <h2 className="text-2xl font-bold">Scrum Master Professional Certificate (SMPC)</h2>
        <p className="mt-2">Time Limit: 1 Hour</p>
        <div className="mt-4 space-y-2">
          <p><strong>Format:</strong> Multiple Choice Questions</p>
          <p><strong>Questions:</strong> 40</p>
          <p><strong>Language:</strong> English</p>
          <p><strong>Passing Score:</strong> 32/40 (80%)</p>
          <p><strong>Duration:</strong> 60 Mins</p>
          <p><strong>Max Attempt:</strong> 1</p>
        </div>
        <button
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => navigate("/exam-page")}
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default ExamOverview;
