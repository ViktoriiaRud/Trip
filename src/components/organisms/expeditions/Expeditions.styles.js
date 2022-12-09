import styled from 'styled-components';

export const WrapperExpeditions = styled.div`
    margin-top: 120px;
    max-width: 1440px;
`;

export const WrapperCardsVila = styled.div`
    max-width: 1260px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperItemVila = styled.div`
    max-width: 270px;
    height: 352px;
    border-radius: 3px;
    margin: 20px;
    padding-bottom: 10px;
    background: #FFF2F2;
    &:hover {
    background-color: #6347F9;
    p,
    h3,
    h2{
     color: #FFFFFF;
    }
    }
`;

export const WrapperImgCard = styled.div`
    padding: 5px 0px 0px 0px;
`;


