import React from "react";
class Owner extends React.Component {
  render() {
    const { name, profilePicture } = this.props;

    return (
      <div className="owner">
        <div className="owner__names">
          <span className="owner__name">{name}</span>
        </div>
        <div>
          <img
            src={profilePicture}
            alt="owner"
            className="owner__profile-picture"
          />
        </div>
      </div>
    );
  }
}

export default Owner;
