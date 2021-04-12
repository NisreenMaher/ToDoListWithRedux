import React from "react";
import { toggelToDo, deleteToDo } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
function toDoRow(props) {
  const {
    todo,
    showCompleted,
    dataindex,
    done,
    toggelToDo,
    deleteToDo,
  } = props;
  const handelclick = () => toggelToDo(dataindex);

  const onDeltemisson = (e) => {
    e.stopPropagation();
    deleteToDo(dataindex);
  };
  return (
    <li
      data-index={dataindex}
      onClick={handelclick}
      style={{
        color: done ? (!showCompleted ? "gray" : "#666") : "#666",
        textDecoration: done
          ? !showCompleted
            ? "line-through"
            : "none"
          : "none",
      }}
    >
      <span>
        <FontAwesomeIcon icon={faTrash} onClick={onDeltemisson} />
      </span>
      {todo}
    </li>
  );
}
export default connect(null, { toggelToDo, deleteToDo })(toDoRow);
