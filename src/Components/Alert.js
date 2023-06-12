import React from 'react'

function Alert(props) {
    function capital(word) {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.typeOfMsg} d-flex align-items-center`} role="alert">
                    <div>
                        <strong>{capital(props.alert.typeOfMsg)}: </strong>{props.alert.msg}
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default Alert