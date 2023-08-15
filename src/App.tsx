import { Routes, Route, Navigate } from 'react-router-dom';
import useGetUserData from './hooks/useGetUserData'

import Home from './pages/home/home';
import Home2 from './pages/home/home2';
import Login from './pages/login/login';
import Daftar from './pages/signup/signup';
import Layanan from './pages/layanan/layanan';
import Webinar from './pages/webminar/webinar';
import Webinar2 from './pages/webminar/webinar2';
import Pelatihan from './pages/pelatihan/pelatihan';
import Konsultasi from './pages/konsultasi/konsultasi';
import Blog from './pages/blog/blog';
import Blog2 from './pages/blog/beritabaru';
import BlogPopulate from './pages/blog/beritapopulate';
import About from './pages/about/about';
import Payment from './pages/payment/payment';
import Profile from './pages/profile/profile';
import Contactus from './pages/contactus/contactus';
import Paket from './pages/paket/paket';
import KonsultasiDetail from "./pages/webminar/KonsultasiDetail";
import KonselingDetail from "./pages/webminar/KonselingDetail";
import PelatihanDetail from "./pages/webminar/PelatihanDetail";
import BlogDetail from "./pages/blog/BlogDetail";



function App() {

  const {
    email,
    setEmail,
    isFetchingData,
    isLoggedIn,
    isLoading
  } = useGetUserData();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home email={email} />} />
        <Route path='/login' Component={() => <Login setEmail={setEmail} />} />
        <Route path='/signup' element={<Daftar />} />
        <Route path='/home' element={<Home email={email} />} />
        <Route path='/home2' element={<Home2 email={email} />} />
        <Route path='/layanan' element={<Layanan email={email} />} />
        <Route path='/webinar' element={<Webinar email={email} />} />
        <Route path='/webinar/:slug' element={<Webinar2 email={email} />} />
        <Route path='/konseling/:slug' element={<KonselingDetail email={email} />} />
        <Route path='/blog/:slug' element={<BlogDetail email={email} />} />
        <Route path='/pelatihan/:slug' element={<PelatihanDetail email={email} />} />
        <Route path='/konsultasi/:slug' element={<KonsultasiDetail email={email} />} />
        <Route path='/pelatihan' element={<Pelatihan email={email} />} />
        <Route path='/konsultasi' element={<Konsultasi email={email} />} />
        <Route path='/blog' element={<Blog email={email} />} />
        <Route path='/beritabaru' element={<Blog2 email={email} />} />
        <Route path='/beritapopulate' element={<BlogPopulate email={email} />} />
        <Route path='/about' element={<About email={email} />} />
        <Route
          path='/payment'
          element={isLoggedIn ? <Payment email={email} /> : <Navigate to="/home" />}
        />
        <Route
          path='/profile'
          element={isLoggedIn ? <Profile email={email} /> : <Navigate to="/home" />}
        />
        <Route path='/contact' element={<Contactus email={email} />} />
        <Route path='/paket' element={<Paket email={email} />} />
      </Routes>
    </>
  );
}

export default App;
