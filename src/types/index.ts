export interface ITaskProps{
  taskId:string;
  taskName:string;
  taskDescription:string;
  taskOwner:string;
}

export interface ILogItemProps {
  logId:string;
  logAuthor:string;
  logMessage:string;
  logTimeStamp:string;
}

export interface IBoardProps {
  boardId : string;
  boardName:string;
  lists : IListProps[]
}

export interface IListProps {
  listId : string;
  listName:string;
  tasks :ITaskProps[]
}