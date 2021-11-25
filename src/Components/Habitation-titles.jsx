const HabitationTitles = (props) => {
  const { habitationName, location } = props;

  return (
    <div className="information__titles">
      <h1 className="information__name">{habitationName}</h1>
      <h2 className="information__location">{location}</h2>
    </div>
  );
};

export default HabitationTitles;
