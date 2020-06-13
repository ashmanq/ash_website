const dotenv = require('dotenv').config();
const baseUrl = process.env.VUE_APP_API_URL;
const adminUrl = baseUrl + 'admin/';

export default {

  getAllProjects(projectType) {
    const url = fullUrl(projectType);
    return fetch(url)
    .then(res => res.json())
    .catch(res => res.json())
  },

  getFeaturedProjects(projectType) {
    const url = fullUrl(projectType);
    return fetch(url)
    .then(res => res.json())
    .catch(res => res.json())
  },

  getSingleProject(projectType, id) {
    const url = fullUrl(projectType);
    return fetch(url + id)
    .then(res => res.json())
    .catch(res => res.json())
  },

  addNewProject(projectType, newProject) {
    const url = fullUrl(projectType) + "add";
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res.json())
  },

  updateProject(projectType, id, payload) {
    const url = fullUrl(projectType);
    return fetch(url + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res.json())

  },

  deleteProject(projectType, id) {
    const url = fullUrl(projectType);
    return fetch(url + id, {
      method: 'DELETE',
      headers: { 'auth-token': localStorage.getItem('token')}
    })
    .then(res => res.json())
    .catch(res => res.json())
  },

  login(payload) {
    return fetch(adminUrl + 'login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
    .then(res => checkAuthentication(res))
    .catch(res => res.json())
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

const errorHandling = function(res) {
  return "err";
}
