// import React from 'react';
// import CardComponent from './CardComponent';
// import './App.css';

// const cardsData = [
//   { title: 'Card 1', content: 'This is card 1 content' },
//   { title: 'Card 2', content: 'This is card 2 content' },
//   { title: 'Card 3', content: 'This is card 3 content' },
//   { title: 'Card 4', content: 'This is card 4 content' },
//   { title: 'Card 5', content: 'This is card 5 content' },
//   { title: 'Card 6', content: 'This is card 6 content' },
// ];

// const App = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {cardsData.map((card, index) => (
//           <div key={index} className="col-lg-4 col-md-6 mb-4">
//             <CardComponent title={card.title} content={card.content} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import './App.css';
import CheckboxList from './CheckboxList';

function App() {
  return (
    <div className="App">
      <CheckboxList />
    </div>
  );
}

export default App;
