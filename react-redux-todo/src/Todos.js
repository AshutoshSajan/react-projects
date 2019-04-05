const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export default function Todos(state = [], action) {
	console.log(state, action, "todos")
	switch (action.type) {
		case ADD_TODO:
			return [...state, {
          text: action.text,
          completed: false
        }]
		case REMOVE_TODO:
			return [...state,{
				
			}]
		default:
			return state
	}
}