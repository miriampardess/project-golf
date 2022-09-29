import React, { useState } from 'react';

import Routing from '../routes/Routing'

function Home(props) {
    const { envDefaults } = props;
    const [connect, setConnect] = useState(false);

    return (
        <div>
            <Routing envDefaults={envDefaults} setConnect={setConnect} connect={connect} />

        </div>
    )
}
export default Home;