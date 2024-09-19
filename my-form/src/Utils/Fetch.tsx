const FetchData = async (url: string, data?: any) => {
    if (data) {
      console.log(data);
      const response = await fetch(url, data);
      return await response.json();
    } else {
      const response = await fetch(url);
      return await response.json();
    }
  };
  
  export default FetchData;
  