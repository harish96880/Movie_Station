export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 32,
  messages = [],
  rate,
  setRate,
  tempRate,
  setTempRating,
}) {
  const starContainerStyle = {
    display: "flex",
    gap: "10px",
    color: `${color}`,
    fontSize: `${size / 1.5}px`,
  };

  const handleRate = (rate) => setRate(rate);
  const handleHoverIn = (rate) => setTempRating(rate);
  const handleHoverOut = () => setTempRating(0);
  return (
    <div>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onRate={() => handleRate(i + 1)}
            isFull={tempRate ? tempRate >= i + 1 : rate >= i + 1}
            handleHoverIn={() => handleHoverIn(i + 1)}
            handleHoverOut={() => handleHoverOut()}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

function Star({ onRate, isFull, handleHoverOut, handleHoverIn, color, size }) {
  return (
    <span>
      {isFull ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          className="bi bi-star-fill "
          viewBox="0 0 16 16"
          onClick={onRate}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill={color}
          fill="currentColor"
          className="bi bi-star"
          viewBox="0 0 16 16"
          onClick={onRate}
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      )}
    </span>
  );
}