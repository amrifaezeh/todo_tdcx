export const BASE_URL = `https://dev-dl.tdcx.com:3092`;

export const AUTHENTICATE_URL = `${BASE_URL}/login`;
export const DASHBOARD_URL = `${BASE_URL}/dashboard`;
export const TASKS_URL = `${BASE_URL}/tasks`;
export const TASKS_ID_URL = (id) => `${BASE_URL}/tasks/${id}`;
export const IMAGE_URL = (image) => `${BASE_URL}/${image}`;
export const AUTH_HEADER = (token) => ({ headers: { Authorization: token } });
