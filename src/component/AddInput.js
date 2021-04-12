import addToDo from "../redux/actions";
import { connect } from "react-redux";
function AddInput(props) {
  const handelInput = (e) => {
    if (e.keyCode === 13) {
      props.addToDo(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input type="text" placeholder="Add New Todo" onKeyDown={handelInput} />
    </div>
  );
}
export default connect(null, { addToDo })(AddInput);
