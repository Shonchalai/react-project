import MessageItem from "./MessageItem";
import styled from "@emotion/styled";

const Messages = ({ className }) => {
  const messageData = [
    { id: 1, messageText: "Hi" },
    { id: 2, messageText: "Hello" },
    { id: 3, messageText: "Bye" },
  ];

  return (
    <div className={className}>
      <MessageItem
        messageText={messageData[0].messageText}
        id={messageData[0].id}
      />
      <MessageItem
        messageText={messageData[1].messageText}
        id={messageData[1].id}
      />
      <MessageItem
        messageText={messageData[2].messageText}
        id={messageData[2].id}
      />
    </div>
  );
};

export default styled(Messages)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px;
`;
