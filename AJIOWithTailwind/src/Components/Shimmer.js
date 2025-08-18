const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-200/50 w-[20%] min-w-[150px] h-[40vh] m-[20px] rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
