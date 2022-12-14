import IMask from "imask";

export const inputPhone = (input) => {
	var maskOptions = {
		mask: "+{7} (000) 000-00-00",
	};
	IMask(input, maskOptions);
};
