import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EthicalValues from './comp/ethicalValues/ethicalValues.tsx';
import Blog from './comp/blog/blog.tsx'
import Core from './comp/core/Core.tsx';
import Layout from './comp/layout/layout.tsx';
import Manufacturing from './comp/solutions/Manufacturing.tsx';
import Health from './comp/solutions/Health.tsx';
import Agriculture from './comp/solutions/Agriculture.tsx';
import LicensePlate from './comp/solutions/LicensePlate.tsx';
import MarketShelf from './comp/solutions/MarketShelf.tsx';
import TRBrochure  from './comp/brochure/TRbrochure.tsx';
import ENGBrochure  from './comp/brochure/ENGbrochure.tsx';
import Slider from './testing.tsx';
import Port from './comp/solutions/Port.tsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ethicalvalues" element={<EthicalValues />} />
          <Route path="/core" element={<Core />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testing' element={< Slider/>} />
          <Route path='/solutions/byindustry/health' element = {<Health />}/>
          <Route path='/solutions/byindustry/manufacturing' element = {<Manufacturing />}/>
          <Route path='/solutions/byindustry/agriculture' element = {<Agriculture />}/>
          <Route path='/solutions/bysolution/licenseplate' element = {<LicensePlate />}/>
          <Route path='/solutions/bysolution/marketshelf' element = {<MarketShelf />}/>
          <Route path='/solutions/bysolution/portoperations' element = {<Port />}/>
          <Route path='/brochure/tr' element = {<TRBrochure/>}/>
          <Route path='/brochure/eng' element = {<ENGBrochure/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
