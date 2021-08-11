import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}

export const CoursesSlider = () => {
        const[courses, setCoursesData] = useState([]);
        
        useEffect(() => {
            axios.get('https://fast-citadel-29445.herokuapp.com/api/udemyapi/courses')
            .then(res =>{setCoursesData(res.data.result.results)})
        }, [])


    
    //What do you want to see on the page
    return (
        <>
        <Carousel responsive={responsive} sliderClass="carousel-item-height-300-px">
            {courses && courses.map((course)=>(
                <div style={{textAlign:"center", backgroundColor:"#d4e09b", height:300}}>
                    <Link to={"/courses"}>
                    <img className="p-3" src={course.image_480x270} style={{resizeMode: 'stretch', height:270, width:480, flex:1}}></img>
                    </Link>
                    <p>{course.title}</p>
                </div>
            ))}
            </Carousel>
        </>
    )
};