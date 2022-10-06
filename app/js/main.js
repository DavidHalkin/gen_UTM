'use strict';
document.addEventListener('DOMContentLoaded', () => {
	// <i class="far fa-eye-slash"></i>
	// const fieldPass = document.querySelectorAll('.input_holder_js');
	// fieldPass.forEach(element => {

	// 	element.addEventListener('click')
	// });
	$(".showComment_js").click(function () {
		$(this).parents(".form-group").find('.hidden_text').slideToggle('fast');
	});
});

// $(function () {
// 	console.log("ready!");
// });