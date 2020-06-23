import React from 'react';

// css
import 'normalize.css';
import './App.css';
import './../../tailwind.generated.css';
import Header from '../Header/Header';
import Content from '../Content/Content';

const App: React.FC = () => {
  return (
    <>
      <div className="bg-darker min-w-screen min-h-screen text-light">
        <div className="container mx-auto">
          <Header />
          <Content />
        </div>
      </div>
    </>
  );
};

export default App;
