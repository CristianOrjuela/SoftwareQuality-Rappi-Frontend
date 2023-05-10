//Subcomponents

export default function generateLogin (username, password) {

    return fetch('http://localhost:4000' + '/api/v1/' + 'user/login')
      .then(data => {
        //handle success
        return data;
      })
      .catch(error => {
        //handle error
        console.log(error);
      });

};