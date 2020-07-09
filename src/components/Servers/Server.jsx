import React from "react";

const Server = ({ servers, removeServer }) => {
    const renderServer = servers && servers.map(s => {
        return (
            <span style={{ display: 'flex', marginBottom: '0.5rem' }} key={s.serverId}>
                <i key={`s-${s.serverId}`} style={{ flex: '1', color: s.activeTask ? 'green' : '' }} className="small material-icons">dns</i>
                 <span style={{ flex: '1 1 25%',fontSize: '14px',  paddingTop: '0.5rem' }}>Task Id {s.activeTask? s.activeTask: 'none' }</span>
                {<button style={{
                    flex: '1',
                    background: `${s.deleteRequest? 'red': '#8b8cc9'}`,
                }}
                    className="btn waves-effect waves-light btn-small"
                    type="button" name="action"
                    onClick={()=>removeServer(s.serverId)}>
                    Remove  
                </button>}
            </span>)

    }) 
    return (
        <>{renderServer}</>
    )
}

export default Server;