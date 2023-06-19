import { Component } from "react";
import "./addmovie.css";
import { v4 as uuidv4 } from "uuid";
class Addmovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  AddMovies = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.name,
      views: this.state.views,
      id: uuidv4(),
    });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const {name,views} = this.state
    return (
      <div className="movies_addform">
        <h3>yangi kino qo'shish</h3>
        <form className="d-flex addform" onSubmit={this.addFormHandler}>
          <input
            name="name"
            className="form-control ml-3"
            type="text"
            placeholder="qanday kino qo'shish"
            value={name}
            onChange={this.AddMovies}
          />
          <input
            name="views"
            className="form-control "
            type="number"
            placeholder="nechi marotaba ko'rilgan"
            value={views}
            onChange={this.AddMovies}
          />
          <button type="submit" className="btn btn-success">
            qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default Addmovie;
