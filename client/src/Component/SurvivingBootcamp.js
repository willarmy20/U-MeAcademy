
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import {getVideos} from '../actions/courseActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../survivingBootcamp.css"


export const SurvivingBootcamp = () => {

    const [video, setVideo] = useState("")

    const courses = useSelector(state => state.course.courses);
    const dispatch = useDispatch();

    const playVideo=(index) =>{
        console.log("i was clicked")
        setVideo(courses[index])
    }
    useEffect(() => {
        dispatch(getVideos());
    }, [])
            
    return(
        <>
            <div className="box1">
                <div className="box2"> {(video)?
                (<iframe src={video.videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
                            : <img src={"/images/daGang.jpg"}></img>}</div>
                <div className="box3">{courses.map((course, index) => {
                        return  <div onClick={() => playVideo(index)} className="box4">
                            <img src={`/images/${course.img}`}></img>
                            </div>
                            })}
                    </div>
                </div>
        </>
    )

};
