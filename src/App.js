import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/UI/Layout';
import { HomePage } from './components/Home';
import { ProductPage } from './components/Product/index';
import { CartPage } from './components/Cart';
import { GetApi } from './API/getData';
import { useReducer } from 'react';
import { CartReducer, initialState } from './reducers/ShoppingCart';
import { useEffect } from 'react';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';

const url = 'https://api.noroff.dev/api/v1/online-shop/';

function App() {
  const { data, isLoading, isError } = GetApi(url);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(['state'], JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('state'));

    if (storedData) {
      return dispatch({ type: 'storedCart', payload: storedData });
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout state={state} dispatch={dispatch} />}>
          <Route
            index
            element={
              <HomePage data={data} isLoading={isLoading} isError={isError} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/:id"
            element={
              <ProductPage
                data={data}
                isLoading={isLoading}
                isError={isError}
                dispatch={dispatch}
                state={state}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage state={state} dispatch={dispatch} />}
          />
          <Route
            path="/checkout"
            element={<Checkout state={state} dispatch={dispatch} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
