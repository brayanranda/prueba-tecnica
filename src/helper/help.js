const defaultHeaders = {
    "Content-type": "application/json; charset=UTF-8",
};
  
function checkError(res) {
    if (res.status === 404) {
      throw new Error(`Error ${res.status}. El recurso no ha sido encontrado`);
    }
  
    if (!res.ok) {
      throw new Error(`Ha ocurrido un error: ${res.status} ${res.statusText}`);
    }
}
  
export async function getRequest(url) {
    const res = await fetch(url);
  
    checkError(res);
  
    const data = await res.json();
  
    return data;
}
  
export async function postRequest(url, body) {
    const res = await fetch(url, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(body),
    });
  
    checkError(res);
  
    const data = await res.json();
  
    return data;
}

export async function putRequest(url, body) {
    const res = await fetch(url, {
      method: "PUT",
      headers: defaultHeaders,
      body: JSON.stringify(body),
    });
  
    checkError(res);
  
    const data = await res.json();
  
    return data;
}
  
export async function deleteRequest(url) {
    const res = await fetch(url, {
      method: "DELETE",
    });
  
    checkError(res);
  
    const data = await res.json();
  
    return data;
}
  