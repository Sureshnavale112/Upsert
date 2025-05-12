const testimonials = [
  {
    name: "Sarah Jones",
    title: "Medical Student",
    text: "Your trusted partner in secure online assessments. With cutting-edge AI-powered proctoring and unrivaled security measures, we ensure exam integrity for universities, corporations, and online learning platforms.",
    image: "public/assets/learnmore/sj.png",
  },
  {
    name: "Dr. David Lee",
    title: "Dean of Academics, State University",
    text: "Since implementing Proctor Tech, we've seen a significant decrease in cheating concerns and a boost in student confidence. The platform's data analytics have also been invaluable in improving our assessments.",
    image: "public/assets/learnmore/mg.png",
  },
  {
    name: "Maria Garcia",
    title: "Global Tech Company",
    text: "ProctorTech has revolutionized our employee certification process. We can now deliver secure assessments remotely and efficiently, saving us time, and resources, and ensuring compliance",
    image: "public/assets/learnmore/dl.png",
  },
];

const Testimonials = () => (
  <section className="bg-gray-50 py-12 text-center">
    <h2 className="text-2xl font-bold mb-10">
      Success Stories: <span className="text-blue-500">Real Impact, Real Results</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-6 rounded shadow w-full">
          <img
            src={t.image}
            alt={t.name}
            className="w-44 h-44 object-cover rounded-full mx-auto mb-4"
          />
          <p className="text-sm italic text-gray-700">“{t.text}”</p>
          <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
          <p className="text-sm text-gray-500">{t.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
