export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
// type Actions =
//   | {
//       type: "add";
//       payload: string;
//     }
//   | {
//       type: "remove";
//       payload: number;
//     }
//   | {
//       type: "done";
//       payload: number;
//     };

// const TodoReducer = (state: Todo[], action) => {};
// import React from "react";
// import { useReducer } from "react";
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return <div>ReducerExample</div>;
// };

// export default ReducerExample;
