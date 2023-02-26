import { Link } from 'react-router-dom'
import './MenuPage.scss'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


export default function MenuPage() {
    return (
        <div className="main_content">
            <div className='menu_content'>
                <div className='logo'></div>
                <div className='menuForm'>
                    <Link className='linkMenu hvr-grow' to='/story'>New story</Link>
                    <Link className='linkMenu hvr-grow' to='/story/scene'>Continue</Link>
                    <Link className='linkMenu hvr-grow' to='/'>Settings</Link>
                    <Link className='linkMenu hvr-grow' to='/'>Help</Link>
                </div>
            </div>
            <div className='profile_content'>
                <div></div>
            </div>
        </div>
    )
}