import './StoryPage.scss'
import {Link} from 'react-router-dom'

export default function StoryPage() {
    return (
        <div className='story_content'>
            <div className='story__text'></div>
            <div className='story_books'>
                <div className='books'>
                <Link className='linkMenu hvr-grow' to='/story/scene'><div className='book'></div></Link>
                <Link className='linkMenu hvr-grow' to='/story/scene'><div className='book'></div></Link>
                <Link className='linkMenu hvr-grow' to='/story/scene'><div className='book'></div></Link>
                </div>
            </div>
        </div>
    )
}