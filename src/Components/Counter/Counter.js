import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Tabs } from "antd";
import { todosSelector } from "../../Containers/Counter/selectors";
import TodoList from "../TodoList/TodoList";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import AppHeader from "../AppHeader/AppHeader";

const { TabPane } = Tabs;

const Counter = () => {
  const todos = useSelector(todosSelector);

  return (
    <div className="App">
      <div id="wrapper">
        <AppHeader />
        <AddTodoForm />
        <Row>
          <Col span={24}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Todos" key="1">
                <Row className="todos">
                  <TodoList
                    todos={todos.filter((todo) => !todo.completed)}
                  />
                </Row>
              </TabPane>
              <TabPane tab="Completed" key="2">
                <Row className="todos">
                  <TodoList
                    todos={todos.filter((todo) => todo.completed)}
                  />
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Counter;
