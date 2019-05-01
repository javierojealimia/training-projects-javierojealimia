export const environment = {
  appName: 'ProjShared',
  production: true,
  projects: [
    { id: 0, name: 'Learn Angular' },
    { id: 1, name: 'Develop My Dream app' },
    { id: 2, name: 'Travel around the world' },
    { id: 3, name: 'Clean my room' }
  ],
  maxProjects: 500,
  urlApi: 'https://api-base.herokuapp.com/api/pub/projects',
  maxNameLenght: 30,
  minNameLenght: 5
};
