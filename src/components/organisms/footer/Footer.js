
import { LogoText, Social, WrapperSocial } from './Footer.styles';
import { FooterColor, WrapperFooter, FooterList1, FooterLink, WrapperFooterList, FooterList2, FooterLink2 } from './Footer.styles';
import FacebookImg from '../../../assets/icons/facebook.svg';
import TwitterImg from '../../../assets/icons/twitter.svg';
import InstagramImg from '../../../assets/icons/instagram.svg';


const Footer = () => {
    return (<>
        <FooterColor>
            <WrapperFooter>
                <LogoText>TVL</LogoText>
                <WrapperFooterList>
                    <FooterList1>
                        <h3>Menu</h3>
                        <li><FooterLink href="#">Tours</FooterLink></li>
                        <li><FooterLink href="#">Blog</FooterLink></li>
                        <li><FooterLink href="#">Contact</FooterLink></li>
                        <li><FooterLink href="#">Contact</FooterLink></li>
                    </FooterList1>

                    <FooterList2>
                        <h3>Service</h3>
                        <li><FooterLink2 href="#">Tours</FooterLink2></li>
                        <li><FooterLink2 href="#">Blog</FooterLink2></li>
                        <li><FooterLink2 href="#">Contact</FooterLink2></li>
                        <li><FooterLink2 href="#">Contact</FooterLink2></li>
                    </FooterList2>

                    <WrapperSocial>
                        <h3>Social</h3>
                        <Social>
                            <img src={FacebookImg} alt="Facebook" />
                            <img src={TwitterImg} alt="Twitter" />
                            <img src={InstagramImg} alt="Instagram" />
                        </Social>
                    </WrapperSocial>
                </WrapperFooterList>




            </WrapperFooter>
        </FooterColor>
    </>

    )
}

export default Footer; 