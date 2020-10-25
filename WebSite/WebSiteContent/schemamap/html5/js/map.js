// When the DOM is loaded, initilize initPage
DOMAssistant.DOMReady(initPage);

function initPage() {
  // Get a reference to the containing div with id='map'
  var map = $$('map');
	
  // Check if map exists
  if(map) {
		
    // Get all the areas of the imagemap
    var country_list = map.getElementsByTagName('AREA');
		
    // Loop through all areas
    for(var i=0; i<country_list.length; i++){
	    $(country_list[i]).style.display = 'none';
			
	    // Assignin an action to the mouseover event
	    $(country_list[i]).addEvent('mouseover', function(e) {
	      // Get the id from the hovered area
	      var country_id = this.id;
				
	      // Extract the "country"-part of the id = the id of the list-item
	      country_id = country_id.substring(country_id.indexOf('_')+1, country_id.length);

        // Set the li to "display: inline" = show it
	      $$(country_id).setStyle('display', 'inline');
	    });
			
	    // Assign an action to the mouseout event
	    $(country_list[i]).addEvent('mouseout', function(e) {
	      // Get the id from the hovered area
	      var country_id = this.id;
				
	      // Extracti the "country"-part of the id = the id of the list-item
	      country_id = country_id.substring(country_id.indexOf('_')+1, country_id.length);
				
	      // Set the li to "display: none" = hide it
	      $$(country_id).setStyle('display', 'none');
	    });
			
      $(country_list[i]).addEvent('click', function(e) {
	      var country_id = this.id;
	      country_id = country_id.substring(country_id.indexOf('_')+1, country_id.length);
	      alert('You clicked ' + country_id)
	      DOMAssistant.preventDefault(e);
	    });
	  }
	}
}