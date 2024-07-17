import MuxPlayer from "@mux/mux-player-react"; 

export default function Video({ playbackId }: { playbackId: string }) {
    return (
        <div>
        <h1>Video</h1>
        <p>This is a simple example of a Video in a React app.</p>
        <MuxPlayer
            playbackId={playbackId}
            metadata={{
                video_id: "video-id-54321",
                video_title: "Test video title",
                viewer_user_id: "user-id-007",
            }}
            />
        </div>
    )
}