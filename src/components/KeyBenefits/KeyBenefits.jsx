const benefits = [
  {
    title: "Wide Range of Exams",
    desc: "Access a vast library of exams...",
    image: "public/assets/learnmore/icons/wide.png"
  },
  {
    title: "Flexible Scheduling",
    desc: "Take exams at your convenience...",
    image: "public/assets/learnmore/icons/watchleaf.png"
  },
  {
    title: "Instant Certification",
    desc: "Receive certification immediately...",
    image: "public/assets/learnmore/icons/iconsc.png"
  },
  {
    title: "Comprehensive Preparation",
    desc: "Access practice exams and study guides...",
    image: "public/assets/learnmore/icons/penleaf.png"
  },
];

const KeyBenefits = () => (
  <section className="py-12 bg-gray-50 text-center">
    <h2 className="text-2xl font-bold mb-4">What Makes UPCERT Stand Out?</h2>
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {benefits.map((b, i) => (

        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-md w-full sm:w-64 text-left transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <img src={b.image} alt={b.title} className="mb-4 mx-auto h-16" />
          <h3 className="font-semibold text-center text-lg">{b.title}</h3>
          <p className="text-sm text-center text-gray-600 mt-2">{b.desc}</p>
        </div>
      ))}

    </div>
  </section>
);

export default KeyBenefits;
