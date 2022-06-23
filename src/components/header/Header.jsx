import C from "./header.module.css";
import logo from '../../publicIMG/headericon.svg'
const Header = () =>{
  return (
    <header className={C.G_header}>
      <div className={C.header__about}>
        {/* <div className={C.header__about_logo}></div> */}
        <img src={logo} alt=""/>
        <nav className={C.header__about_main}>
            <a>About</a>
            <a>Services</a>
            <a>Pricing</a>
            <a>Blog</a>
        </nav>
      <button className={C.about_button}>
        contact
      </button>
       
      </div>
      <h1 className={C.header__main}>Portfolio</h1>
      <div className={C.C_header__text}>

      <p className={C.header__text}>Agency provides a full service range including technical skills, design, business understanding.</p>

      </div>
    </header>
  );
};
export default Header