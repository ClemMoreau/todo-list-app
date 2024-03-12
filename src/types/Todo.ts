import { Colors } from "./Colors.enum";
import { Priority } from "./Priority.enum";

export interface Todo {
  title: string;
  color: Colors;
  priority: Priority;
}
