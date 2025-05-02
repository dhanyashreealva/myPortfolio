import { useState } from "react";
import { NavBar} from "react-bootstrap";

export const NavBar={} =>{
    const [activateLink,setActiveLink]=useState('home');
    const [scolled,seScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
            }
            window.addEventListener("scroll",onScroll);
            return()=>window.removeEventListener("scroll",onScroll);
        },[])

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":"Scrolled":""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ?'active navbar-link':'navbar-link'} onclick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ?'active navbar-link':'navbar-link'} onclick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='Projects' ?'active navbar-link':'navbar-link'} onclick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
                <a href="#"><img src={} alt=""></img></a>
                
            </div>
            <button className="vvd" OnClick={() =>console.log('connect')}>
                    <span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}