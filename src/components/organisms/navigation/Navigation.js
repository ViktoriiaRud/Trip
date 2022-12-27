import React from 'react'

import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Col, Row } from 'react-bootstrap';

import { NavigationList, Promo, PromoImg, Subheader, StyleNavigationRow, Logo, NavigationLink, ColorFilet, WrapperFilet } from './Navigation.styles';
import { Button } from '../../atoms/button/Button.styles';
import { Title, PromoCountrySubTitle, PromoCitySubTitle, PromoSubTitle } from '../../atoms/fontSize/FontSize.styles'

import navigationData from './navigationData';

const Navigation = () => {

    return <>
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs">
            <WrapperFilet>
                <Subheader>
                    <StyleNavigationRow>
                        <Col xs={6}><Logo>{navigationData.logo}</Logo></Col>
                        <Col xs={4}>
                            <NavigationList>
                                <li><NavigationLink href="#about">{navigationData.about}</NavigationLink></li>
                                <li><NavigationLink href="#tours">{navigationData.tours}</NavigationLink></li>
                                <li><NavigationLink href="#blog">{navigationData.blog}</NavigationLink></li>
                                <li><NavigationLink href="#contact">{navigationData.contact}</NavigationLink></li>
                            </NavigationList>
                        </Col>
                        <Col xs={2}><Button>{navigationData.button}</Button></Col>
                    </StyleNavigationRow>
                </Subheader>
                <ColorFilet>
                    <PromoSubTitle>{navigationData.subtitle}</PromoSubTitle>
                    <Title>{navigationData.title}</Title>

                    <Promo>
                        {navigationData.items.map((item, index) => (
                            <PromoImg key={index}>
                                <img src={item.img} alt="roma" />
                                <PromoCountrySubTitle>{item.country}</PromoCountrySubTitle>
                                <PromoCitySubTitle>{item.city}</PromoCitySubTitle>
                            </PromoImg>
                        ))}
                    </Promo>
                </ColorFilet>

            </WrapperFilet>
        </ThemeProvider>
    </>
}

export default Navigation;