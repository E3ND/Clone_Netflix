import './Header.css';

import NetflixImg from '../../img/netflix.png';
import NetflixUser from '../../img/Netflix-avatar.png'

function Header({ black }) {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="#">
                    <img src={NetflixImg} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="#">
                    <img src={NetflixUser} alt="Perfil" />
                </a>
            </div>
        </header>
    )
}

export default Header