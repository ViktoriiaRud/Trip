import React from "react";
import { Col, Row } from 'react-bootstrap';

import { CombinedWrapper, MyPhotoFon, MyPhotoOrange, Combined, WrapperOrange, RowStyle, WrapperBridge } from './CombinedShare.styles';
import { ButtonOrang } from '../../atoms/button/Button.styles';
import { CombinedAboutText, CombinedTitle, CombinedDescription, CombinedSubTitle, CombinedBookDescription, CombinedSubText, CombinedName } from '../../atoms/fontSize/FontSize.styles';

import combinedData from './combinedData';
// import { ThemeProvider } from "react-bootstrap";

const CombinedShare = () => {

    const { text, title, description, subTitle, description2, button, bridge, subText, name, myPhoto } = combinedData;

    return (<>

        <Combined>
            <CombinedWrapper>
                <RowStyle >
                    <Col xs={6}>
                        <CombinedAboutText>{text}</CombinedAboutText>
                        <CombinedTitle>{title}</CombinedTitle>
                        <CombinedDescription>{description}</CombinedDescription>
                        <CombinedSubTitle>{subTitle}</CombinedSubTitle>
                        <CombinedBookDescription>{description2}</CombinedBookDescription>
                        <ButtonOrang>{button}</ButtonOrang>
                    </Col>
                    <Col xs={6}>
                        <WrapperBridge>
                            <img src={bridge} alt="bridge" />
                        </WrapperBridge>
                        <WrapperOrange>
                            <MyPhotoFon>
                                <MyPhotoOrange>
                                    <CombinedSubText>{subText}</CombinedSubText>
                                    <CombinedName>{name}</CombinedName>
                                    <img src={myPhoto} alt="Photo" />
                                </MyPhotoOrange>
                            </MyPhotoFon>
                        </WrapperOrange>
                    </Col>
                </RowStyle>

            </CombinedWrapper>
        </Combined>

    </>

    )
}


export default CombinedShare;


