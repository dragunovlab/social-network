import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Dimych" id="1" />
                <DialogsItem name="Andrey" id="2" />
                <DialogsItem name="Sveta" id="3" />
                <DialogsItem name="Sasha" id="4" />
                <DialogsItem name="Viktor" id="5" />
                <DialogsItem name="Valera" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;