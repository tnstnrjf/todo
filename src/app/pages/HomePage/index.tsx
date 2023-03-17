import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      content: '첫번째 투두',
      completed: true,
      editing: false,
    },
    {
      id: '2',
      content: '두번째 투두',
      completed: false,
      editing: false,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput
            setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
            <TodoItem
              todo={{
                id: '1',
                completed: true,
                content: 'TODO 입니다.',
                editing: false,
              }}
            ></TodoItem>
            <TodoItem
              todo={{
                id: '2',
                completed: false,
                content: 'TODO 입니다 2.',
                editing: false,
              }}
            ></TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
