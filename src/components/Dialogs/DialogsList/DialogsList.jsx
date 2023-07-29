import DialogItem from "./DialogItem";
import styled from "@emotion/styled";

const DialogsList = ({ className, dialogs }) => {

  const dialogsElement = [dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} photoUrl={ d.photoUrl} />)];

  return (
    <div className={className}>
      <h5>Members</h5>
      {dialogsElement}
    </div>
  );
};

export default styled(DialogsList)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  min-width: 300px;
  background-color: #f7f1fd;
  border: 1px solid #f6f6f6;
  border-radius: 12px;
  line-height: 26px;
  margin: 40px;

  & > h5 {
    position: relative;
    margin-bottom: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    color: #4f515b;

    &:after {
      content: "";
      display: block;
      background: #5561e2;
      height: 2px;
      width: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;
