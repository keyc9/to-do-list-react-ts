import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './pages/store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>,
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/list/:id' element={<ItemDescription todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

