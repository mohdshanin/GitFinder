import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';

const TodoList = ({ listItem, onselect, id }) => {
  const [bdrLeft, setBdrLeft] = useState('none');
  const [cross, setCross] = useState('none');
  const [edit, setEdit] = useState('false');

  const listStyle = () => {
    edit === 'false' ? setEdit('true') : setEdit('false');
  };
  const remove = () => {
    cross === 'none' ? setCross('line-through') : setCross('none');
  };

  const itemStyle = () => {
    if (bdrLeft === 'none') {
      setBdrLeft('5px solid red');
    } else if (bdrLeft === '5px solid red') {
      setBdrLeft('5px solid green');
    } else {
      setBdrLeft('none');
    }
  };

  return (
    <div className="todo-style">
      {cross === 'none' ? (
        <Tooltip title="Cut Item">
          <RemoveShoppingCartIcon className="cross" onClick={remove} />
        </Tooltip>
      ) : (
        <Tooltip title="Undo Item">
          <PlaylistAddIcon className="plus" onClick={remove} />
        </Tooltip>
      )}
      <Tooltip title="Double Click To Edit">
        <span className="list">
          <li
            style={{
              borderLeft: bdrLeft,
              textDecoration: cross,
            }}
            onDoubleClick={listStyle}
            onClick={itemStyle}
            contentEditable={edit}
          >
            {listItem}
          </li>
          <Tooltip title="Remove">
            <DeleteForeverIcon
              className="Remove"
              onClick={() => {
                onselect(id);
              }}
            />
          </Tooltip>
        </span>
      </Tooltip>
    </div>
  );
};

export default TodoList;
