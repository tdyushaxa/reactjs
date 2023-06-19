import { Component} from 'react';
import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'


class MovieList extends Component {
render(){
  const {data,onDeleted,onToggleProp} = this.props
  return (
    <div className="movie-list">
    {data.map(item => (
        <MovieListItem 
        key={item.id} 
        name={item.name} 
        views={item.views} 
        favorites={item.favorites} 
        like={item.like}  
        onDeleted={()=> onDeleted(item.id)} 
        onToggleProp={(e) =>onToggleProp(item.id,e.currentTarget.getAttribute('data-toggle'))}
     
        />
    ))}  
    </div>
  )
}



}
  

export default MovieList