import { Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <HStack spacing={4} w="100%" p={2} borderWidth={1} borderRadius="md">
      <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
        {todo.text}
      </Text>
      <IconButton
        aria-label="Delete todo"
        icon={<FaTrash />}
        onClick={() => deleteTodo(todo.id)}
      />
    </HStack>
  );
};

export default TodoItem;