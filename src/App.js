import './App.css';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Responsive Image</h1>
      </header>
      <div className='image-wrapper'>
        <CloudinaryContext
          cloud_name={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        >
          <Image publicId='photo-1648737154547-b0dfd281c51e'>
            <Transformation width='400' crop='scale' />
          </Image>
        </CloudinaryContext>
      </div>
    </div>
  );
}

export default App;