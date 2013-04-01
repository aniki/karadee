$(document).ready(function(){
	// namespace
	var karadee = {};
	
	karadee.sheet = {
		
		setEvents : function() {
			this.el.bind('change', function(e){
				alert($(e.target).prop('files')[0].name);
			});
		},
		
		init : function(el) {
			this.el = $(el);
			this.setEvents();
		}
	}
	
	karadee.sheet.init('.portrait input[type="file"]');
	
});
