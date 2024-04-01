import { useAuth } from '../contexts/AuthContext';
import '../styles/components/header.css';

const Header = () => {
    const auth = useAuth();
    return (
        <header className="box-title">
            <h1 className="the-title">Suas tarefas</h1>
            <div className='logout-container' onClick={() => auth.logout()}>
                <i className="fas fa-sign-out-alt logoutIcon" ></i>
            </div>
        </header>
    )
}

export default Header;