import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';


import { Jumbotron, Container } from 'reactstrap';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import Carroseu from '../components/Carroseu';


  function Vendas({ data }) {
    return (
        <div>
            <Head>
                <title>Vendas - Full StackEletro</title>
                <meta name="description" content="Site de ... sobre ..." />
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color:  #6A5ACD;
                        color: #DCDCDC;
                        margin-bottom: 0rem !important;
                    }`}
                </style>

                <Container>
                    <h2 className="text-center">Full StackEletro</h2>
                </Container>
               

            </Jumbotron>

            <Jumbotron>      
                    <Carroseu/>
            </Jumbotron>

            <Jumbotron>
                <Container>
                    <h3 className="text-center">Nossos clientes também viram </h3>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0A197D;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                
                <Container className ="text-left">
                    <h3>Nossos Produtos</h3>
                </Container>
                   
                <Container className="text-center">
                        <Card>
                            <CardImg top width="100%" src="/imagens/frigobar.jpeg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Frigobar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Figrobar de inox com espaço para 20 garrafas</CardSubtitle>
                            <CardText><strike>R$: 3.500</strike></CardText>
                            <CardText>R$:2.800</CardText>
                            <Button>Carrinho</Button>
                            </CardBody>
                        </Card>

                        <div>
                        <Card>
                            <CardImg top width="100%" src="/imagens/geladeira.jpeg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Geladeira</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Geladeira inox com capacidade de 2.500 Litros</CardSubtitle>
                            <CardText>R$: 3.870 </CardText>
                            <CardText><strike>2.400</strike></CardText>
                            <Button>Carrinho</Button>
                            </CardBody>
                        </Card>
                        </div>
                        <div>
                        <Card>
                            <CardImg top width="100%" src="/imagens/111.jpeg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Maquina de Lavar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> Mquina de Lavar com 20 funções</CardSubtitle>
                            <CardText>R$: 3.870 </CardText>
                            <CardText><strike>2.400</strike></CardText>
                            <Button>Carrinho</Button>
                            </CardBody>
                        </Card>
                        </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}

  export default Vendas