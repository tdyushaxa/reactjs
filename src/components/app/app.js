import { Component } from "react";
import Addmovie from "../addmovie/addmovie";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import Search from "../search/search";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "osman",
          views: 797,
          favorites: false,
          like: false,
        },

        {
          id: 2,
          name: "omar",
          views: 2002,
          favorites: false,
          like: false,
        },

        {
          id: 3,
          name: "Ertogrul",
          views: 898,
          favorites: false,
          like: false,
        },
      ],
      term: "",
    };
  }
  onDeleted = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };
  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, item],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const NewData = data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { data: NewData };
    });
  };

  searchElement = (arr, term) => {
    if (arr.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  updateTerm = (term) => {
    this.setState({
      term:term
    })
  };
  render() {
    const { data, term } = this.state;
    const visiblitydata = this.searchElement(data, term);
    return (
      <div className="app">
        <div className="content font-monospace">
          <AppInfo />
          <div className="search-panel">
            <Search updateTerm={this.updateTerm} />
            <AppFilter />
          </div>

          <MovieList
            data={visiblitydata}
            onDeleted={this.onDeleted}
            onToggleProp={this.onToggleProp}
          />
          <Addmovie addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
