import React from "react";
import { Route,Routes, Link } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/Register";
import Services from "../pages/service";
import About from "../pages/about";
import Postpartum from "../pages/postpartum";
import Newborn from "../pages/newborncare";
import Dropdown from "../pages/dropdown";
import Dos from "../pages/does&don'ts";
import Breastfeeding from "../pages/breastfeeding";
import Login from "../pages/Login";
import Vaginaldelivery from "../pages/vaginal";
import CS from "../pages/cs";
import Mealplan from "../pages/mealplan";
import Mother from "../pages/motherandchild";
import Contact from "../pages/contact";
import Booking from "../pages/booking";
import Episiotomy from "../pages/episiotomy";
import Logout from "../pages/logout";


 const Rout =()=> {
  const handleCSClick = () => {
    
  };

  const handleVaginaldeliveryClick = () => {
    
  };
  
    return (
        <div>
           <button onClick={handleCSClick}>
        <Link to="/cs"></Link>
      </button>
      <button onClick={handleVaginaldeliveryClick}>
        <Link to="/vaginal"></Link>
      </button>

      <Routes>
        <Route path="/cs" element={<CS />} />
        <Route path="/vaginal" element={<Vaginaldelivery />} />
      </Routes>
      <Routes>
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
          <Route path="/services/postpartum" element={<Postpartum />} />
          <Route path="/services/mealplan" element={<Mealplan />} />
          <Route path="/services/newborn" element={<Newborn />} />
          <Route path="/services/breastfeeding" element={<Breastfeeding />} />
          <Route path="/services/doesanddon'ts" element={<Dos />} />
          </Route>         
          <Route path="/contact" element={<Contact />} />
          <Route path="/motherandchild" element={<Mother />} />
          <Route path="/breastfeeding" element={<Breastfeeding />} />
          <Route path="/newborn" element={<Newborn />} />
          <Route path="/postpartum" element={<Postpartum />} />
          <Route path="/mealplan" element={<Mealplan />} /> 
          <Route exact path="/booking" element={<Booking/>} /> 
          </Routes> 
          <Routes>
          <Route path="/do'sanddon'ts" element={<Dos />} > 
          </Route>
         </Routes>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        </Routes>
       <Routes>
        <Route path="/episiotomy" element={<Episiotomy/>}/>
       </Routes>
      </div>
    );
  }
  export default Rout;