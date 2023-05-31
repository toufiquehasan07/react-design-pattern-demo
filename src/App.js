import { useState } from 'react';
import './App.css';
import StockList from './components/stock-list/stock-list';
import { TestContext } from './context'; // has two component Provider and consumber
// import Users from './components/presentational-container.js/index.js';
import Users from './components/hooks-pattern.js';

const INITIAL_STATE = [
  {
    "id": 201,
    "name": "Nulla",
    "price": 207,
    "categoryId": 1,
    "rate": 2.44,
    "content": "Culpa sed tenetur incidunt quia veniam sed molliti",
    "review": 78,
    "imageUrl": "https://dummyimage.com/400x350"
  },
  {
    "id": 202,
    "name": "Corporis",
    "price": 271,
    "categoryId": 1,
    "rate": 2.18,
    "content": "Nam incidunt blanditiis odio inventore. Nobis volu",
    "review": 67,
    "imageUrl": "https://dummyimage.com/931x785"
  },
  {
    "id": 203,
    "name": "Minus",
    "price": 295,
    "categoryId": 1,
    "rate": 0.91,
    "content": "Quod reiciendis aspernatur ipsum cum debitis. Quis",
    "review": 116,
    "imageUrl": "https://dummyimage.com/556x985"
  },
  {
    "id": 204,
    "name": "Qui",
    "price": 280,
    "categoryId": 1,
    "rate": 3.11,
    "content": "Occaecati dolore assumenda facilis error quaerat. ",
    "review": 78,
    "imageUrl": "https://dummyimage.com/855x573"
  },
  {
    "id": 209,
    "name": "Similique",
    "price": 262,
    "categoryId": 1,
    "rate": 0.29,
    "content": "Autem blanditiis similique saepe excepturi at erro",
    "review": 44,
    "imageUrl": "http://www.lorempixel.com/577/852"
  },
  {
    "id": 220,
    "name": "Soluta",
    "price": 109,
    "categoryId": 1,
    "rate": 0.28,
    "content": "Quos accusamus distinctio voluptates ducimus neque",
    "review": 34,
    "imageUrl": "https://dummyimage.com/400x350"
  },
  {
    "id": 223,
    "name": "Quos",
    "price": 247,
    "categoryId": 1,
    "rate": 4.74,
    "content": "Error voluptate recusandae reiciendis adipisci nec",
    "review": 188,
    "imageUrl": "https://dummyimage.com/400x350"
  },
  {
    "id": 224,
    "name": "Sunt",
    "price": 297,
    "categoryId": 1,
    "rate": 4.38,
    "content": "Tempora sed explicabo quae recusandae vitae debiti",
    "review": 63,
    "imageUrl": "https://dummyimage.com/400x350"
  },]

function App() {

  const globalState = INITIAL_STATE; // global state
  
  const { Provider } = TestContext; // extract only Provider component from the Test context

  return (
    <Provider value={globalState}> {/* Expose global data using Provider component */}
      <div className="App">
      {/* Only this component has access to the global state: globalState */}
        <StockList />  
        {/* <Users /> */}
      </div>
    </Provider>
  );
}

export default App;
