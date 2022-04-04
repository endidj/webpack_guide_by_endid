import React from 'react';
import Menu from './components/Menu';
import data from './data/recipes.json'

const App = () => (
  <div>
    <Menu recipes={data} ></Menu>
  </div>
);
export default App;