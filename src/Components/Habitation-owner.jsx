const Owner = (props) => {
  const { firstName, lastName, profilePicture } = props;

  return (
    <div className="owner">
      <div className="owner__names">
        <span className="owner__first-name">{firstName}</span>
        <span className="owner__last-name">{lastName}</span>
      </div>
      <div className="owner__profile-picture">{profilePicture}</div>
    </div>
  );
};

export default Owner;
