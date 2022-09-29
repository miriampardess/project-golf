import React, { useState, useEffect } from 'react';
import Home from './Home'
import { AccountsApiImportFileEnvDefaultsJson, AccountsApiImportFileEnvJson } from '../RequestsApi'

function ImportEnv() {

    const [envDefaults, setEnvDefaults] = useState({});
    useEffect(() => {
        async function importFilesJson() {
            let object, envJson, resEnvJson;
            let portEnvDefaults = '../env.defaults.json'
            let portEnv = '../env.json'
    
            await AccountsApiImportFileEnvJson(portEnvDefaults)
                .then((response) => {
                    if (response !== "false") {
                        envJson = response;
                        object = envJson;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
    
            await AccountsApiImportFileEnvDefaultsJson(portEnv)
                .then((response) => {
                    if (response !== "false") {
                        resEnvJson = response;
                        if (resEnvJson)
                            object = Object.assign(envJson, resEnvJson)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            setEnvDefaults(object);
        } 
        importFilesJson();
    }, []); 

  
    return (
        <div className="ImportEnv">
            {envDefaults.basicRoute ?
                <Home envDefaults={envDefaults} />
                : ""}
        </div>
    );
}
export default ImportEnv;




