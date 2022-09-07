import { Mainlayout } from './layouts';
import { Blog, Brand, Features } from './containers';
import { Cta } from './components';

import './App.css';

// App === Homepage
function App() {
  return (
    <Mainlayout>
      <Blog/>
      <Brand />
      <Features />
      <Cta />
    </Mainlayout>
  );
}

export default App;
