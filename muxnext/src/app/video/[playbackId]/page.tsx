import Video from '../../../components/Video';

export default function VideoPage({ params }: { params: { playbackId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Video playbackId={params.playbackId} />
        </main>
    );
}