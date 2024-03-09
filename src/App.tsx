import "./App.css";

import AddIcon from "@mui/icons-material/Add";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Toolbar
} from "@mui/material";
import { useState } from "react";

interface Todo {
  title: string;
  priority: "none" | "low" | "medium" | "high" | "urgent";
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({ title: "", priority: "none" });

  return (
    <Stack>
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar>
            <h1 style={{ flexGrow: 1 }}>List Generator</h1>
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
                      priority: e.target.value as any
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
            <Button
              disabled={todo.title === ""}
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              onClick={() => {
                setTodoList([...todoList, todo]);
                setTodo({
                  title: "",
                  priority: "none"
                });
              }}
            >
              Create List
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {todoList
            .filter(
              (todo) => todo.priority === "high" || todo.priority === "urgent"
            )
            .map((todo, index) =>
              todo.priority === "high" ? (
                <Paper
                  elevation={3}
                  key={index}
                  sx={{ backgroundColor: "#ED7F10" }}
                >
                  {todo.title}
                </Paper>
              ) : (
                <Paper key={index} sx={{ backgroundColor: "#FF0000" }}>
                  {todo.title}
                </Paper>
              )
            )}
        </Grid>
        <Grid item xs={4}>
          {todoList
            .filter((todo) => todo.priority === "medium")
            .map((todo, index) => (
              <Paper
                elevation={3}
                key={index}
                sx={{ backgroundColor: "#FFFF00" }}
              >
                {todo.title}
              </Paper>
            ))}
        </Grid>
        <Grid item xs={4}>
          {todoList
            .filter(
              (todo) => todo.priority === "none" || todo.priority === "low"
            )
            .map((todo, index) =>
              todo.priority === "low" ? (
                <Paper key={index} sx={{ backgroundColor: "#008000" }}>
                  {todo.title}
                </Paper>
              ) : (
                <Paper key={index} sx={{ backgroundColor: "#77B5FE" }}>
                  {todo.title}
                </Paper>
              )
            )}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
