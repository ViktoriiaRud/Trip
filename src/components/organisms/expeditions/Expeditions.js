import React from 'react';
import YachtImg from '../../../assets/img/Yacht.png';
import MontainsImg from '../../../assets/img/Montains.png';
import CloudImg from '../../../assets/img/Cloud.png';
import BitmapCloudImg from '../../../assets/img/BitmapCloud.png';
import BitmapPalmImg from '../../../assets/img/BitmapPalm.png';
import BitmapBoatImg from '../../../assets/img/BitmapBoat.png';
import PalmImg from '../../../assets/img/Palm.png';
import Bitmap1Img from '../../../assets/img/Bitmap1.png';

import { ButtonLight } from '../../atoms/button/Button.styles';
import { WrapperItemVila, WrapperCardsVila, WrapperExpeditions, WrapperImgCard } from './Expeditions.styles';
import { ExpeditionCityTitle, ExpeditionTitle, ExpeditionSubTitle, ExpeditionTitleYear, ExpeditionDollarTitle } from '../../atoms/fontSize/FontSize.styles'

const Expeditions = () => {
    return <>
        <WrapperExpeditions>
            <ExpeditionSubTitle>Best Adventures</ExpeditionSubTitle>
            <ExpeditionTitle>Our Popular Tours & Expeditions</ExpeditionTitle>
            <WrapperCardsVila>
                <WrapperItemVila>
                    <ExpeditionCityTitle>Rome, Italy</ExpeditionCityTitle>
                    <>12–24 Jun 2020</>
                    <ExpeditionDollarTitle>$349</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={YachtImg} alt="Yacht" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>New York City, USA</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$200</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={MontainsImg} alt="Montains" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>Barcelona, Spain</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$95</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={CloudImg} alt="CloudImg" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>Paris, France</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle >$1200</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={BitmapCloudImg} alt="BitmapCloud" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>San Francisco, USA</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$480</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={BitmapPalmImg} alt="BitmapPalm" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>Amesbury, UK</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$569</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={BitmapBoatImg} alt="BitmapBoat" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>Versailles, France</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$100</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={Bitmap1Img} alt="Bitmap1" />
                    </WrapperImgCard>
                </WrapperItemVila>

                <WrapperItemVila>
                    <ExpeditionCityTitle>Venice, Italy</ExpeditionCityTitle>
                    <ExpeditionTitleYear>12–24 Jun 2020</ExpeditionTitleYear>
                    <ExpeditionDollarTitle>$99</ExpeditionDollarTitle>
                    <WrapperImgCard>
                        <img src={PalmImg} alt="PalmImg" />
                    </WrapperImgCard>
                </WrapperItemVila>
                <ButtonLight>See More</ButtonLight>
            </WrapperCardsVila>
        </WrapperExpeditions>
    </>
}


export default Expeditions; 