import axios from 'axios';

const API_URL = 'https://crudcrud.com/api/8735e1acd94f4e6dabd4b028c678c463';

const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    const courses = response.data;
    console.log(courses);
  } catch (error) {
    console.error(error);
  }
};
export default fetchData;