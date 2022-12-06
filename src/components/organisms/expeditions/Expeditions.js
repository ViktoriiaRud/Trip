import React from 'react';

import { ButtonLight } from '../../atoms/button/Button.styles';
import { WrapperItemVila, WrapperCardsVila, WrapperExpeditions, WrapperImgCard } from './Expeditions.styles';
import { ExpeditionCityTitle, ExpeditionTitle, ExpeditionSubTitle, ExpeditionTitleYear, ExpeditionDollarTitle } from '../../atoms/fontSize/FontSize.styles'

import expeditionsData from './expeditionsData';

const Expeditions = () => {
    return <>
        <WrapperExpeditions>
            <ExpeditionSubTitle>{expeditionsData.subTitle}</ExpeditionSubTitle>
            <ExpeditionTitle>{expeditionsData.title}</ExpeditionTitle>

            <WrapperCardsVila>
                {expeditionsData.items.map((item, index) => (
                    <WrapperItemVila key={index}>
                        <ExpeditionCityTitle>{item.city}</ExpeditionCityTitle>
                        <ExpeditionTitleYear>{item.year}</ExpeditionTitleYear>
                        <ExpeditionDollarTitle>{item.dollar}</ExpeditionDollarTitle>
                        <WrapperImgCard>
                            <img src={item.img} alt="Yacht" />
                        </WrapperImgCard>
                    </WrapperItemVila>
                ))}

                <ButtonLight>See More</ButtonLight>
            </WrapperCardsVila>
        </WrapperExpeditions>
    </>
}


export default Expeditions; 