import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardBuyComponent from './Components/CartBuyComponent';
import ContentComponent from './Components/ContentComponent';
import ProductComponent from './Components/ProductCompoennt';
import ProductListComponent from './Components/ProductListComponent';
import { Context } from './Components/ulits/AppContext';
import { dataProduct } from './DATAIMG/DataProduct';
import HomePage from './Page/HomePage';


function App() {
  const {dataAPI , banner} = useContext(Context)
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/deploy-react-js/' element={<HomePage />}>
              <Route index element={<ContentComponent />} />
              <Route path='/deploy-react-js/:allproduct/' element={<ProductListComponent banner={banner} data={dataProduct} />} />
              <Route path='/deploy-react-js/:allproduct/:nameGender' element={<ProductListComponent banner={banner} data={dataAPI} />} />
              <Route path='/deploy-react-js/:allproduct/:nameGender/:product' element={<ProductListComponent banner={banner} data={dataAPI} />} />
              <Route path='/deploy-react-js/:allproduct/:nameGender/:product/:id' element={<ProductComponent />} />
              <Route path='/deploy-react-js/cart' element={<CardBuyComponent />} />
            </Route>
          </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
