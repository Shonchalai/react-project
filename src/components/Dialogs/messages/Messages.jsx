import MessageItem from "./MessageItem";
import styled from "@emotion/styled";

const Messages = ({ className }) => {
  const messages = [
    { id: 1, messageText: "Hi" },
    { id: 2, messageText: "Hello" },
    { id: 3, messageText: "Bye" },
  ];

  const messagesElement = [messages.map(m => <MessageItem messageText={m.messageText} id={m.id} key={m.id}/>)];

  return (
    <div className={className}>
      {messagesElement}
    </div>
  );
};

export default styled(Messages)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px;
`;
