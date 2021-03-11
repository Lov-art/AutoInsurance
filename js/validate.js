$(".validate").validate({
	rules: {
		name: "required",
		email: {
			required: true,
			email: true
		},
		tel: {
			required: true
		}
	},
	messages: {
		name: "Це поле є обов'язковим для заповнення",
		email: {
			required: "Введите мыло",
			email: "Введите корректное мыло "
		},
		tel: "Це поле є обов'язковим для заповнення"

	}
});