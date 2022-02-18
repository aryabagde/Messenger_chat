import MessageForm from '.Messageform';
import MyMessage from '.MyMessage';
import TheirMessage from '.TheirMessage';

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
                const message = messages[key];
                const lastMessageKey = index === 0 ? null:keys[index-1];
                const isMyMessage = uderName === message.sender.username;
            })


        }

        renderMessages()
    return(
        <div>
            ChatFeed
        </div>
    );
};

export default ChatFeed;