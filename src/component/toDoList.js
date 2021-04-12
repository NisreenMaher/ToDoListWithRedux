import MainBar from "./MainBar";
import AddInput from "./AddInput";
import ToDoRow from "./toDoRow";
import { useState } from "react";
import store from "../redux/store";
import { connect } from "react-redux";

function ToDoList(props) {
  const [toggel, settoggel] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const onHandelCheck = (e) => setShowCompleted(e.target.checked);
  const handelAdd = () => {
    var tog = toggel;
    settoggel(!tog);
  };
  return (
    <div style={{ margin: "auto", width: "450px" }}>
      <MainBar
        handelAdd={handelAdd}
        onHandelCheck={onHandelCheck}
        checkVal={showCompleted}
      />
      {toggel ? <AddInput /> : null}
      <ul>
        {props.todos.map((e, index) => {
          if (showCompleted && !e.done) return null;
          return (
            <ToDoRow
              todo={e.toDo}
              key={index}
              showCompleted={showCompleted}
              dataindex={e.id}
              done={e.done}
            />
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = () => {
  const todos = store.getState();
  return { todos };
};
export default connect(mapStateToProps)(ToDoList);
