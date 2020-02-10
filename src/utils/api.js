export const fetchAllForcesData = async () => {
  try {
    const res = await fetch(`https://data.police.uk/api/forces`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('ERROR fetching data');
  }
};

export const fetchSpecificForceData = async (nameOfForce) => {
  try {
    const res = await fetch(`https://data.police.uk/api/forces/${nameOfForce}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('ERROR fetching data');
  }
};
