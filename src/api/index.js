export function get(url) {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(JSON.parse(request.response))
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });
    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });
    request.send();
  });
}

export function remove(url, id) {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('DELETE', url + id);
    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(JSON.parse(request.response))
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });
    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });
    request.send(id);
  });
}

export function create(url, data) {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(JSON.parse(request.response))
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });
    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });
    request.send(JSON.stringify(data));
  });
}

export function edit(url, id, data) {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('PUT', url + id, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(JSON.parse(request.response))
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });
    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });
    request.send(JSON.stringify(data));
  });
}
