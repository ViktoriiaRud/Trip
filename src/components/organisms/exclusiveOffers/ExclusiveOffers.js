import React from "react";
import VilaImg from '../../../assets/img/Vila.png';
import BitmapBayImg from '../../../assets/img/BitmapBay.png';
import BitmapVilaImg from '../../../assets/img/BitmapVila.png';

import { Exclusive, WrapperCards, WrapperItem, BackgroundOrange, ExclusiveBackgroundColor } from './ExclusiveOffers.styles'
import { ExclusiveSubTitle, ExclusiveTitle, ExclusiveCityTitle, ExclusiveCountryTitle, ExclusiveDollar } from '../../atoms/fontSize/FontSize.styles';
import exclusiveData from './exclusiveData';

const { subTitle, title, city, country, dollar1, dollar2, dollar3 } = exclusiveData;

const ExclusiveOffers = () => {

    return <>
        <ExclusiveBackgroundColor>
            <Exclusive >
                <ExclusiveSubTitle>{subTitle}</ExclusiveSubTitle>
                <ExclusiveTitle>{title}</ExclusiveTitle>
                <WrapperCards>
                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={VilaImg} alt="VilaImg" />
                            <ExclusiveCityTitle>{city}</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>{country}</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>{dollar1}</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>

                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={BitmapBayImg} alt="BitmapBay" />
                            <ExclusiveCityTitle>New York</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>USA</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>{dollar2}</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>

                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={BitmapVilaImg} alt="" />
                            <ExclusiveCityTitle>Paris</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>France</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>{dollar3}</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>
                </WrapperCards>
            </Exclusive>
        </ExclusiveBackgroundColor>
    </>
}

export default ExclusiveOffers;