import { LogoText, Social, WrapperSocial, Facebook, WeightText } from './Footer.styles';
import { FooterColor, WrapperFooter, FooterList1, FooterLink, WrapperFooterList, FooterList2, FooterLink2 } from './Footer.styles';
import footerData from './footerData'

const { logo, menu, service, social, about, tours, blog, contact } = footerData;
const { transfers, guides, locals, optimal } = footerData;


const Footer = () => {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    return (<>
        <FooterColor>
            <WrapperFooter>
                <LogoText>{logo}</LogoText>
                <WrapperFooterList>

                    <FooterList1>
                        <h3>{menu}</h3>
                        <li><FooterLink href="#">{about}</FooterLink></li>
                        <li><FooterLink href="#">{tours}</FooterLink></li>
                        <li><FooterLink href="#">{blog}</FooterLink></li>
                        <li><FooterLink href="#">{contact}</FooterLink></li>
                    </FooterList1>

                    <FooterList2>
                        <h3>{service}</h3>
                        <li><FooterLink2 href="#">{transfers}</FooterLink2></li>
                        <li><FooterLink2 href="#">{guides}</FooterLink2></li>
                        <li><FooterLink2 href="#">{locals}</FooterLink2></li>
                        <li><FooterLink2 href="#">{optimal}</FooterLink2></li>
                    </FooterList2>

                    <WrapperSocial>
                        <h3>{social}</h3>
                        <Social>
                            {footerData.items.map((item, index) => (
                                <Facebook key={index}>
                                    <img src={item.img} alt="Facebook" />
                                </Facebook>
                            ))}
                        </Social>

                    </WrapperSocial>
                </WrapperFooterList>

            </WrapperFooter>

            <div>{new Date().getFullYear()}</div>
            <div>{new Date().getMonth() + 1}</div>
            <br />
            <div>Copyright © {new Date().getFullYear()} James Doe</div>

        </FooterColor>

    </>
    )
}


export default Footer; 