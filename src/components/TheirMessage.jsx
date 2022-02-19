const TheirMessage = ( {lastMessage, message} ) => {
    // want to know if that's the first mssg by that user
    // the boolean variable isFirstMessageByUser will tells us if tat's the first message by the user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;
    return(
        <div className="message-row">
            { 
                isFirstMessageByUser && ( // if firstmessagebyuser TRUE then we use && operator
                    <div                  // with self closing div

                        className="message-avatar"
                        style={{backgroundImage: `url(${message?.sender?.avatar})`}} //dynamic logic in template string, if condition is true then avatar is bg img
                    />
                )
            }
             {/* When first message is not by user */}
            {
                message?.attachments?.length > 0
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachmenst"
                        className = "message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}

                    />
                ) : (
                    <div className="message" style ={{float: 'left', backgroundColor: '#cabcdc', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                        {message.text}
                    </div>
                )
            }

        </div>
    )
}

export default TheirMessage;