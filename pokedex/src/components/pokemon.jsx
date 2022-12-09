export default function Pokemon({
    pokemonName = "Loading...",
    pokemonNum = "Loading...",
    pokemonType = "Loading...",
    pokemonWeaknesses = "Loading...",
    imgSrc = "Loading...",
  }) {
    return (
      <div className="pokemonCard">
        <p>{`#${pokemonNum}`}</p>
        <img src={imgSrc} alt="Pokemon" />
        <p>
          Name:
          <br />
          {pokemonName}
        </p>
        <p>
          Type: <br />
          {pokemonType.map((item, index) => {
            return <span key={index}>{item} </span>;
          })}
        </p>{" "}
        <span>
          Weaknesses:
          <br />
          {pokemonWeaknesses.map((item, index) => {
            return <span key={index}>{item} </span>;
          })}
        </span>
      </div>
    );
  }