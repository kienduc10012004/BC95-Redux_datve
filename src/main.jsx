import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookingPage from './page/BookingPage.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
// import booking.css
import './booking.css'
import NotFound from './page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookingPage />} />

          {/* Thêm not found */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
