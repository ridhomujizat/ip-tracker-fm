export const getGeo = async ({ ipAddress }) => {
  try {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_asw4peyFHXhDPmKNyxQqrQeDqlFTM&ipAddress=${ipAddress}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getCurrentIP = async () => {
  try {
    const url = `https://ipinfo.io/?callback=getIP&token=57f5ff641e8b28`;
    const response = await fetch(url);
    const data = await response.text();
    const parsing = data
      .replace("/**/ typeof getIP === 'function' && getIP(", "")
      .replace(");", "");
    return JSON.parse(parsing)
  } catch (error) {
    return error;
  }
};
