import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const LszyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const LazyCast = lazy(() => import('./Cast/Cast'));
const LazyReviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LszyHomePage />} />
          <Route path="movies" element={<LazyMoviesPage />} />
          <Route path="movies/:movieId" element={<LazyMovieDetails />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
