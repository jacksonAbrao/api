import React, {Component} from 'react';
import api from './services/api';
import './style/index.css';

class App extends Component {

  state={
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');


    console.log(response.data)
    this.setState({ filmes: response.data});
  }

  render() {


    const { filmes }= this.state;

    return(
      <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <b>Título: </b>
              {filme.show.name}
            </h2>
            <h6>
              {filme.show.genres}
            </h6>
            <p>
              {filme.show.url}
            </p>
          </li>
        ))}
      </div>
    );
  };
};

export default App;
