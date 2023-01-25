"use client";

import React from "react";
import TodoItem from "../Components/TodoItem";
import { Stack, List, Text } from "@chakra-ui/react";

export default function AllTodos({ todoList, DeleteTodo, TodoDone }) {
  return (
    <Stack
      maxH={"sm"}
      overflowY="auto"
      h="sm"
      marginTop={"5"}
      boxShadow="2xl"
      p="10"
      rounded="md"
      bg="white"
      sx={
        { 
       '::-webkit-scrollbar':{
              display:'none'
          }
       }
     }
    >
      <List spacing={3}>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} DeleteTodo={DeleteTodo} TodoDone={TodoDone}/>;
        })}
      </List>
    </Stack>
  );
}
