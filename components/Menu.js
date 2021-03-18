import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <style>
                
                {
                    `.menu-custom{
                        background-color: #6A5ACD;
                        color: #DCDCDC;
                }`}

            </style>
            <Navbar className="menu-custom" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Full StackEletro</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/vendas">Top Vendas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contato">Contato</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;