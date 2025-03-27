import React from 'react';
import ReactDOM from 'react-dom/client';
import img1 from "./assets/images/cat1.jpg"
import img2 from "./assets/images/cat2.jpg"
import img3 from "./assets/images/cat3.jpg"
import img4 from "./assets/images/cat4.jpg"
import img5 from "./assets/images/cat5.jpg"
import img6 from "./assets/images/cat6.jpg"
import img7 from "./assets/images/cat7.jpg"
import img8 from "./assets/images/cat8.jpg"



function Cat(){
  return(
    <div style={{fontFamily:" 'Poppins', sans-serif",backgroundColor:"#DEDEDE",width:"full",height:"100vh",borderRadius:"20px",position:"relative"}}>
      <div style={{textAlign:"center",marginTop:"5px"}}>
        <h1 style={{fontSize:"22px",textDecoration:"underline",Top:"10px",padding:"15px",fontSize:"28px"}}>Pookie's Reactions</h1>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img1} alt ="cat1" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"45px",padding:"5px"}}>Hey Pookie !!</h2>
        </div>

        <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img2} alt ="cat2" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"34px",padding:"5px"}}>Enna da Paakura</h2>
        </div>

          <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img3} alt ="cat3" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"45px",padding:"5px"}}>Salamalikkum!</h2>
        </div>

       <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img4} alt ="cat4" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"45px",padding:"5px"}}>Nanbargaleyy !</h2>
        </div>

      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img5} alt ="cat5" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"20px",padding:"5px"}}>Vanakkam da Mapla</h2>
        </div>

        <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img6} alt ="cat6" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"70px",padding:"5px"}}>Hi ngaaa !!</h2>
        </div>

          <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img7} alt ="cat7" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"80px",padding:"5px"}}>What !!!</h2>
        </div>

       <div style={{backgroundColor:"white",width:"250px",height:"250px",borderRadius:"5px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",margin:"15px",padding:"10px",position:"relative"}}>
           <img src={img8} alt ="cat8" style={{width:"200px",height:"200px",margin:"3px",padding:"5px",position:"absolute",top:"10px",left:"22px"}}></img>
           <h2 style={{ position:"absolute",top:"205px",left:"32px",padding:"5px"}}>Naaney Paavam !!</h2>
        </div>

      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{width:"1400px",marginLeft:"52px",}}>
    
    <Cat></Cat>
  </div>
);

