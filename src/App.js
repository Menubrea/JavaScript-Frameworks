import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/UI/Layout';
import { HomePage } from './components/Home';
import { ProductPage } from './components/Product/index';
import { GetApi } from './API/getData';

const url = 'https://api.noroff.dev/api/v1/online-shop/';

function App() {
  const { data, isLoading, isError } = GetApi(url);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <HomePage data={data} isLoading={isLoading} isError={isError} />
            }
          />
          <Route
            path="/:id"
            element={
              <ProductPage
                data={data}
                isLoading={isLoading}
                isError={isError}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
