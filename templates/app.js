$("#check").click(function(){
    var city = document.getElementById("city").value;
    var n = city;
    city = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=7de7313c646f15c056b5daaeda647efa"
    $.getJSON(city,function(data){
        var place = data.name;
        $('.name').append(place);
        
        console.log(data);

        var temp = data.main.temp;
        temp = Number(temp) - 273;
        temp.toFixed(2);
        var temp1 = temp;
        temp = "Temperature: " + String(temp);
        var desc = data.weather[0].description;

        $('.Current-Temperature').append(temp);
        $('.description').append(desc);

        if(Number(temp1) < 20){
            document.body.style.backgroundImage = "url('images/cold.jpeg')"; 
        }
        else if(Number(temp1) < 30){
            document.body.style.backgroundImage = "url('images/mild.jpeg')";                    
        }
        else{
            document.body.style.backgroundImage = "url('images/hot.jpeg')"; 
        }
    });
});