"use client";

import { ListItem, HStack, Text, Spacer } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function TodoItem({ todo, DeleteTodo, TodoDone }) {
  let isDoneColor = todo.isDone === true ? "green" : "purple";
  let isDoneStyle = todo.isDone === true ? "del" : "";
  return (
    <ListItem bg="purple.100" p={4} borderRadius="xl" boxShadow="lg">
      <HStack>
        <Icon as={MdCheckCircle} boxSize="6" color={`${isDoneColor}.500`} />
        {/* <Spacer /> */}
        <Text textAlign={"left"} as={`${isDoneStyle}`}>
          {todo.name}
        </Text>
        <Spacer />
        <HStack>
          <CheckIcon
            boxSize={6}
            color="green.400"
            onClick={() => TodoDone(todo.id)}
          />
          <DeleteIcon
            boxSize={6}
            color="red.400"
            onClick={() => DeleteTodo(todo.id)}
          />
        </HStack>
      </HStack>
    </ListItem>
  );
}
