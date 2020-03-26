import { action } from "typesafe-actions";

export enum actionTypes {
  ADDTODO = "ADD",
  DELETE = "DELETE",
  TRANSFER = "TRANSFER",
  ADDNOTE = "ADDNOTE"
}

export const todoActions = {
  add: (id: number, name: string, content: string, priority: string) =>
    action(actionTypes.ADDTODO, { id, name, content, priority }),
  delete: (idx: number) => action(actionTypes.DELETE, idx),
  transfer: (from: number, to: number, todo: number) =>
    action(actionTypes.TRANSFER, { from, to, todo }),
  addNote: (noteId: number, todoId: number) =>
    action(actionTypes.ADDNOTE, { noteId, todoId })
};
