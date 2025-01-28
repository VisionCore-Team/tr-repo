import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EthicalValues from './comp/ethicalValues/ethicalValues.tsx';
import Blog from './comp/blog/blog.tsx'
import Core from './comp/core/Core.tsx';
import Layout from './comp/layout/layout.tsx';
import Team from './comp/team/team.tsx';
import Solutions from './comp/solutions/Solutions.tsx';
import TRBrochure  from './comp/brochure/TRbrochure.tsx';
import ENGBrochure  from './comp/brochure/ENGbrochure.tsx';
import Slider from './testing.tsx';
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
          <Route path='/team' element={< Team/>} />
          <Route path='/solutions/:category/:id' element = {<Solutions/>}/>
          <Route path='/brochure/tr' element = {<TRBrochure/>}/>
          <Route path='/brochure/eng' element = {<ENGBrochure/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
