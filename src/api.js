export const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchData = async () => {
  try {
    const dataResponse = await fetch(``);
    const data = await dataResponse.json();

    console.log(data);
  } catch (err) {
    console.log('ERROR fetching data');
  }
};
