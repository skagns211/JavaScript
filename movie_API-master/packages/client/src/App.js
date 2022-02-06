import React from 'react';
import Header from './Header';
import MovieRankList from './MovieRankList';
import CurrentMovie from './CurrentMovie';

// 기본값으로 주어지는 영화 목록은 다음을 이용하세요.
import mockMovie from './mockMovie'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: mockMovie[0],
      movies: mockMovie
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data, currentMovie: data[0] });
      });
  }

  handleCardClick(movie) {
    this.setState({ currentMovie: movie });
  }
  render() {
    const {movies,currentMovie} =this.state;
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie movie={currentMovie} />
          <MovieRankList handleCardClick={this.handleCardClick.bind(this)} movies={movies} />
        </div>
      </>
    );
  }
}

export default App;