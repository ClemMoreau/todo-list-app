import {
  Toolbar,
  FormControl,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  AppBar
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Todo } from "../types/Todo";
import React, { useState } from "react";
import { Priority } from "../types/Priority.enum";
import { Colors } from "../types/Colors.enum";

interface AppBarProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const AppMenuBar = ({ todoList, setTodoList }: AppBarProps) => {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    priority: Priority.NONE,
    color: Colors.NONE
  });

  const handleAdd = () => {
    setTodoList([...todoList, todo]);
    setTodo({
      ...todo,
      title: ""
    });
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <h1 style={{ flexGrow: 1 }}>List Generator</h1>
        <div
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
        >
          <FormControl variant="standard" sx={{ p: 1 }}>
            <Box display="flex">
              <TextField
                value={todo.title}
                onChange={(e) =>
                  setTodo({
                    ...todo,
                    title: e.target.value
                  })
                }
                variant="standard"
                label="Title"
              />
              <Select
                sx={{ m: 2, minWidth: 120 }}
                value={todo.priority}
                onChange={(e) =>
                  setTodo({
                    ...todo,
                    priority:
                      Priority[
                        e.target.value.toUpperCase() as keyof typeof Priority
                      ],
                    color:
                      Colors[
                        e.target.value.toUpperCase() as keyof typeof Colors
                      ]
                  })
                }
              >
                <MenuItem value=""> --- </MenuItem>
                <MenuItem value="none">❄️ None</MenuItem>
                <MenuItem value="low">✅ Low</MenuItem>
                <MenuItem value="medium">⚡️ Medium</MenuItem>
                <MenuItem value="high">🚨 High</MenuItem>
                <MenuItem value="urgent">🌋 Urgent</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </div>
        <Button
          disabled={todo.title === ""}
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Create List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppMenuBar;
