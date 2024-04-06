const fetchLocalStorageValues = () => {
    const arrayOfCities = localStorage.getItem('cities');
    console.log(arrayOfCities);
    const extractedArrayOfCities = JSON.parse(arrayOfCities);
    return extractedArrayOfCities;
};