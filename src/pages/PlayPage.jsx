import AnimIntro from "../components/homepage/AnimIntro";
import mp3 from "../assets/sound/netflix-intro-sound.mp3";

const PlayPage = () => {

    return  (
            <>
                <div>  
                    <audio id="audio" autoPlay >
                        <source src={mp3} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                    <AnimIntro />
                </div> 
            </>
            );
        }

export default PlayPage;