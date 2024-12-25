import { useState } from 'react'; 
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
        .then(response => response.json())
        .then(data => setData(data.items))
        .catch( err => console.log(err))
  }

  const  columns = [
    {field : 'full_name'},
    {field : 'html_url'},
    {field : 'owner.login'}
  ]

  return (
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={fetchData}>Fetch</button>
      {/* <table>
        <tbody>
          { data.map(repo => 
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td><a href={repo.html_url}>{repo.html_url}</a></td>
              </tr>)}
        </tbody>
      </table> */}
      <div className="ag-theme-material" style={{height:500, width: '90%'}}>
        <AgGridReact 
              rowData={data}
              columnDefs={columns} 
        />
      </div>
    </div>
  );
}

export default App;
