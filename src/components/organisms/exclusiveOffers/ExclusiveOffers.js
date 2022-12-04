import React from "react";


import { Exclusive, WrapperCards, WrapperItem, BackgroundOrange, ExclusiveBackgroundColor } from './ExclusiveOffers.styles'
import { ExclusiveSubTitle, ExclusiveTitle, ExclusiveCityTitle, ExclusiveCountryTitle, ExclusiveDollar } from '../../atoms/fontSize/FontSize.styles';
import exclusiveData from './exclusiveData';


const ExclusiveOffers = () => {

    return <>
        <ExclusiveBackgroundColor>
            <Exclusive >
                <ExclusiveSubTitle>{exclusiveData.subTitle}</ExclusiveSubTitle>
                <ExclusiveTitle>{exclusiveData.title}</ExclusiveTitle>
                <WrapperCards>

                    {exclusiveData.items.map((item, index) => (
                        <WrapperItem key={index}>
                            <div className="BackgroundPhoto">
                                <img src={item.img} alt="VilaImg" />
                                <ExclusiveCityTitle>{item.city}</ExclusiveCityTitle>
                                <ExclusiveCountryTitle>{item.country}</ExclusiveCountryTitle>
                            </div>
                            <BackgroundOrange className="BackgroundOrange">
                                <ExclusiveDollar>{item.dollar1}</ExclusiveDollar>
                            </BackgroundOrange>
                        </WrapperItem>
                    ))}
                </WrapperCards>
            </Exclusive>
        </ExclusiveBackgroundColor>
    </>
}

export default ExclusiveOffers;