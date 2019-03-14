function list(
	state={
		loading:true,
		data:[]
	},action){
	switch(action.type){
		case "LIST_UPDATE":
			return {
				loading:true,
				data:state.data
			}
			break;
		case "LIST_UPDATE_SUCCESS":
			return {
				loading:false,
				data:action.data.data
			}
			break;
		case "LIST_UPDATE_ERROR":
			return {
				loading:false,
				data:[]
			}
			break;
		default: return state;
	}
}

export default list;