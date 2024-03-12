import { Grid, Paper } from "@mui/material";
import { Priority } from "../../types/Priority.enum";
import { Todo } from "../../types/Todo";
import TodoItem from "./TodoItem/TodoItem";
import { Colors } from "../../types/Colors.enum";

interface TodoGridProps {
  todoList: Todo[];
}

const TodoGrid = ({ todoList }: TodoGridProps) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(Priority).map((priority, index) => {
        return (
          <Grid item xs={2.4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 1,
                mb: 2,
                display: "flex",
                justifyContent: "center",
                backgroundColor: Colors[priority as keyof typeof Colors]
              }}
            >
              {priority}
            </Paper>
            {todoList
              .filter(
                (todo) => todo.priority.toUpperCase() === priority.toUpperCase()
              )
              .map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
              ))}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TodoGrid;
