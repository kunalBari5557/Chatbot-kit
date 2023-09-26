import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import StartSlow from './StartSlow';

const config = {
  botName: "Admin",
  initialMessages: [createChatBotMessage(`Hello user, Please share your concern`,{
    widget:"startSlow"
  })],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
        widgetName: 'startSlow',
        widgetFunc: (props) => <StartSlow {...props} />,
      }
]
};

export default config;