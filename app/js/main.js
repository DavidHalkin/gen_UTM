'use strict';
document.addEventListener('DOMContentLoaded', () => {
	// <i class="far fa-eye-slash"></i>
	// const passBlock = document.querySelectorAll('.input_holder_js'),
	// 	input = document.querySelectorAll('.input_holder_js .form-control');

	$(".toggle_password_js").click(function () {

		$(this).toggleClass("fa-eye fa-eye-slash");
		const input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});


	$(".showComment_js").click(function () {
		$(this).parents(".form-group").find('.hidden_text').slideToggle('fast');
	});
	$(".showTR_js").click(function () {
		$(this).parents("tr").next('.hidden_tr').find('.row_info').slideToggle('fast');
		return false;
	});


});