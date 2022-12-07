import Show from "./components/Show"
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Show/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
