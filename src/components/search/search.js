import { Component } from "react";
import "./search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  GetInputValue = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.updateTerm(term.toLowerCase())
  };
  render() {
    return (
      <div>
        <input
          className="form-control search-input"
          type="text"
          onChange={this.GetInputValue}
        />
      </div>
    );
  }
}

export default Search;
