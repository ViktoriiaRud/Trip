import React from 'react';

import { WrapperForm, WrapperBackgroundColor, WrapperBackgroundItem, Span } from './MyBlog.styles';
import { OurBlogText, BlogTitle } from '../../atoms/fontSize/FontSize.styles';
import { ButtonBlogBlue, ButtonContact } from './../../atoms/button/Button.styles';
import { WrapperMapText, Map, Text, WrapperEmailText, Email, Phone, EmailText, NumberPhone, EmailTextItem } from './MyBlog.styles';

import BoatImg from '../../../assets/img/Boat.png';
import Image4Img from '../../../assets/img/image4.png';
import GirlImg from '../../../assets/img/girl.jpg';
import BoyImg from '../../../assets/img/boy.jpg';

import MapImg from '../../../assets/icons/map.jpg';
import MarkerImg from '../../../assets/icons/marker.jpg';
import Icon1Img from '../../../assets/icons/Path.svg';
import Icon2Img from '../../../assets/icons/Shape.svg';

import { TextForm, CardPhoto, WrapperBlockMonth, BlockMonth, BlockMonthText, BlockMonthPhoto } from './MyBlog.styles';

import { MonthText, MonthTitle, MonthSubTitle, TextContact, ContactTitle, ContactSubTitle } from '../../atoms/fontSize/FontSize.styles';
import CustomForm from '../../atoms/form/Form';
import { Marker, WhitSquare } from './MyBlog.styles';

const MyBlog = () => {
    return <>
        <WrapperBackgroundColor>
            <WrapperBackgroundItem>
                <OurBlogText>Our Blog</OurBlogText>
                <ButtonBlogBlue>See More</ButtonBlogBlue>
                <BlogTitle>Read Our Travel Articles</BlogTitle>
                <WrapperBlockMonth>
                    <BlockMonth>
                        <BlockMonthText>
                            <MonthText>15 May 2022</MonthText>
                            <MonthTitle>Attractions proved to be firm favorites with travelers</MonthTitle>
                            <MonthSubTitle>Torsten Paulsson</MonthSubTitle>
                        </BlockMonthText>
                        <BlockMonthPhoto>
                            <img src={GirlImg} alt="GirlImg" />
                        </BlockMonthPhoto>
                        <CardPhoto>
                            <img src={BoatImg} alt="Boat" />
                        </CardPhoto>
                    </BlockMonth>
                    <BlockMonth>
                        <BlockMonthText>
                            <MonthText>15 May 2022</MonthText>
                            <MonthTitle>Best-preserved monuments of Ancient Rome</MonthTitle>
                            <MonthSubTitle>Isaac Hunt</MonthSubTitle>
                        </BlockMonthText>
                        <BlockMonthPhoto>
                            <img src={BoyImg} alt="BoyImg" />
                        </BlockMonthPhoto>
                        <CardPhoto>
                            <img src={Image4Img} alt="Image" />
                        </CardPhoto>
                    </BlockMonth>
                </WrapperBlockMonth>
                <WrapperForm>
                    <TextForm>
                        <h3>Newsletter</h3>
                        <h4>Separated they live in right at the coast of the Semantics</h4>
                    </TextForm>
                    <CustomForm />
                </WrapperForm>
                <Span></Span>

                <WrapperMapText>
                    <Map>

                        <WhitSquare>
                            <h3>875 School Street Ormond Beach, FL 32174</h3>
                        </WhitSquare>
                        <Marker>
                            <img src={MarkerImg} alt="Marker" />
                        </Marker>
                        <img src={MapImg} alt="map" />
                    </Map>


                    <Text>
                        <TextContact>Contact</TextContact>
                        <ContactTitle>Get In Touch With Us</ContactTitle>
                        <ContactSubTitle>Separated they live in Bookmarksgrove right at the coast of the Semantics,
                            a large language. </ContactSubTitle>
                        <WrapperEmailText>
                            <EmailTextItem>
                                <Phone>
                                    <img src={Icon2Img} alt="phone" />
                                </Phone>
                                <NumberPhone>
                                    <h4>+1 (234)567-89-02</h4>
                                </NumberPhone>
                            </EmailTextItem>
                            <EmailTextItem>
                                <Email>
                                    <img src={Icon1Img} alt="email" />
                                </Email>
                                <EmailText>
                                    <h5>travel@adventure.com</h5>
                                </EmailText>
                            </EmailTextItem>
                        </WrapperEmailText>
                        <ButtonContact>Contact Us</ButtonContact>
                    </Text>
                </WrapperMapText>
            </WrapperBackgroundItem>
        </WrapperBackgroundColor>
    </>
}


export default MyBlog;