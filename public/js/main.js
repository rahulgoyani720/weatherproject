const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById("temp_real_val")
const hidedata = document.querySelector(".middle_layer")

const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value.trim();
    if (cityval === "") {
        city_name.innerText = `Please write the name before search`;
        hidedata.classList.add("data_hide")
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2e43ae216358efe3f39b7703dea6e212`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(arrdata);
            city_name.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;

            const tempmood = arrdata[0].weather[0].main;
            //condition check to    sunny or cloud
            if (tempmood === 'clear') {
                temp_status.innerHTML =
                    "<i class='fas fa-sun mt-5' style='color: orange'></i> "
            } else if (tempmood === 'clouds') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud mt-5' style='color: #f1f2f6'></i> "
            } else if (tempmood === 'Rain') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain mt-5' style='color: #a4b0be'></i> "
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun mt-5' style='color: orange '></i> "
            }
            hidedata.classList.remove("data_hide")

            
        } catch (error) {
            city_name.innerText = `Please write the name before search`;
            hidedata.classList.add("data_hide")

        }
    }
}

submitbtn.addEventListener("click",getinfo);
