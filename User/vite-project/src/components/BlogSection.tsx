const BlogSection = () => {
  return (
    <section className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 py-6">
      <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
        <img
          src="https://cdn.satta-king7.in/images/1716799672883-7pezob2rykow9yq-satta-king.png"
          alt="satta king"
          className="rounded-t-lg"
        />

        <div className="p-5 bg-gray-700">
          <h5 className="mb-2 text-xl font-bold text-white uppercase hover:underline">
            Is Satta King Legal ?
          </h5>

          <a
            href="/satta-leak-info/is-satta-king-legal"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Read More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;