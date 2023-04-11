import './css/style.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
    return (

        <footer>
            <ul className='rSocial'>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            Copy@2023
        </footer>

    )
}