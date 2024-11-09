import { Routes, Route } from 'react-router-dom';
import { Login } from '../views/Login';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../views/Home';
import { SignUp } from '../views/SignUp'
import NewBlog from '../views/Blog';
import { Profile } from '../views/Profile';
import { BlogView } from '../views/Blog/BlogView';
import { Notfound } from '../views/NotFound';
const Router = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/home" element={<Home />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/blog/new" element={<NewBlog />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/blog/*" element={<BlogView/>} />
               <Route path="/*" element={<Notfound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default Router;