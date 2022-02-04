import { ChatEngine } from 'react-chat-engine';
import './app.css' ;
import ChatFeed from './componenets/ChatFeed';

const App = () => {
    return (
        < ChatEngine 
            height="100vh" // height of the application
            projectID="
            f88f5d10-46ad-4d3f-8df6-e93c19520163"   // String once we create a char application
            userName="aryabagde"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }  // render own component for the entire Chat Feed
        //                                   Spread the props
        />
    );
}

export default App;