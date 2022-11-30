import React from 'react';

import { WrapperBackgroundColor, WrapperBackgroundItem, Span } from './MyBlog.styles';
import { OurBlogText, BlogTitle } from '../../atoms/fontSize/FontSize.styles';
import { ButtonBlogBlue } from './../../atoms/button/Button.styles';

import BoatImg from '../../../assets/img/Boat.png';
import Image4Img from '../../../assets/img/image4.png';
import GirlImg from '../../../assets/img/girl.jpg';
import BoyImg from '../../../assets/img/boy.jpg';

import { TextForm, CardPhoto, WrapperBlockMonth, BlockMonth, BlockMonthText, BlockMonthPhoto } from './MyBlog.styles';

import { MonthText, MonthTitle, MonthSubTitle } from '../../atoms/fontSize/FontSize.styles';
import CustomForm from '../../atoms/form/Form';

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

                <TextForm>
                    <h3>Newsletter</h3>
                    <h4>Separated they live in right at the coast of the Semantics</h4>
                    <CustomForm />
                </TextForm>

                <Span></Span>

            </WrapperBackgroundItem>
        </WrapperBackgroundColor>

    </>
}

export default MyBlog;