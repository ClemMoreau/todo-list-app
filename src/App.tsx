import "./App.css";

import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Todo } from "./types/Todo";
import TodoGrid from "./components/TodoGrid/TodoGrid";
import AppMenuBar from "./components/AppBar";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <Stack>
      <Box>
        <AppMenuBar todoList={todoList} setTodoList={setTodoList} />
      </Box>
      <Box sx={{ mx: 2, my: 4 }}>
        <TodoGrid todoList={todoList} />
      </Box>
    </Stack>
  );
}

export default App;
