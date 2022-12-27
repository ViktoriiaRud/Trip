import React from "react";

import itemImg from '../../../assets/icons/item.jpg';

import OvalImg from '../../../assets/img/Oval.png';
import OvalGirlImg from '../../../assets/img/OvalGirl.png';
import OvalBoyImg from '../../../assets/img/OvalBoy.png';

import { TestimonialsSubTitle, TestimonialsTitle, TestimonialsText, TestimonialsItemName, TestimonialsSpecialty } from '../../atoms/fontSize/FontSize.styles';
import { TestimonialsItemPhoto, TestimonialsItem, TestimonialsItems, WrapperTestimonials, TestimonialsCards, TestimonialsCard, TestimonialsMarks } from './Testimonials.styles';


const Testimonials = () => {
    return <>
        <WrapperTestimonials id="guides">
            <TestimonialsSubTitle>Testimonials</TestimonialsSubTitle>
            <TestimonialsTitle>Travel Tips From Travellers</TestimonialsTitle>

            <TestimonialsCards id="locals">
                <TestimonialsCard>
                    <TestimonialsMarks>
                        <img src={itemImg} alt="Marks" />
                    </TestimonialsMarks>
                    <TestimonialsText>"When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of her hometown
                        Bookmarksgrove, the headline of Alphabet Village and the subline
                        of her own road"</TestimonialsText>
                </TestimonialsCard>

                <TestimonialsCard>
                    <TestimonialsMarks>
                        <img src={itemImg} alt="Marks" />
                    </TestimonialsMarks>
                    <TestimonialsText>
                        "She reached the first hills of the Italic Mountains, she had a last
                        view back on the skyline of her hometown Bookmarksgrove, the headline
                        of Alphabet Village and the subline of her own road"</TestimonialsText>
                </TestimonialsCard>

                <TestimonialsCard>
                    <TestimonialsMarks>
                        <img src={itemImg} alt="Marks" />
                    </TestimonialsMarks>
                    <TestimonialsText>"Reached the first hills of the Italic Mountains, she had
                        a last view back on the skyline of her hometown Bookmarksgrove, the headline
                        of Alphabet Village and the subline of her own road"</TestimonialsText>
                </TestimonialsCard>
            </TestimonialsCards>


            <TestimonialsItems>
                <TestimonialsItem>
                    <TestimonialsItemPhoto>
                        <img src={OvalImg} alt="OvalImg" />
                    </TestimonialsItemPhoto>
                    <TestimonialsItemName>Artem Sazonov</TestimonialsItemName>
                    <TestimonialsSpecialty>Student</TestimonialsSpecialty>
                </TestimonialsItem>


                <TestimonialsItem>
                    <TestimonialsItemPhoto>
                        <img src={OvalGirlImg} alt="OvalGirlImg" />
                    </TestimonialsItemPhoto>
                    <TestimonialsItemName>Merrile Burgett</TestimonialsItemName>
                    <TestimonialsSpecialty>Designer</TestimonialsSpecialty>
                </TestimonialsItem>


                <TestimonialsItem>
                    <TestimonialsItemPhoto>
                        <img src={OvalBoyImg} alt="OvalBoyImg" />
                    </TestimonialsItemPhoto>
                    <TestimonialsItemName>Gibby Radki</TestimonialsItemName>
                    <TestimonialsSpecialty>Developer</TestimonialsSpecialty>
                </TestimonialsItem>
            </TestimonialsItems>

        </WrapperTestimonials>
    </>
}


export default Testimonials;

