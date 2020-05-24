const baseUrl = "http://localhost:3000/api/coding/";

export default {

  getAllCodingProjects() {
  return fetch(baseUrl)
  .then(res => res.json());
  },

  getSingleCodingProject(id) {
  return fetch(baseUrl + id)
  .then(res => res.json());
  },

  addNewCodingProject(newProject) {
    console.log(newProject);
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(newProject),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  updateCodingProject(id, payload) {
    return fetch(baseUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteCodingProject(id) {
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  }
}
