import { Routes, Route } from 'react-router-dom';
import EthicalValues from './comp/ethicalValues/ethicalValues.tsx';
import Blog from './comp/blog/blog.tsx';
import Core from './comp/core/CorePage.tsx';
import Layout from './comp/layout/layout.tsx';
import Team from './comp/team/team.tsx';
import Solutions from './comp/solutions/Solutions.tsx';
import Brochure from './comp/brochure/brochure.tsx';
import Slider from './testing.tsx';
import FouroFour from './404.tsx';

function App() {
  return (
    <>
        <Routes>
          <Route path="*" element={<FouroFour />} />
          <Route path="/" element={<Layout />} />
          <Route path="/ethicalvalues" element={<EthicalValues />} />
          <Route path="/core" element={<Core />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testing' element={< Slider/>} />
          <Route path='/team' element={< Team/>} />
          <Route path='/solutions/:category/:id' element = {<Solutions/>}/>
          <Route path='/brochure' element = {<Brochure/>}/>
        </Routes>
    </>
  );
}

export default App;
