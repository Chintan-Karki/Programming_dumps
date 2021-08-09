// Required 'immer' npm package
import { produce } from "immer";

let demo_obj = {
	name: "Chintan",
	address: "karki",
};

// Using immer for mutation

const app = (some_obj) => {
	return produce(some_obj, (new_mutated_obj) => {
		new_mutated_obj.name = "Another Chintan";
		new_mutated_obj.isLearningRedux = true;
	});
};

let updated_obj = app(demo_obj);
console.log(demo_obj);
console.log(updated_obj);
