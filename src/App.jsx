import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About"; 
import Contact from "./pages/contact/Contact"; 

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ForgetPassword from "./pages/auth/ForgetPassword";

import Certification from "./pages/certifications/Certification";

import Event from "./pages/events/Event";
import Whyget from "./pages/whyget/Whyget";

import Resources from "./pages/resources/Resources";
import Blogs from "./pages/blog/Blogs";
import Blogaa from "./pages/bloga/Blogaa";
import Ebooks from "./pages/ebook/Ebooks";
import Ebooka from "./pages/ebooka/Ebooka";



import MyCart from "./components/Cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import PaymentProcessing from "./pages/PaymentProcessing/PaymentProcessing";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure/PaymentFailure";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";



import StartExam from "./pages/StartExam/StartExam";
import Productpage from "./pages/productpage/Productpage";
import SlotBook from "./pages/SlotBook/SlotBook";

import ComplationScreenPage from "./pages/ComplationScreenPage/ComplationScreenPage";
import ExamPlatformPage from "./pages/ExamPlatformpage/ExamPlatformPage";
import DownloadPage from "./pages/download/DownloadPage";


import EventRegistrations from "./pages/register/EventRegistrations";
import Info from "./pages/Info/Info";
import Certificate from "./pages/Certificate/Certificate";
import Purchases from "./pages/purchases/Purchases";
import LayoutDash from "./pages/layoutDash/LayoutDash";
import Profiles from "./pages/profiles/Profiles";
import CertificateResult from "./pages/result/CertificateResult";
import Submited from "./pages/submit/Submited";
import LearnMore from "./pages/learnmore/LearnMore";



function Layout() {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/signup' ,'/forget','/checkout','/processing','/success',
    '/failure','/order-confirmation','/examplatform','/submit','/download','/exam','/result','certificate',
  'purchases','profile','slot',].includes(location.pathname);
  
  return (  
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
         <Route path="/register" element={<EventRegistrations/>} />
         <Route path="/layoutdash" element={<LayoutDash/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/blog" element={<Blogs />} />
        <Route path="/resources/blogs" element={<Blogaa />} />
        <Route path="/resources/ebook" element={<Ebooks />} />
        <Route path="/resources/ebooks" element={<Ebooka />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/whyget" element={<Whyget/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<MyCart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<ForgetPassword/>} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/processing" element={<PaymentProcessing/>} />
        <Route path="/success" element={<PaymentSuccess/>} />
        <Route path="/failure" element={<PaymentFailure/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        <Route path="/product/:id" element={<Productpage/>} />

        <Route path="/exam" element={<StartExam/>} />
        <Route path="/download" element={<DownloadPage/>} />
        <Route path="/slot"     element={<SlotBook/>} />
        <Route path="/submit"    element={<Submited/>}/>
        <Route path="/complation-screen" element={<ComplationScreenPage/>} />
        <Route path="/examplatform"  element={<ExamPlatformPage/>} />
         <Route path="/learnmore" element={<LearnMore/>} /> 
        <Route path="/Info" element={<Info/>} />  
        <Route path="/profile" element={<Profiles/>} />
        <Route path="/Certificate" element={<Certificate/>} />
        <Route path="/purchases" element={<Purchases/>} />
        <Route path="/result" element={<CertificateResult/>} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;