function calculateReturns(data) {
  const returns = [];

  // Calculate returns for each month
  const dates = Object.keys(data.attributes).sort();
  for (let i = 0; i < dates.length - 1; i++) {
    const currentMonthOpen = data.attributes[dates[i]].open;
    const nextMonthOpen = data.attributes[dates[i + 1]].open;

    // Calculate return rounded to 0.2%
    const returnPercentage = Math.round(((nextMonthOpen - currentMonthOpen) / currentMonthOpen) * 500) / 5;
    returns.push(returnPercentage);
  }

  // Count occurrences of each return
  const returnCounts = {};
  returns.forEach(returnPercentage => {
    returnCounts[returnPercentage] = (returnCounts[returnPercentage] || 0) + 1;
  });

  // Calculate probability distribution
  const totalReturns = returns.length;
  const probabilityDistribution = {};
  Object.keys(returnCounts).forEach(returnPercentage => {
    const probability = returnCounts[returnPercentage] / totalReturns;
    probabilityDistribution[returnPercentage] = probability;
  });

  return probabilityDistribution;
}
function filterFirstOfWeek(data) {
  return data;
}
function filterFirstOfMonth(data) {
  const result = {};

  // Create an object to store the latest date for each month
  const latestDates = {};

  // Iterate through the keys in the original object
  Object.keys(data.attributes).forEach((date) => {
    const currentMonth = date.substring(0, 7);

    // Check if the current date is the first in its month or if it is later than the stored latest date
    if (!latestDates[currentMonth] || date < latestDates[currentMonth]) {
      latestDates[currentMonth] = date;
      result[date] = data.attributes[date];
    }
  });

  // Create a new object with the filtered values
  const filteredObject = {
    ...data,
    attributes: result,
  };

  return filteredObject;
}
function filterFirstOfYear(data) {
  const result = {};

  // Create an object to store the latest date for each year
  const latestDates = {};

  // Iterate through the keys in the original object
  Object.keys(data.attributes).forEach((date) => {
    const currentYear = date.substring(0, 4);

    // Check if the current date is the first in its year or if it is later than the stored latest date
    if (!latestDates[currentYear] || date < latestDates[currentYear]) {
      latestDates[currentYear] = date;
      result[date] = data.attributes[date];
    }
  });

  // Create a new object with the filtered values
  const filteredObject = {
    ...data,
    attributes: result,
  };

  return filteredObject;
}
const fetchData = async (ticker) => {
  const url = `https://seeking-alpha.p.rapidapi.com/symbols/get-chart?symbol=${ticker}&period=MAX`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f316773c86msh446a73fb0431545p1e52a4jsn1bb54ad799c8',
      'X-RapidAPI-Host': 'seeking-alpha.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result; // Assign result to inputData
  } catch (error) {
    console.error(error);
  }
}
function randomReturn(object){
  let arr1=Object.entries(object)
  let arrProb=[]
  arr1.forEach(function(element){
    for(let i=0;i<element[1]*100000;i++){
      arrProb.push(element[0])
    }
  })
  let index=Math.round(Math.random()*arrProb.length)
  return arrProb[index]
}

fetchData('BTC').then(function (result) {
  let inputData = JSON.parse(result);
  const filteredData = filterFirstOfWeek(inputData);
  let end = calculateReturns(filteredData);
  console.log(randomReturn(end))
})

function develop(startingAmount,frequence,contributionAmount,inflationRate,years,portfolio){
  
}







