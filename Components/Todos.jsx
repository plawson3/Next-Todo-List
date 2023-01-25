import React, { useState } from "react";
import TodoInput from "../Components/TodoInput";
import AllTodos from "../Components/AllTodos";
import { Stack, Card, Heading, CardHeader, CardBody } from "@chakra-ui/react";

export default function Todos() {
  let [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo === "") {
      return alert("Todo can't be Blank!");
    } else {
      const isExists = todoList.find(
        (x) => x.name.toLowerCase().trim() === newTodo.toLowerCase().trim()
      );
      if (isExists !== undefined) {
        return alert("Todo with the same Name Exists!!");
      }

      let _id = todoList.length + 1;
      const createTodo = { id: _id, name: newTodo, isDone: false };
      setTodoList([...todoList, createTodo]);
    }
  };

  const DeleteTodo = async (_id) => {
    await setTodoList(todoList.filter((x) => x.id !== _id));
  };

  const TodoDone = (_id) => {
    const _idx = todoList.findIndex((x) => x.id === _id);
    todoList[_idx].isDone = true;
    setTodoList(todoList);
    alert("Todo Updated");
  };

  return (
    <Stack mt={"10"} w="2xl" ml={"32%"}>
      <Card size="md" bg={"purple.100"} p="4" borderRadius="3xl">
        <CardHeader>
          <Heading
            boxShadow="2xl"
            p="6"
            rounded="md"
            bg="white"
            color={"purple.700"}
            textAlign={"center"}
          >
            Todo List
          </Heading>
        </CardHeader>
        <CardBody>
          <TodoInput addTodo={addTodo} />
          <AllTodos
            todoList={todoList}
            DeleteTodo={DeleteTodo}
            TodoDone={TodoDone}
          />
        </CardBody>
      </Card>
    </Stack>
  );
}
