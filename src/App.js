
import './App.css';
import flipcart from './images/flipcart.jpg';
import Topoffers from './images/Topoffers.jpg';
import Electronics from './images/Electronics.jpg';
import Mobile from './images/Mobile.jpg';
import Beauty from './images/Beauty.jpg';
import Fashion from './images/Fashion.jpg';
import Tv from './images/Tv.jpg';
import Home from './images/Home & Kitchen.jpg';
import Furniture from './images/Furniture.jpg';
import Flights from './images/Flights.jpg';
import Grocery from './images/Grocery.jpg';
import Picture from './components/Picture';
import Responsive from './components/Responsive';

import './css/bootstrap.css';

function App() {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <img src={flipcart} width='100px' style={{ marginLeft: '20px' }} />
        </div>

        <div className='col-md-6'>
          <i className="fa fa-search" style={{ border: '1px solid black', padding: '5px' }}></i>
          <input type='text' placeholder='Search......' className='search flow-control bar12' style={{ width: '80%' }} />


        </div>
        <div className='col-md-4 bg-white '>
          <i class="fa-regular fa-id-card symbol">Become a Seller</i>
          <i class="fa-solid fa-person symbol">Sai</i>
          <i class="fa-solid fa-cart-shopping symbol">Cart</i>
          <i class="fa-solid fa-ellipsis-vertical symbol"></i>
        </div>

      </div>
      <div className='row'>
        <div className='col-md-1 icons'>
          <img src={Topoffers} width='100px' />
          <h6>Top Offers</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Mobile} width='100px' />
          <h6>Mobiles and Tables</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Electronics} width='100px' />
          <h6>Electronics</h6>
        </div>
        <div className='col-md-1 icons '>
          <img src={Tv} width='100px' />
          <h6>Tv & Appliances</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Fashion} width='100px' />
          <h6>Fashion</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Beauty} width='100px' />
          <h6>Beauty</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Home} width='100px' />
          <h6>Home & Kitchen</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Furniture} width='100px' />
          <h6>Furniture</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Flights} width='100px' />
          <h6>Flights</h6>
        </div>
        <div className='col-md-1 icons'>
          <img src={Grocery} width='100px' />
          <h6>Grocery</h6>
        </div>
        <Picture />
        <Responsive />
      </div>

    </>
  );
}

export default App;
