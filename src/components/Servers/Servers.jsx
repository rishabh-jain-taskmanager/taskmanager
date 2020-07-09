import React from "react";
import Server from './Server'

const Servers = ({ servers, addServer, removeServer }) => {

    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card  ">
                    <div className="card-content ">
                        <span style={{
                            display: 'flex'
                        }}> <blockquote style={{ flex: '1' }}>
                                Servers
                    </blockquote>
                            <button style={{
                                margin: '20px 0',
                                paddingLeft: '1.5rem',
                                display: 'flex',
                                marginLeft: '4rem',
                                background: '#8b8cc9'
                            }}
                                className="btn waves-effect waves-light"
                                type="button"
                                name="action"
                                onClick={() => addServer()}>
                                Add A Server
                            </button>
                        </span>
                        <Server
                            servers={servers}
                            removeServer={removeServer}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Servers;