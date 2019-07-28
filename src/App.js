import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

const App = ({title}) => (
  <div className="header">{title}</div>
);

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);

export default App;
