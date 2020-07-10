import React from "react";
import { Row, Col, Checkbox } from "antd";
import Icon from "@ant-design/icons";

const TodoItem = ({ id, completed, onCompleteTodo, text, onDeleteTodo }) => (
  <Col span={24} className="todo">
    <Row>
      <Col span={2} className="action">
        <Checkbox
          defaultChecked={completed}
          onChange={() => {
            onCompleteTodo(id);
          }}
        />
      </Col>
      <Col span={18}>
        <span
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {text}
        </span>
      </Col>
      <Col span={2} className="action">
        <Icon
          type="delete"
          onClick={() => {
            onDeleteTodo(id);
          }}
        />
      </Col>
    </Row>
  </Col>
);

export default TodoItem;
