import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './componentes/HomePage'
import AnimeDetail from './componentes/AnimeDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/anime/:id' element={<AnimeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
