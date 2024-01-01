import React from 'react';

const App: React.FC = () => {
  const divStyle: React.CSSProperties = {
    backgroundColor: 'red',
    padding: '20px',
  };

  return (
    <div style={divStyle}>
      <h1>Hello from React!</h1>
    </div>
  );
};

export default App;
