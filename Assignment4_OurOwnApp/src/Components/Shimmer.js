import "../Styles/shimmer.css";

const Shimmer = () => {
  return (
    <div id="shimmerMain">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-image" />
          <div className="shimmer-line" />
          <div className="shimmer-line short" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
