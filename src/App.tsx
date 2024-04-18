import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/Navbar';
import { Blog } from './components/Pages/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePages} from './components/Pages/HomePages';
import { BlogPost } from './components/Pages/BlogPost';
import PageBlog from './components/Pages/BlogPost/PageBlog';
import myPost from './components/Pages/BlogPost/blogPostDB';
import { Footer } from './components/Footer';

//import { Products } from './components/Pages/Products';
//import Products from './components/Pages/Products';

function App() {

  return (

    <div className="App">

      <Router>
        <Navbar />
      </Router>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/blogpost' element={<BlogPost />} />
           <Route path='/blogpost/:postId' element={<PageBlog posts={myPost} />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Router>
        <div>
        </div>
      </Router>
      <Footer />
    </div >
  );
}
export default App;
