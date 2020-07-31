import React from 'react';
import classes from './BackgroundVideo.module.css';


const Home=(props)=> {
  return (
    <div className={classes.Container}>
      <img className={classes.HomeVideo} src='https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/Screen%20Shot%202020-07-30%20at%2010.36.49%20PM.png?alt=media&token=58af666f-b5d3-42e8-9560-bda72568e1bc'/>
     
      {/* <video autoPlay="autoplay" 
      // loop="loop" 
      muted className={classes.HomeVideo} >
        <source src={'https://firebasestorage.googleapis.com/v0/b/hello-1caa7.appspot.com/o/LostLakeVail5mp42.mp4?alt=media&token=fd2134da-0dd2-4f5a-a611-30ead66fa386'} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className={classes.Content}>
        <div className={classes.SubContent} >
            <h1 className={classes.MainTitle}>Welcome to Park Tracker</h1>
            <p className={classes.MainDescription}>Explore U.S. National Parks</p>
        </div>
      </div>
    </div>
  );
}

export default Home;