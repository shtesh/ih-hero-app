import React from 'react';
import Main from './views/Main';
import { data } from './data';

function App() {
  const { navbar, body, hero, footer } = data;
  return (
      <div>
          <Main navbar={navbar} body={body} footer={footer} hero={hero} />
      </div>
  )
}

export default App;


// Props de Main --> { navbar: data.navbar, hero: data.hero, footer: data.footer, body: data.body }