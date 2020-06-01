const dotenv = require('dotenv').config();
const baseUrl = process.env.VUE_APP_API_URL;
// const codingUrl = apiUrl + 'coding/';
const adminUrl = baseUrl + 'admin/';

export default {

  getAllProjects(projectType) {
    const url = fullUrl(projectType);
    return fetch(url)
    .then(res => res.json())
    .catch(err => "err")
  },

  getSingleProject(projectType, id) {
    const url = fullUrl(projectType);
    return fetch(url + id)
    .then(res => res.json())
    .catch(res => "err")
  },

  addNewProject(projectType, newProject) {
    const url = fullUrl(projectType) + "add";
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res = errorHandling())
  },

  updateProject(projectType, id, payload) {
    const url = fullUrl(projectType);
    return fetch(url + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res = errorHandling())
  },

  deleteProject(projectType, id) {
    console.log(id);
    const url = fullUrl(projectType);
    return fetch(url + id, {
      method: 'DELETE',
      headers: { 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res = errorHandling())
  },

  login(payload) {
    return fetch(adminUrl + 'login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
    .then(res => checkAuthentication(res))
    .catch(res => res = errorHandling())
  }
}

const fullUrl = function(type) {
  return baseUrl + type + '/';
}

const checkAuthentication = function(res) {
  if(res.user && res.token) {
    localStorage.setItem('user', res.user);
    localStorage.setItem('token', res.token);
  }
  return res;
}

const errorHandling = function() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return "err";
}
