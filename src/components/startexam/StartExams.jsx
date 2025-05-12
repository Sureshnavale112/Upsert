
import { Link } from "react-router-dom";
import NewSidebarExam from '../sidenew/NewSidebarExam';

const StartExams = () => {
 
  return (
    <div className="w-full min-h-screen px-4 py-6 bg-gray-50">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

       <NewSidebarExam/>
       

        <div className="md:col-span-2">
        <div className="lg:col-span-8 bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Scrum Master Professional Certificate (SMPC)
          </h2>

          <div className="grid grid-cols-1 gap-4 text-gray-600 mb-4">
            <div className="mb-2">
              <p><strong>Time Limit:</strong> 1 Hour</p>
            </div>
            <div className="mb-2">
              <p><strong>Questions:</strong> 40</p>
            </div>
            <div className="mb-2">
              <p><strong>Language:</strong> English</p>
            </div>
            <div className="mb-2">
              <p><strong>Passing Score:</strong> 32/40 or 80%</p>
            </div>
            <div className="mb-2">
              <p><strong>Duration:</strong> 60 Mins</p>
            </div>
            <div className="mb-2">
              <p><strong>Maximum Attempt:</strong> 1</p>
            </div>
          </div>

          <Link to="/examplatform">
            <button className="w-full max-w-[120px] py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Start Exam
            </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};




export default StartExams;
