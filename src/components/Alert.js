import React from "react";

export default function Alert(props) {

    //capitalize function
    const capitalize = (word) => {
        const lowerWord = word.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
  return (
    <>
      {
        props.alert && (<div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
      </div>
      )}
    </>
  );
}
