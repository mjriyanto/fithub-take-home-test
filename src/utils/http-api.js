const DEFAULT = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function _getHeaders (headers) {
  return {
    ...DEFAULT.headers,
    ...headers
  }
}

const _dataAdapter = async res => {
  let body
  try {
    body = await res.json()
  } catch {
    try {
      body = await res.text()
    } catch {
      body = res.data
    }
  }
  return {
    body,
    status: res.status,
    statusText: res.status,
    headers: res.headers || {},
    originalResponse: res
  }
}

const _responseAdapter = async res => {
  const response = await _dataAdapter(res)
  if (!res.ok) {
    throw response
  }
  return response
}

export function postDataViaApi (path, data, headers) {
  return fetch(path, {
    method: 'POST',
    headers: _getHeaders(headers),
    body: JSON.stringify(data)
  }).then(_responseAdapter)
}

export default {
  postDataViaApi
}