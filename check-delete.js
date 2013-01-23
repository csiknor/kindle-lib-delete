$(document).ready(function() {
	$('#ordersSortingRow .firstCol').append('<input type="checkbox" name="asinAll">').click(function(e) {
		$('input[name=asin]').each(function(i, item) {
			item.checked = e.target.checked;
		});
	});
	$('.firstCol').css('width', 'auto');
	$('.rowBodyCollapsed').each(function(i){
		$('#Row'+(i+1)+'Button')
			.css('white-space', 'nowrap')
			.prepend('<input type="checkbox" name="asin" value="'+$(this).attr('asin')+'">');
	});

	$('#pagination').prepend('<input type="button" id="bulkDelete" value="Bulk Delete">');
	$('#bulkDelete').click(function() {
		var l = $('input[name=asin]:checked').length;
		if (l > 0) {
			if (confirm('Are your sure to delete ' + (l > 1 ? l + ' selected items' : 'the selected item') + '?')) {
				$('input[name=asin]:checked').each(function() {
					Fion.deleteItem('deleteItem_'+$(this).val());
				});
			}
		} else {
			alert('Please select at least one item to delete!');
		}
	});
});
