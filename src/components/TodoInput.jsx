import { useState } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={4}>
        <Input
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" colorScheme="blue">
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default TodoInput;