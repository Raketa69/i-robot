import './ScenePage.scss'
import { Link } from 'react-router-dom'

export default function ScenePage() {
    return (
        <div className='scene_content'>
            <div className='scene__text'></div>
            <div className='scenes'>
                <Link className='linkMenu hvr-grow' to='/story/scene/stage'>
                    <div className='scene hvr-grow'>
                        <div className='scene_img'></div>
                        <div className='scene_text'>Introduction</div>
                    </div>
                </Link>
                <Link className='linkMenu hvr-grow' to='/story/scene/stage'>
                    <div className='scene hvr-grow'>
                        <div className='scene_img'></div>
                        <div className='scene_text'>Robbie</div>
                    </div>
                </Link>
                <Link className='linkMenu hvr-grow' to='/story/scene/stage'>
                    <div className='scene hvr-grow'>
                        <div className='scene_img'></div>
                        <div className='scene_text'>Runaround</div>
                    </div>
                </Link>

            </div>
        </div>
    )
}