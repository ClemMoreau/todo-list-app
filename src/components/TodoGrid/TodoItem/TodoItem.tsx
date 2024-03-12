import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { Todo } from "../../../types/Todo";

export interface TodoItemProps {
  index: number;
  todo: Todo;
}

const TodoItem = ({ todo, index }: TodoItemProps) => {
  return (
    <Card key={index} sx={{ my: 1 }}>
      <CardHeader sx={{ backgroundColor: todo.color }} title={todo.title} />
      <CardContent>blablabla...</CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default TodoItem;
