import '../style/App.css';
import '../style/button.css';
import '../style/game-panel.css';
import Button from '../components/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom';

function Menu() {

  const history = useHistory();

  return (
    <div className={'menu'}>
      <div className='text_class menu_container '>
        <div>
          <img className='screen_responsive' alt='app-logo' src={require('../assets/app-logo.png').default}></img>
        </div>

        <div className='screen_responsive' style={{  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ padding: '10px'}}>
            <Button text={"Start"} history={history} loc={"gamescreen"} />

            <Button text={"Options"} history={history} loc={"options"} />

            <Button text={"About"} history={history} loc={"about"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
