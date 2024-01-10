import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const Main = lazy(() => import('routes/main/Main'));
const Unauthorized = lazy(() => import('routes/errors/Unauthorized'));
const Home = lazy(() => import('routes/main/Home'));
const Login = lazy(() => import('routes/login/Login'));
const Register = lazy(() => import('routes/login/Register'));
const Options = lazy(() => import('routes/main/Options'));
const Chat = lazy(() => import('routes/main/Chat'));
const Restaurant = lazy(() => import('routes/main/Restaurant'));
const NotFound = lazy(() => import('routes/errors/NotFound'));

import Spinner from 'components/loading/Spinner';


const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="unauthorized"
        element={
          <Suspense fallback={<Spinner />}>
            <Unauthorized />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        }
      />
      <Route
        element={
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
        }
      >
        <Route
          path="register"
          element={
            <Suspense fallback={<Spinner />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="options"
            element={
              <Suspense fallback={<Spinner />}>
                <Options />
              </Suspense>
            }
          />
        <Route
            path="chat"
            element={
              <Suspense fallback={<Spinner />}>
                <Chat />
              </Suspense>
            }
          />
          <Route
            path="restaurant"
            element={
              <Suspense fallback={<Spinner />}>
                <Restaurant />
              </Suspense>
            }
          />
      </Route>
        </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
