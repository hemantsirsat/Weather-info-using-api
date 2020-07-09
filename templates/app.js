$("#check").click(function(){
    console.log('Hello')
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=7de7313c646f15c056b5daaeda647efa",function(data){
        var place = data.name;
        place = "City: " + place;
        $('.name').append(place);

        console.log(data);

        var temp = data.main.temp;
        temp = (temp-32)*(5/9);
        temp = "Temperature: " + temp;
        var feels_like = data.main.feels_like;
        feels_like = (feels_like-32)*(5/9);
        feels_like = "Feels Like: " + feels_like;

        $('.Current-Temperature').append(temp);
        $('.Feels-like').append(feels_like);
    });
});