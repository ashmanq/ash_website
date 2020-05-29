const dotenv = require('dotenv').config();
const apiUrl = process.env.VUE_APP_API_URL;
const codingUrl = apiUrl + 'coding/';
const adminUrl = apiUrl + 'admin/';

export default {

  getAllCodingProjects() {
  return fetch(codingUrl)
  .then(res => res.json());
  },

  getSingleCodingProject(id) {
  return fetch(codingUrl + id)
  .then(res => res.json());
  },

  addNewCodingProject(newProject) {
    console.log(newProject);
    return fetch(codingUrl, {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  updateCodingProject(id, payload) {
    return fetch(codingUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteCodingProject(id) {
    return fetch(codingUrl + id, {
      method: 'DELETE'
    })
  },

  login(payload) {
    return fetch(adminUrl + 'login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
  }
}
