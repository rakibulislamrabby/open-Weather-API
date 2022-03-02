const API_KEY = `cb2090ac2337df16d084f36f5d60c73e`;
const searchTemperature = () => {
    const city = document.getElementById("city-name").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setinnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temp => {
    setinnerText("city", temp.name)
    setinnerText("temperature", temp.main.temp);
    setinnerText("condition", temp.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("icon");
    imgIcon.setAttribute("src", url);
}