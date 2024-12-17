// component
import { PlayControlTimeLine } from './PlayControlTimeLine';
import { PlayControlButton } from './PlayControlButton';

export const PlayControlMain = () => {
    return (
        <>
            <div className="flex-1 mx-[66px]">
                <PlayControlButton />
                <PlayControlTimeLine />
            </div>
        </>
    );
}