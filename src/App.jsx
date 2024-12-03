import { BrowserRouter, Routes, Route } from "react-router-dom"
import Post from "./pages/Posts"
import { PostProvider } from "./context/PostContext"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostProvider><Post /></PostProvider>}></Route>
        <Route path="*" element={<p className="text-white">No found page</p>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
