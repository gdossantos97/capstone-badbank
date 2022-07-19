import React from "react";
import Card from "../Components/Card";


function Home(){

    return (
      <div>
        <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="#"/>)}
        />
      </div>
    );  
  }

export default Home;
  