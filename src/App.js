import './styles/App.css';
import 'bulma/css/bulma.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
        <h1 className="title is-2">Job Searcher</h1>
        <p className="subtitle is-5">Enter a Technology and lookup for vacants</p>
        <Search />
    </div>
  );
}

export default App;
