import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes.tsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate as PersisterGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersisterGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersisterGate>
    </Provider>
  </StrictMode>,
) 
