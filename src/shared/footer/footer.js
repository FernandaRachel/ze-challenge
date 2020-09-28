import React from 'react';
import logo from './../../assets/images/ze-logo.png';
import './footer.scss';

const Footer = props => {

    return (
        <div data-testid="main-div" className="footer">
            {/* <img className="logo" src={logo}></img> */}
            <ul className="links">
                <li key="about"><b>Sobre o Zé Delivery</b></li>
                <li key="helpme">Me ajuda, Zé!</li>
                <li key="workwithus">Trabalhe conosco</li>
                <li key="payindelivery">Pagamento na Entrega</li>
                <li key="cities">Cidades atendidas</li>
            </ul>
            <ul className="links">
                <li key="partner"><b>Parcerias</b></li>
                <li key="beapartner">Quero ser parceiro</li>
            </ul>
        </div>
    )
}

export default Footer;