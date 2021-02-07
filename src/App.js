import CollorPicker from "./components/CollorPicker";
import options from "./components/CollorPicker/collor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CollorPicker options={options} />
    </div>
  );
}

export default App;
