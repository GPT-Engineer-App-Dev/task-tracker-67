import { useState } from "react";
import { Container, VStack, Heading, useColorModeValue } from "@chakra-ui/react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={useColorModeValue("gray.100", "gray.900")}>
      <VStack spacing={8} w="100%">
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </VStack>
    </Container>
  );
};

export default Index;