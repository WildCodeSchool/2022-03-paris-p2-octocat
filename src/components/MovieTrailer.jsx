import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PlayPage from "../pages/PlayPage";
import YoutubeEmbed from "./YoutubeEmbed";

const MovieTrailer = (props) => {

    const [trailer, setTrailer] = useState([]);

    const params = useParams();

    const getVideo = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    useEffect(() => {
      axios.get(getVideo)
      .then((res) => {return res.data;})
      .then((data) => {setTrailer(data.results[0].key);})
    },[getVideo]);
    
    const {initialMinute = 0,initialSeconds = 5} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });



    return (
    <>
            {  (seconds === 0 && trailer != null)
            ? 
            <div id="movie-trailer" >
                <YoutubeEmbed embedId={trailer} />
            </div>
            : 
            <div>
                <PlayPage />
            </div>
        }   
    </>
    );
    }

export default MovieTrailer;
