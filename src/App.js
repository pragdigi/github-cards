import React from "react";
import "./App.css";

const CardList = props => (
  <div>
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    ).then(function(response) {
      if (!response.ok) {
        alert('Invalid User, Try another!');
        throw response;
      }
      return response.json();
    });

      this.props.onSubmit(resp);
      this.setState({ userName: "" });

  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event =>
            this.setState({
              userName: event.target.value
            })
          }
          placeholder="GitHub username"
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt={"placeholder"} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    console.log("App", profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
