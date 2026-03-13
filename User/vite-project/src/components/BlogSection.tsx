const BlogSection = () => {
  return (
    <section className="w-full bg-black grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 py-8">

      <div className="w-full bg-black border border-yellow-400 rounded-lg shadow hover:shadow-xl transition">

        <img
          src="https://cdn.satta-king7.in/images/1716799672883-7pezob2rykow9yq-satta-king.png"
          alt="satta king"
          className="w-full rounded-t-lg"
        />

        <div className="p-5 bg-black text-center">

          <h5 className="mb-4 text-xl font-bold text-yellow-400 uppercase hover:underline">
            Is Satta King Legal ?
          </h5>

          <a
            href="/satta-leak-info/is-satta-king-legal"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-lg hover:bg-yellow-300 transition"
          >
            Read More →
          </a>

        </div>
      </div>

    </section>
  );
};

export default BlogSection;