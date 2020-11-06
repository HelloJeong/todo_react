import React from 'react';
import './Template.css';
import { MdAdd, MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

function Template() {
  return (
    <div className="container">
      <div className="todo-header">일정 관리</div>
      <div className="todo-insert">
        <input className="todo-input" type="text" placeholder="할 일을 입력하세요" />
        <button className="todo-btn-add">
          <MdAdd />
        </button>
      </div>
      <div className="todo-list">
        <ul>
          <li className="checked">
            <div className="todo-check">
              {/* <MdCheckBoxOutlineBlank /> */}
              <MdCheckBox />
            </div>
            <span>item1</span>
            <div className="todo-remove">
              <MdRemoveCircleOutline />
            </div>
          </li>
          <li>
            <div className="todo-check">
              <MdCheckBoxOutlineBlank />
            </div>
            <span>item1</span>
            <div className="todo-remove">
              <MdRemoveCircleOutline />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Template;
