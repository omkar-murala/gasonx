
import Slidebar from '@/app/components/Slidebar/Slidebar';

export default function Home() {
    return (
        <div className="flex">
            <Slidebar />
            <main className="flex-1">Your main content here</main>
        </div>
    );
}
