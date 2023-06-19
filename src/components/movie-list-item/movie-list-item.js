import { Component} from 'react'
import './movie-list-item.css'
 class MovieListItem extends Component {
	constructor(props) {
        super(props)
		this.state = {
			favorites:false,
			like:false
		}
    }
	favorites = () =>{
		this.setState((prevstate) =>({
			favorites:!prevstate.favorites
		}))

	}   

	like = () =>{
		this.setState((prevstate) =>({
			like:!prevstate.like
		}))
	}
	render() {
		const {favorites,like} = this.props
		const {name, views,onDeleted,onToggleProp} = this.props
		return (
			<li className={`list-group-item d-flex justify-content-between ${favorites && 'increase'} ${like && 'like'}`}>
				<span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>{name}</span>
				<input type='number' className='list-group-item-input' defaultValue={views} />
				<div className='d-flex justify-content-center align-items-center'>
					<button onClick={onToggleProp} type='button' className='btn-cookie btn-sm ' data-toggle='favorites'>
						<i className='fas fa-cookie'></i>
					</button>
	
					<button type='button' className='btn-trash btn-sm ' onClick={onDeleted}>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
			</li>
		)
	}

}

export default MovieListItem