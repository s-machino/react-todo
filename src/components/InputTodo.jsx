import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ccc',
  height: '30px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
