import "./style.css";
import NavBarTwo from './NavBarTwo';

const Inscription = () => {

    const Users = () =>{
        document.getElementById("menu").innerHTML = ('<p>this is user section</p>' );
    } 
    const categories = () =>{
        document.getElementById("menu").innerHTML = ('This is categories section' );
    } 
    const Products = () =>{
      document.getElementById("menu").innerHTML = ('This is Products section' );
  }
  const Orders = () =>{
    document.getElementById("menu").innerHTML = ('This is Orders section' );
}

 
    return (
      <div>
      <NavBarTwo />
      <div className="container containerAdmin">

         <h3><em>Tableau de bord</em></h3>
                <div className="cat tab2">
                    <p onClick={Users} className="boutton">Users</p>
                    <p onClick={categories} className="boutton">Catégories</p>
                    <p  onClick={Products}  className="boutton">Products</p>
                    <p onClick={Orders}  className="boutton">Orders</p>
                </div>
                <div className="menu tab3" >
                        <p id="menu"></p>
                </div>
     </div>
      </div>
    );
  }

export default Inscription;