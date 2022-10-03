import { Routes, Route } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home'
import Rules from '../components/Rules'
import Main from '../components/Main'
import Registration from '../components/Registration'
import GameOrderConfirmation from '../components/GameOrderConfirmation';
import GameOrder from '../components/GameOrder'
import GameTime from '../components/GameTime';

function Routing(props) {
    const {envDefaults, setConnect, connect } = props;
    return (
        <div>
            <Routes>
                <Route path="/Login"
                    element={<Login envDefaults={envDefaults} setConnect={setConnect} connect={connect} />} />
                <Route path="/Home"
                    element={<Home />} />
                <Route path="/Rules"
                    element={<Rules setConnect={setConnect} connect={connect} />} />
                <Route path="/Main"
                    element={<Main envDefaults={envDefaults}/>} />
                <Route path="/Registration"
                    element={<Registration envDefaults={envDefaults}/>} />
                <Route path="/GameOrder"
                    element={<GameOrder envDefaults={envDefaults}/>} />
                <Route path="/GameTime"
                    element={<GameTime envDefaults={envDefaults}/>} />
                <Route path="/GameOrderConfirmation"
                    element={<GameOrderConfirmation envDefaults={envDefaults}/>} />
                <Route path="/*"
                    element={<Login envDefaults={envDefaults} setConnect={setConnect} connect={connect} />} />

            </Routes>
        </div>
    )
}

export default Routing;