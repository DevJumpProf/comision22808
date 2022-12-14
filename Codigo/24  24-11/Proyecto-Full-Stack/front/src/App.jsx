

//importar los componentes

import ShowBlogs from "./components/ShowBlogs"
 import {EditBlog} from "./components/EditBlog"
import {CreateBlog} from "./components/CreateBlog" 

import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
<BrowserRouter>
<Routes>
<Route path='/' element={<ShowBlogs/>}    />
<Route path='/create' element={<CreateBlog/>}    />
<Route path='/edit/:id' element={<EditBlog/>}    />

</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
