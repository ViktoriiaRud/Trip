import { LogoText, Social, WrapperSocial, Facebook, WrapperData } from './Footer.styles';
import { FooterColor, WrapperFooter, FooterList1, FooterLink, WrapperFooterList, FooterList2, FooterLink2 } from './Footer.styles';
import footerData from './footerData'
import { Span } from '../myBlog/MyBlog.styles';

const { logo, menu, service, social, about, tours, blog, contact } = footerData;
const { transfers, guides, locals, optimal } = footerData;


const Footer = () => {

    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return (<>
        <FooterColor>
            <WrapperFooter>
                <LogoText>{logo}</LogoText>
                <WrapperFooterList>

                    <FooterList1>
                        <h3>{menu}</h3>
                        <li><FooterLink href="#about">{about}</FooterLink></li>
                        <li><FooterLink href="#tours">{tours}</FooterLink></li>
                        <li><FooterLink href="#blog">{blog}</FooterLink></li>
                        <li><FooterLink href="#contact">{contact}</FooterLink></li>
                    </FooterList1>

                    <FooterList2>
                        <h3>{service}</h3>
                        <li><FooterLink2 href="#transfers">{transfers}</FooterLink2></li>
                        <li><FooterLink2 href="#guides">{guides}</FooterLink2></li>
                        <li><FooterLink2 href="#locals">{locals}</FooterLink2></li>
                        <li><FooterLink2 href="#optimal">{optimal}</FooterLink2></li>
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
                <Span></Span>
            </WrapperFooter>
            <WrapperData>
                <div>{new Date().getMonth() + 1}</div>
                <div>{new Date().getFullYear()}</div>
                <br />
                <div>Copyright © {new Date().getFullYear()} Laaqiq. All Rights Reserved.</div>
            </WrapperData>


        </FooterColor>

    </>
    )
}


export default Footer; 