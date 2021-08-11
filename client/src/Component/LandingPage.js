import React from 'react';
import {Link} from 'react-router-dom';
import YoutubeBackground from 'react-youtube-background';
import {CoursesSlider} from './CoursesSlider';
import '../index.css';


export const LandingPage = () => {
    return(
        <>
            <YoutubeBackground className="video"
                videoId={'jycn4RqY_3U'}>
                        <h1 className="h1">Welcome</h1>
            </YoutubeBackground>

            <Link to="/aboutus">
            <img src="../images/banner.jpg"></img></Link>

            <div className="suggestedCourses">SuggestedCourses</div>
            <CoursesSlider />  

        </>
    )
};