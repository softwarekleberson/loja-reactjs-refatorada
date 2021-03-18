import React from 'react';
import {Container, Jumbotron} from 'reactstrap'

const Rodape = () =>{
    return (
        <Jumbotron fluid className="rodape">

            
            <style>
                
                {
                 

                    `.rodape{
                        background-color: #050D3D;
                        color: #fff;
                        padding-top:10px;
                        padding-bottom:10px;
                        margin-bottom: 0rem !important;
                        
                    }`}
                    

            </style>

            <Container className="text-center">

            <div className="main-rodape">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Loja São Paulo</h4>
                                <ul className="list-unstyled">
                                    <li>Bairro de Pinheiros</li>
                                    <li>Rua: Pinheiros</li>
                                    <li>Numero: 1450</li>
                                </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Minas Gerais</h4>
                                <ul className="list-unstyled">
                                    <li>Bairro do Pão de Queijo</li>
                                    <li>Rua: Panpulha</li>
                                    <li>Numero: 145</li>
                                </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Loja São Paulo</h4>
                                <ul className="list-unstyled">
                                    <li>Rio de Janeiro</li>
                                    <li>Rua: Maracanã</li>
                                    <li>Numero: 14</li>
                                </ul>
                        </div>

                    </div>
                </div>
            </div>
                
            </Container>
            
        </Jumbotron>
    )
}

export default Rodape