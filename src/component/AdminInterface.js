import "./style.css";



const Inscription = () => {

    const handleClick = () =>{
        document.getElementById("menu").innerHTML = ('this is user section' );
    } 
    const handleClickAgain = (name) =>{
        document.getElementById("menu").innerHTML = ('This is ' + name + ' section' );
    } 

 
    return (
      <div className="container containerAdmin">
         <h3><em>Tableau de bord</em></h3>
                <div className="cat tab2">
                    <p onClick={handleClick} className="boutton">Users</p>
                    <p onClick={handleClickAgain('Catégories')} className="boutton">Catégories</p>
                    <p className="boutton">Products</p>
                    <p className="boutton">Orders</p>
                </div>
                <div className="menu tab3" >
                        <p id="menu"></p>
                </div>
            

     
      </div>
    );
  }

export default Inscription;