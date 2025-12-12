function Main({ data, theme }) {
  return (
    <ul
      className={`grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container pb-10`}
    >
      {data?.map(({ title, body, id }) => {
        return (
          <div
            className={`card card-dash shadow-gray-600 shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-gray-700 hover:text-white cursor-pointer ${
              theme === "light"
                ? "bg-white text-black border-0"
                : "bg-transparent"
            }`}
            key={id}
          >
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="text-gray-400">{body}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default Main;
