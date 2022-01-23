import React from "react";
import ItemForm from "./components/ItemForm";
import "./App.css";

function App() {

  const [fields, setFields] = React.useState([
    {
      label: "name",
      key: "name",
      type: "text",
      value: "",
    },
    {
      label: "email",
      key: "email",
      type: "email",
      value: ""
    },
    {
      label: "Enter your mobile number",
      key: "mobileno",
      type: "number",
      value: ""
    },
    {
      label: "Hobbies",
      key: "hobby",
      type: "checkbox",
      value: "",
      options: [{ label: "Cricket", value: "cricket" }, { label: "Football", value: "football" }]
    },
    {
      label: "Gender",
      key: "gender",
      type: "radio",
      value: "",
      options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }]
    }
  ])

  const save = (values) => {
    console.log("SAVE => ", values);
  }

  const get = () => {
    console.log("GETTT => ");
  }

  return (
    <div className="App">
      <h2 className="">
        Dynamic Form
      </h2>
      <ItemForm fields={fields} save={save} get={get} />
    </div>
  );
}

export default App;
