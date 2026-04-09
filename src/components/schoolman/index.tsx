import "./index.css";

const AnimatedText = () => {
  const word = "SCHOOLMAN".split("");

  return (
    <div className="animatedText">
      {word.map((letter, index) => (
        <span
          key={index}
          className="animatedLetter"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
