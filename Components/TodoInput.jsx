"use client";

import React, { useState } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  return (
    <HStack
      marginTop={"-3.5"}
      boxShadow="2xl"
      p="8"
      rounded="md"
      bg="white"
      color={"purple.700"}
      textAlign={"center"}
    >
      <Input
        type={"text"}
        variant="flushed"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todo here...."
        mr={"2"}
      />
      <Button
        bg="purple.700"
        variant="ghost"
        color={"white"}
        onClick={() => addTodo(text)}
      >
        Add Todo
      </Button>
    </HStack>
  );
}
