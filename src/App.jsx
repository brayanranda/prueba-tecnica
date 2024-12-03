import { BrowserRouter, Routes, Route } from "react-router-dom"
import Post from "./pages/Posts"
import { PostProvider } from "./context/PostContext"
import { UserProvider } from "./context/UserContext"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PostProvider>
            <UserProvider>
              <Post />
            </UserProvider>
          </PostProvider>
        }></Route>
        <Route path="*" element={<p className="text-white">No found page</p>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
