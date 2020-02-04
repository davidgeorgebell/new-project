export const fetchAllForcesData = async () => {
  try {
    const dataResponse = await fetch(`https://data.police.uk/api/forces`);
    const data = await dataResponse.json();
    console.log(data);
  } catch (err) {
    console.log('ERROR fetching data');
  }
};
