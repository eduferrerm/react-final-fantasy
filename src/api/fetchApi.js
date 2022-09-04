import axios from "axios";

export class Api {
  constructor(){
    this.data = null;
    this.loading = true;
    this.error = null;
    this.url = null;
  }
    
  fetch = async (providedURL) => {
    this.url = providedURL;
    
    try {
      const response = await axios.get(providedURL);
      this.data = response.data;
      this.error = null;
    } catch (err) {
      this.error = (err.message);
      this.data = (null);
    } finally {
      this.loading = false;
    }
    console.log('this data:', this.data);
  }

  getData = () => {
    return this.data;
  }
}