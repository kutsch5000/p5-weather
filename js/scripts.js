if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
        
      console.log(weather);
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      var state= weather.region;

      var currently=weather.currently;
      
      // Output to hooks in HTML
      $('.temp').text(temp + "º F");
      $('.city').text(city+", "+state);
      if (temp <= 32){
      $('.conditions').text("It's "+currently + " and Hell has frozen over");
      $('div:nth-child(1)').css('background-image', 'url("./img/frozenHell.jpg")');
    };
      if (temp > 32 && temp < 80){
      $('.conditions').text("It's "+currently + " and a great day in Heaven");
      $('div:nth-child(1)').css('background-image', 'url("./img/heaven.jpg")');
    };
      if (temp >= 80){
      $('.conditions').text("It's "+currently + " and it's hot as Hell");
      $('div:nth-child(1)').css('background-image', 'url("./img/hell4.jpg")');
    };
      
      }
  
  });
    
};