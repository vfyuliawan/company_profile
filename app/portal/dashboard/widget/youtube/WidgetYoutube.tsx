import YouTube, { YouTubePlayer } from 'react-youtube';

interface WidgetYoutube{
    height: string
    width: string
    vidId: string
}

const WidgetYoutube = (props: WidgetYoutube) => {
    return ( 
        <div>
            <YouTube style={{height:props.height , width:props.width}} videoId={props?.vidId?.split("?v=")[1] ?? ""} />
        </div>
     );
}
 
export default WidgetYoutube;