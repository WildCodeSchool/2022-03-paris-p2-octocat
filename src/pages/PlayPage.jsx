// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AnimIntro from "../components/homepage/AnimIntro";
import Mp3 from "../assets/sound/netflix-intro-sound.mp3";

const PlayPage = () => {

    // const navigate = useNavigate();

    // const handleNavigateAnimIntro = () => {
    //     navigate("/anim-intro");
    //   }

    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }

    const play = () => {
        const audio = document.getElementById("audio");
        audio.play();
      }

    return (
    <>
        <div>
            {isPlaying
                ? null
                : <>
                <video autoplay loop muted className="absolute inset-0 w-screen h-screen object-cover -z-10 opacity-70">
                <source src="../assets/videos/waitingScreen-movies.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex flex-col w-screen h-screen height justify-center items-center z-20">
                 <button /*onClick={handleNavigateAnimIntro}*/ 
                    onClick={ () => {
                        handleClick();
                        play();
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 hover:opacity-90 " viewBox="0 0 20 20" fill="currentColor" >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                </button>
                <h2>
                    press to play
                </h2>
            </div>
            </>
            }
        <video autoplay loop className="absolute inset-0 w-screen h-screen object-cover -z-10 opacity-70">
            <source src="../assets/videos/waitingScreen-movies.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="flex flex-col w-screen h-screen height justify-center items-center z-20">
             <button /*onClick={handleNavigateAnimIntro}*/ onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 hover:opacity-90 " viewBox="0 0 20 20" fill="currentColor" >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </button>
            <h2>
                press to play
            </h2>
        </div>
        </div>
        <div>
            {isPlaying 
                ? <>  
                    <audio id="audio" controls play className=" ">
                        <source src={Mp3} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                    <AnimIntro /> 
                  </>
                : null
            }
        </div>
    </>
    )
}

export default PlayPage;