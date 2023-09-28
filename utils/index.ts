export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '28bbdd43a5msh61100910d85c1cbp169336jsn13f2f7a3d43c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla ',{
    headers: headers,
});
const result=await response.json();
return result;
}