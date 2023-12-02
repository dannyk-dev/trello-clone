import { Models } from "appwrite";

interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inProgress" | "done";

interface ColumnType {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
