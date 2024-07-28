import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "/random-quotes.png",
        disc : "The Random Quotes Generator is a simple and interactive web application developed using React. It fetches random quotes from a quotes API and displays them to the user.",
        link: "https://quotes2you.netlify.app/"
    },
    {
        img : "/currency-converter.png",
        disc : "A currency converter web application allows users to convert amounts between different currencies in real time",
        link: "https://github.com/ak-hariharan/CurrenyConverter"
    },
    {
        img : "/camper-cafe.png",
        disc : "Camper Cafe Project: Responsive coffee shop website built in FreeCodeCamp's website. Developed using HTML, CSS. A showcase of web development skills with a caffeine twist.",
        link: "https://ak-hariharan.github.io/Camper-Cafe/"
    },
    {
        img : "/starbucks.png",
        disc : "Built a responsive Starbucks landing page using HTML, CSS, and JavaScript, featuring a background changing according to the product you clicked on it.",
        link: "https://ak-hariharan.github.io/Starbucks/"
    },
    {
        img : "/brain-tumor-classification.jpeg",
        disc : "This project represents a significant contribution to the field of medical imaging and demonstrates the power of deep learning in diagnosing brain tumors",
        link: "https://github.com/ak-hariharan/Prediction-of-Brain-tumor-using-Deep-learning-techniques"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProject = data.map((item, i) => (
        <Project item={item} key={i} />
    ));

    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderProject}
            </Slider>
            <Buttons>
                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className='back'><IoIosArrowBack /></button>
                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className='next'><IoIosArrowForward /></button>
            </Buttons>
        </Container>
    );
}

export default SliderComp;

const Container = styled.div`
    position: relative;
`;

const Buttons = styled.div`
    button {
        width: 2rem;
        height: 2rem;
        background-color: rgba(255, 255, 255, 0.100);
        cursor: pointer;
        color: #ff6b2b;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;
    }

    .back {
        left: -1rem;
    }
`;
