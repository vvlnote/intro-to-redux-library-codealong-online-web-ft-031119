export default function shoppingListItemReducer(state = {items: []}, action) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log(`Current state.items length is ${state.items.length}`);
			console.log(`updating state.itmes legnth to ${state.items.length+1}`);
			return Object.assign({}, state, {items: state.items.concat(state.items.length + 1)});

		default:
			console.log(`Initial state.items length: ${state.items.length}` );
			return state;
	}
}
