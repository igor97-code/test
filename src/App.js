import React from 'react';
import Layout from './components/hoc/Layout.jsx'
import './scss/main.scss'
import AnswerList from './components/AnswerList.jsx'

function App() {
  return (
    <div className="App">
      <Layout>
        <AnswerList></AnswerList>
      </Layout>
    </div>
  );
}

export default App;
