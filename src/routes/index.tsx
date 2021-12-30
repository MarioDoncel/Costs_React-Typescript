import {
    HashRouter, // or 
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
  import {Home, Company,Contact, NewProject,Projects} from '../pages/index';


  export const Router = ()=>{
    return(
      <BrowserRouter> 
        <Header />
        <Container>
          <Routes>
            <Route  path="/" element={< Home />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/newproject" element={<NewProject />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    )
  }

  export default Router
  