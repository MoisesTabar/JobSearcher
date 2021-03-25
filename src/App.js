import './styles/App.css';
import 'bulma/css/bulma.css';
import Search from './components/Search';
import Jobs from './components/Jobs';
import Spinner from './components/Spinner';

import { useState } from 'react';
import Error from './components/Error';

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([{}]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
        <h1 className="title is-2">Job Searcher</h1>
        <p className="subtitle is-5">Enter a Technology and lookup for vacants</p>
        <Search
          input={input}
          setInput={setInput}
          setResults={setResults} 
          setLoading={setLoading}
        />
        {
        loading ? <Spinner /> : (
            results === [] ? <Error>Please enter a search term</Error> : 
            <Jobs 
              company={results[0].company} 
              title={results[0].title}
              type={results[0].type}
              url={results[0].url}
            />
          )
        } 
    </div>
  );
}

export default App;
