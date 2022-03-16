import React, {useState} from "react";

//COMPONENTS


const Home = () => {
    
     return (
        <div style={{textAlign:"center", marginTop: "50px", marginBottom: "60px"}}>
            
            <div style={{ padding:"20px"}}>
                <h5 className="text-center">
                    Api GatewayOlinda <br/> 
                    <span style={{fontSize:"15px"}}>Gateway de autenticação no Olinda</span>
                </h5>
            </div>
                    
             <p  style={{margin:"1px auto", width:"80%", textAlign:"justify", fontSize:"23px", padding:"30px"}}>
                Apigatewayolinda é uma solução desenvolvida pela arquitetura da CGS/STIC para centralizar autenticação ao OLINDA para consumidores externos ao MEC, Realiza autenticação via keycloak, camuflando Url de retorno do Olinda e por fim valida os ips que terão ou não acessos ao serviços. São 2 barreiras de autenticação, a primeira através da validação do ip de origem e segunda através do keycloak do Olinda            
            </p>

               
            <div style={{alignItems:"center", marginTop: "20px", marginBottom: "20px"}}>
                <a href="*" style={{textDecoration: "underline", fontSize:"20px"}}>Está com dúvidas?</a>
            </div>            
        </div>
    )

}

export default Home;




