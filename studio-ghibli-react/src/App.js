import './App.css';
import './input/Input.js';
import Header from './header/Header.js';
import ImageRender from './image/Image.js';
import Display from './display/DisplayComponent.js';

function App() {
  return (
   <div>
    <Header></Header>
    <ImageRender></ImageRender>
    <Display></Display>
   </div>
   
  );
}

export default App;
