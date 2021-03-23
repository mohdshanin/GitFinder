import React, { useState } from 'react';

const TodoList = ({ listItem, onselect, id }) => {
  const [bdrBtm, setBdrBtm] = useState('none');
  const [edit, setEdit] = useState('false');

  const listStyle = () => {
    edit === 'false' ? setEdit('true') : setEdit('false');
  };

  const itemStyle = () => {
    if (bdrBtm === 'none') {
      setBdrBtm('5px solid red');
    } else if (bdrBtm === '5px solid red') {
      setBdrBtm('5px solid green');
    } else {
      setBdrBtm('none');
    }
  };

  return (
    <div className="todo-style">
      <i
        className="fa fa-times"
        aria-hidden="false"
        onClick={() => {
          onselect(id);
        }}
      />
      <li
        style={{ borderBottom: bdrBtm, borderRight: bdrBtm }}
        onDoubleClick={listStyle}
        onClick={itemStyle}
        contentEditable={edit}
      >
        {listItem}
      </li>
    </div>
  );
};

export default TodoList;
