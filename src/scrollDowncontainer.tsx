import "./App.css";

const InfiniteVerticalText = () => {
  const items = Array.from({ length: 40 }, () => {
    let str = "";
    for (let i = 0; i < 18; i++) {
      str += Math.random() < 0.5 ? "0" : "1";
    }
    return str;
  });

  const loopItems = [...items, ...items];

  return (
    <div className="scrollDowncontainer">
      <div className="listDown">
        {loopItems.map((text, i) => (
          <div key={i} className="itemDown">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteVerticalText;
