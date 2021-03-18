import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home({ data }) {
    return (
        <div>
            <Head>
                <title>Home - Full StackEletro</title>
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
            
                    <div>
                        <Jumbotron fluid>
                            <Container fluid>
                            <h1 className="display-3">Nossos Produtos</h1>
                            <p className="lead"> De A á Z</p>
                            </Container>
                        </Jumbotron>
                    </div>

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
                    <div>
                        <Card>
                            <CardImg top width="50%" src="/imagens/frigobar.jpeg" alt="Card image cap" />
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
                            <CardImg top width="50%" src="/imagens/geladeira.jpeg" alt="Card image cap" />
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
                            <CardImg top width="50%" src="/imagens/111.jpeg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Maquina de Lavar</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> Mquina de Lavar com 20 funções</CardSubtitle>
                            <CardText>R$: 3.870 </CardText>
                            <CardText><strike>2.400</strike></CardText>
                            <Button>Carrinho</Button>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}


export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080/home`);
    const data = await response.json();

    return { props: { data } };

    
}


export default Home;