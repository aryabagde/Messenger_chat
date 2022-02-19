const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachmenst"
                className = "message-image"
                style={{ float: 'right'}}

            />
        )
    }
    return(
        <div className="message" style ={{float: 'right', marginRight:'180px', color: 'white', backgroundColor: '#3b2a50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;