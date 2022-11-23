

//importar los componentes

import ShowBlogs from "./components/ShowBlogs"
/* import EditBlog from "../components/EditBlog"
import CreateBlog from "../components/CreateBlog" */

import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
<BrowserRouter>
<Routes>
<Route path='/' element={<ShowBlogs/>}    />


</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
