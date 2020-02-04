export const fetchAllForcesData = async () => {
  try {
    const res = await fetch(`https://data.police.uk/api/forces`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('ERROR fetching data');
  }
};
