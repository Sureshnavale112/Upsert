import React from "react";




const articles = [
  {
    title: "What is Cloud Computing? Everything You Need to Know",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rec.png", // ✅ Fixed path
    button: "VIEW",
  },
  {
    title: "What Features are Important in Robotics Process Animation",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rob.png",
    button: "VIEW",
  },
  {
    title: "Real world Sustainability solutions with with Azure loT",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rectan.png",
    button: "VIEW",
  },
  {
    title: "What is Cloud Computing? Everything You Need to Know",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rec.png",
    button: "VIEW",
  },
  {
    title: "What Features are Important in Robotics Process Animation",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rob.png",
    button: "VIEW",
  },
  {
    title: "What is Cloud Computing? Everything You Need to Know",
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rec.png",
    button: "VIEW",
  },
];

const CloudRoboticsArticles = () => {
  return (
    <>
     {/* <div><CertificationResources/></div>  */}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Blogs: Insights and Tips to Help You Succeed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A few years ago, the basic concept of the cloud was defined by
                  reducing it to the idea of 'someone else's computer'.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    {article.button} &nbsp;&gt;&nbsp;&gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
       
      </div>
    </>
  );
};

export default CloudRoboticsArticles;
