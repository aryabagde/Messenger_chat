import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
// If we console.log(props) we will get an object which will consist all the info
// regarding chatrooms, messages, id etc.

    const {chats, activeChat, userName, messages} = props; // we did not de structure from props as a parameter coz we need it later

    const chat = chats && chats[activeChat]; // if chats exist then find chats in the active chats
    // functional component used for generating messages                           
    const renderMessages = () => {
            const keys = Object.keys(messages); // to extract all the messages
    
           // console.log(keys)  //keys are nthg just the ids of the messages

            return keys.map((key, index) => {  
                const message = messages[key];                      // since we got the keys we will navigate to that message
                const lastMessageKey = index === 0 ? null:keys[index-1]; // need to know if this was the last mssg that was sent, if index is 0 which means no mssg else send the last mssg 
                const isMyMessage = userName === message.sender.username; // need to know if this is my mssg
                // Now we have the info to create different types of messages

                return(
                    //this div will act as mssg and since we are mapping we need keys
                    <div key={`msg_${index}`} style={{width: '100%'}}>  
                        <div classname="message-block">
                            { // render the message
                                isMyMessage
                                ? <MyMessage message={message} /> // props
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                            }
                        </div>
                       {/* people who read that message */}
                        <div className="read-receipts" style={{marginRight: isMyMessage ? '180px' : '0px' , marginLeft: isMyMessage ? '0px': '68px'}}>
                            read-receipts
                        </div>
                    </div>
                )
            })


        }

        renderMessages()

        if(!chat) return 'Lodaing...'; // considering this here we will always know that chat is chat down below

    return(
        <div className='chat-feed'>
            <div classname="chat-title-container">
            {/* div where will render our title */}
            {/* this ? makes sure we have chat before we try to access title variable*/}
                <div className='chat-title'>{chat ?.title}</div>  
                <div className='chat-subtitle'>
                {/* subtitle of our chat */}
                    {chat.people.map((person) => `${person.person.username}`)} 
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className='message-form-container'>
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
};

export default ChatFeed;