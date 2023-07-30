
import './App.css';

import ProductCard from './Components/ProductCard';

function App() {
  return (
    <div className="App" style={{display:"flex" , justifyContent:"space-around"}}>
  
      <ProductCard />
      <ProductCard />
      <ProductCard />

      
    </div>
  );
}

export default App;
