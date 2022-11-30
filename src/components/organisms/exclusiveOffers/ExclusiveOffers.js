import React from "react";
import VilaImg from '../../../assets/img/Vila.png';
import BitmapBayImg from '../../../assets/img/BitmapBay.png';
import BitmapVilaImg from '../../../assets/img/BitmapVila.png';

import { Exclusive, WrapperCards, WrapperItem, BackgroundOrange, ExclusiveBackgroundColor } from './ExclusiveOffers.styles'
import { ExclusiveSubTitle, ExclusiveTitle, ExclusiveCityTitle, ExclusiveCountryTitle, ExclusiveDollar } from '../../atoms/fontSize/FontSize.styles';


const ExclusiveOffers = () => {

    return <>
        <ExclusiveBackgroundColor>
            <Exclusive >
                <ExclusiveSubTitle>EXCLUSIVE OFFERS</ExclusiveSubTitle>
                <ExclusiveTitle>Discover Popular Destinations</ExclusiveTitle>
                <WrapperCards>
                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={VilaImg} alt="VilaImg" />
                            <ExclusiveCityTitle>Rome</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>Italy</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>$199</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>

                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={BitmapBayImg} alt="BitmapBay" />
                            <ExclusiveCityTitle>New York</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>USA</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>$250</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>

                    <WrapperItem>
                        <div className="BackgroundPhoto">
                            <img src={BitmapVilaImg} alt="" />
                            <ExclusiveCityTitle>Paris</ExclusiveCityTitle>
                            <ExclusiveCountryTitle>France</ExclusiveCountryTitle>
                        </div>
                        <BackgroundOrange className="BackgroundOrange">
                            <ExclusiveDollar>$129</ExclusiveDollar>
                        </BackgroundOrange>
                    </WrapperItem>
                </WrapperCards>
            </Exclusive>
        </ExclusiveBackgroundColor>
    </>
}

export default ExclusiveOffers;