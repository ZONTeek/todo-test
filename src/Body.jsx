import React from "react";
import "./Body.css";

const Body = (props) => {
    let addMsg = () => {
        props.addMsg();
    };
    let onChange = (e) => {
        let text = e.target.value;
        props.updateMsg(text);
    }
    let msgBody = props.state.msgData.map(t=> <div key={t.id}>{t.msg}</div>)
    return (
        <div>
            <div className="msg">
                {msgBody}
            </div>
            <textarea onChange={onChange}
                value={props.newMsgContent}
                placeholder={"qq"}/>
            <button onClick={addMsg}>Send</button>
        </div>
    )
}

export default Body;