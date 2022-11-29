import React from "react";
import { Col, Row } from 'react-bootstrap';
import Bridge from '../../../assets/img/Bitmap5.png';
import MyPhoto from '../../../assets/img/MyPhoto.png';

import { CombinedWrapper, MyPhotoFon, MyPhotoOrange, Combined, WrapperOrange, RowStyle, WrapperBridge } from './CombinedShare.styles';
import { ButtonOrang } from '../../atoms/button/Button.styles';
import { CombinedAboutText, CombinedTitle, CombinedDescription, CombinedSubTitle, CombinedBookDescription, CombinedSubText, CombinedName } from '../../atoms/fontSize/FontSize.styles';

const CombinedShare = () => {

    return (
        <Combined>
            <CombinedWrapper>
                <RowStyle >
                    <Col xs={6}>
                        <CombinedAboutText>About</CombinedAboutText>
                        <CombinedTitle>Explore Our Planet Together</CombinedTitle>
                        <CombinedDescription>It is a paradisematic country, in which roasted parts of
                            sentences fly into your mouth.</CombinedDescription>
                        <CombinedSubTitle>Great Adventures</CombinedSubTitle>
                        <CombinedBookDescription>Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language. </CombinedBookDescription>
                        <ButtonOrang>About Us</ButtonOrang>
                    </Col>
                    <Col xs={6}>
                        <WrapperBridge>
                            <img src={Bridge} alt="bridge" />
                        </WrapperBridge>
                        <WrapperOrange>
                            <MyPhotoFon>
                                <MyPhotoOrange>
                                    <CombinedSubText>The copy warned the Little Blind Text, that where it came from.</CombinedSubText>
                                    <CombinedName>– Alfie Wood</CombinedName>
                                    <img src={MyPhoto} alt="Photo" />
                                </MyPhotoOrange>
                            </MyPhotoFon>
                        </WrapperOrange>
                    </Col>
                </RowStyle>
            </CombinedWrapper>
        </Combined>
    )
}


export default CombinedShare;


