import axios from 'axios';

function createConfig(method, path, body, additionalHeaders = undefined) {
// check if token is valid
//   const accessToken = await isTokenValid()
//     .then((isValid) => {
//       if (!isValid) {
//         return refreshToken();
//       }
//       return getUserToken();
//     });

  let headers = {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${accessToken}`,
  };
  if (additionalHeaders) {
    headers = {
      ...headers,
      ...additionalHeaders,
    };
  }

  let config = {
    method,
    url: path,
    headers,
  };
  if (body) {
    if (method === 'get') {
      config = {
        ...config,
        params: body,
      };
    } else {
      config = {
        ...config,
        data: body,
      };
    }
  }

  return config;
}

function callApi(method, path, body, additionalHeaders = undefined) {
  const config = createConfig(method, path, body, additionalHeaders);
  return axios(config);
}

export default callApi;
