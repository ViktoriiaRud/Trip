import React from 'react'
import RomaImg from '../../../assets/img/roma.png';
import NewImg from '../../../assets/img/New York City.png';
import ParisImg from '../../../assets/img/Paris.png';
import BarcelonaImg from '../../../assets/img/Barcelona.png';
import FranciscoImg from '../../../assets/img/San Francisco.png';


import { Col, Row } from 'react-bootstrap';

import { NavigationList, Promo, PromoImg, Subheader, StyleNavigationRow, Logo, NavigationLink, ColorFilet, WrapperFilet } from './Navigation.styles';
import { Button } from '../../atoms/button/Button.styles';
import { Title, PromoCountrySubTitle, PromoCitySubTitle, PromoSubTitle } from '../../atoms/fontSize/FontSize.styles'
const Navigation = () => {

    return <>

        <WrapperFilet>
            <Subheader>
                <StyleNavigationRow>
                    <Col xs={6}><Logo>TVL</Logo></Col>
                    <Col xs={4}>
                        <NavigationList className="menu">
                            <li><NavigationLink href="#">About</NavigationLink></li>
                            <li><NavigationLink href="#">Tours</NavigationLink></li>
                            <li><NavigationLink href="#">Blog</NavigationLink></li>
                            <li><NavigationLink href="#">Contact</NavigationLink></li>
                        </NavigationList>
                    </Col>
                    <Col xs={2}><Button>BOOK TRIP</Button></Col>
                </StyleNavigationRow>
            </Subheader>
            <ColorFilet>
                <PromoSubTitle>Book Your Trip</PromoSubTitle>
                <Title>Choose Your Favorite Tour To Explore</Title>

                <Promo>
                    <PromoImg>
                        <img src={RomaImg} alt="roma" />
                        <PromoCountrySubTitle>Roma</PromoCountrySubTitle>
                        <PromoCitySubTitle>Italy</PromoCitySubTitle>
                    </PromoImg>

                    <PromoImg>
                        <img src={NewImg} alt="NewYork" />
                        <PromoCountrySubTitle>New York City</PromoCountrySubTitle>
                        <PromoCitySubTitle>USA</PromoCitySubTitle>
                    </PromoImg>

                    <PromoImg>
                        <img src={ParisImg} alt="paris" />
                        <PromoCountrySubTitle>Paris</PromoCountrySubTitle>
                        <PromoCitySubTitle>France</PromoCitySubTitle>
                    </PromoImg>

                    <PromoImg>
                        <img src={BarcelonaImg} alt="Barcelona" />
                        <PromoCountrySubTitle>Barcelona</PromoCountrySubTitle>
                        <PromoCitySubTitle>Spain</PromoCitySubTitle>
                    </PromoImg>

                    <PromoImg>
                        <img src={FranciscoImg} alt="Francisco" />
                        <PromoCountrySubTitle>San Francisco</PromoCountrySubTitle>
                        <PromoCitySubTitle>USA</PromoCitySubTitle>
                    </PromoImg>
                </Promo>
            </ColorFilet>
        </WrapperFilet>
    </>

}

export default Navigation;