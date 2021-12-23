export const pingFetch = async() => {

    const response = await fetch('http://localhost:8080/getall?limit=60')
    const data = await response.json();

    return data;

}