import MessageItem from "./MessageItem";
import styled from "@emotion/styled";

const Messages = ({ className, messages }) => {

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
