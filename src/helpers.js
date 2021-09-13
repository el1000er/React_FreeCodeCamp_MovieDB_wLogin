// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState=stateName=>{
  const sessionState= sessionStorage.getItem(stateName);

  // && the author of the tutorial name this action of && as short circuit
  //if we finde something in the sessionState, it will return what's on the right, otherwise will return  null
  //we can't return it as is though, because we can only write to localStorage and sessionStorage strings,
  //then to retrieve we will have to parse it as JSON 
  return sessionState && JSON.parse(sessionState);
};