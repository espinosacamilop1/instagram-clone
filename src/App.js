import './App.css';
import Post from './Components/Post/Post'
import React, {useState} from 'react'

function App() {
  const [posts, setPosts] = useState([]);

  

  return (
    <div className="App">
    
    <div className="app__header">
        <img className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
        />
    </div>


    {/* Header*/}
                
    <Post username='cespinosaa_' 
          caption="Building instagram with react and firebase! My first attempt to firebase" 
          imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" />

    <Post username='_veromd' 
          caption="This app is amazing!" 
          imageUrl="https://ichef.bbci.co.uk/news/976/cpsprodpb/13E15/production/_117592418_b4287813-3cde-4e2d-a1f1-93244cc6429e.jpg"
          />

    <Post username='eminem' 
          caption="Get sum mom spaghetti" 
          imageUrl="https://www.seriouseats.com/thmb/s1bZJfBl1BqfWhwgnEUx_YONlNM=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2021__01__20210118-spaghetti-meatballs-vicky-wasik-25-1-43c661c3cb6d495f8d730e6ac817cebf.jpg"
          />
    {/* Posts*/}
    {/* Posts*/}
    
    
    </div>
  );
}

export default App;
