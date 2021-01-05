// eslint version:6
// import logo from './logo.svg';
// import './App.css';
import data from "./emojipedia";
const array = [];

data.forEach(function (arr) {
  array.push(arr.meaning.substring(0, 100));
});

array.forEach(function (arr) {
  console.log(arr);
});

function createEntry(data) {
  return <p>{data}</p>;
};

function App() {
  return (
    <div>
      <h1>Hello Zainab Asif</h1>
      <div>{array.map(createEntry)}</div>
    </div>
  );
}

export default App;
