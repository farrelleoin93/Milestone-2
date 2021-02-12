//------------------------------ Show cities information and display map
const CITY_NAMES = ["hanoi", "sapa", "hoi-an"];
$(document).ready(function () {
    CITY_NAMES.forEach((eachCityName) => {
        $(`#${eachCityName}-info`).click(function () {
            $(`#${eachCityName}`).show();
            $("#map-container").show();
            $(`#${eachCityName}-activities-info`).show();
            const otherCities = CITY_NAMES.filter((eachCity) => eachCity !== eachCityName);
            otherCities.forEach((otherCityItr) => {
                $(`#${otherCityItr}`).hide();
                $(`#${otherCityItr}-activities-info`).hide();
            });
        });
    });
});
