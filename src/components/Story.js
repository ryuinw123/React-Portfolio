import React, { useContext } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {v4 as uuidv4} from "uuid"
import { Paper } from '@material-ui/core';
import './Story.css';
import { ThemeContext } from '../Context';


const paperstyle = {
    padding: '20px 20px',
    textAlign: 'left',
}

function Story({ pos, data }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div id = "story">
            <h1>{data[0].title}</h1>
            <Timeline position={pos}>
                {data.map((det, index) => {
                    let detail = `${det.side} : ${det.detail}`
                    return (
                        <TimelineItem key = {uuidv4()}>
                            <TimelineOppositeContent color="text.secondary" className = "timelineO" >
                                <h2 style = {{color: darkMode && "white" }}> {det.heading} </h2>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} style={paperstyle}>{detail}
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>
    );
}

export default Story;
