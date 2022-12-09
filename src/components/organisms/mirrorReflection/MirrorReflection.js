import React from "react";
import { Col, Row } from 'react-bootstrap';
import BitmapRomaImg from '../../../assets/img/BitmapRoma.png';
import RectangleImg from '../../../assets/img/Rectangle.png';
import CardImg from '../../../assets/icons/31n.png';

import { WrapperOrangeMirrorText, WrapperCombinedMirror, OrangeMirror, MyPhotoMirror, CombinedMirror, WrapperOrangeMirror, WrapperBridgeMirror } from './MirrorReflection.styles';
import { ButtonOrangMirror } from '../../atoms/button/Button.styles';
import { MirrorSubTitle, MirrorTitle, MirrorDescription, MirrorsList } from '../../atoms/fontSize/FontSize.styles';
import mirrorData from './mirrorData'


const MirrorReflection = () => {

    const arrayMirror = ['Transfers', 'Guides'];

    return (
        <CombinedMirror>
            <WrapperCombinedMirror>
                <Row>
                    <Col xs={6}>
                        <WrapperBridgeMirror>
                            <img src={BitmapRomaImg} alt="BitmapRoma" />
                        </WrapperBridgeMirror>
                        <WrapperOrangeMirror>
                            <MyPhotoMirror>
                                <img src={RectangleImg} alt="Rectangle" />
                            </MyPhotoMirror>
                        </WrapperOrangeMirror>
                    </Col>
                    <Col xs={6}>
                        <MirrorSubTitle>{mirrorData.subTitle}</MirrorSubTitle>
                        <MirrorTitle>{mirrorData.title}</MirrorTitle>
                        <MirrorDescription>{mirrorData.description}</MirrorDescription>

                        <WrapperOrangeMirrorText>
                            {mirrorData.mirrorsList1.map((item) => (
                                <OrangeMirror>
                                    <img src={CardImg} alt="img" />
                                    <MirrorsList>{item}</MirrorsList>
                                </OrangeMirror>
                            ))}
                        </WrapperOrangeMirrorText>

                        <WrapperOrangeMirrorText>
                            {mirrorData.mirrorsList2.map((item) => (
                                <OrangeMirror>
                                    <img src={CardImg} alt="img" />
                                    <MirrorsList>{item}</MirrorsList>
                                </OrangeMirror>
                            ))}
                        </WrapperOrangeMirrorText>

                        <ButtonOrangMirror>Service</ButtonOrangMirror>
                    </Col>
                </Row>
            </WrapperCombinedMirror>
        </CombinedMirror>
    )
}

export default MirrorReflection;





