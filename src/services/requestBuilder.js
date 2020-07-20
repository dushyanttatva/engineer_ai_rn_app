export async function RequestBuilder(
  endpoint,
  params = "",
  method = "POST",
  headers = { "Content-Type": "application/json" },
  xcodeFormat = false
) {
  let parameters = "";
  if (xcodeFormat) {
    parameters = params;
  } else {
    parameters = params ? JSON.stringify(params) : params;
  }
  console.log('endpoint', endpoint);
  console.log('headers', headers);
  console.log('params', params);
  return fetch(endpoint, {
    method,
    headers,
    body: parameters
  })
    .then(response => {
      console.log('RequestBuilder --> response', response);
      if (response.status === 200) {
        //if (response.headers.get('content-type').match(/application\/json/)) {
          //console.log('RequestBuilder --> content-type', response.headers.get('content-type'));
          return response.json().then(data => ({
            success: true,
            data
          }));
        //}
        //return response.text();
      }
      if (response.status === 401) {
        return response.json().then(data => ({
          success: response.ok || false,
          message: data.message,
          status: response.status,
          data: "",
          error: ""
        }));
      }
      if (response.status === 403) {
        return {
          success: response.ok || false,
          message: "Invalid username/password.",
          status: response.status,
          data: "",
          error: ""
        };
      }
      return {
        success: response.ok || false,
        message: "Something went wrong, please try again later",
        data: "",
        error: ""
      };
    })
    .catch(error => {
      console.log("RequestBuilder error --->", error);
      return {
        message: "Something went wrong, please try again later",
        success: false,
        data: "",
        error
      };
    });
}
