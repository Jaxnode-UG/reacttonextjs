import MuxPlayer from "@mux/mux-player-react"; 
import { useParams } from "react-router-dom";

export default function Video() {
    const { playbackId } = useParams();
    return (
        <div>
        <h1>Video</h1>
        <p>This is a simple example of a Video in a React app.</p>
        <MuxPlayer
            playbackId="NT9yaVddmwM9y67OB01zYhBSJm00a2zRuYX00GqIzWQayQ"
            metadata={{
                video_id: "video-id-54321",
                video_title: "Test video title",
                viewer_user_id: "user-id-007",
            }}
            />
        </div>
    )
}