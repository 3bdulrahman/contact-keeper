import React,{useContext} from 'react'
import alertContext from '../../context/alert/alertContext'
 const Alert = () => {
    const context = useContext(alertContext)
    return (
        <div>
            { context.alert.length>0 && context.alert.map(alert=>(
                 <div id={alert.id} className={`alert alert-${alert.type}`}>
                     {alert.msg}
                 </div>
            )) }
        </div>
    )
}

export default Alert 
