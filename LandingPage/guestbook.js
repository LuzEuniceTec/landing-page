/**
 * Web application
 */
const apiUrl = 'https://us-south.functions.cloud.ibm.com/api/v1/namespaces/breeze.metztli.corte%40ibm.com_dev/actions/save-guestbook-entry-sequence?blocking=true';
const guestbook = {
  // retrieve the existing guestbook entries
  /*get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },*/
  // add a single guestbook entry
  add(values) {
    console.log('Sending', values)
    return axios({
      method: 'POST',
      url: `${apiUrl}`,
      auth:{
        username: 'd3fcd7d9-53f7-4bab-be9a-15055cdd2140', 
        password: 'zss0P5dHOWsN3vXUNKawz4x85AKs8MzySW4pIzTn5PCnpcoLpM2jJsFYxi3ILEwS'
      },
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
      data: JSON.stringify(values),
    });
  }
};

(function () {
  $(document).ready(() => {
    $("#myform").submit((event) => {
      alert("El formulario ha sido enviado");
      event.preventDefault();
  
      let values = {};
      $.each($("#myform").serializeArray(), (i, field) => {
        values[field.name] = field.value;
      });
  
      guestbook.add(values);
    });
  });
})();

