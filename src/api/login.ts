export interface loginFunc {
  (username: string, password: string): boolean | undefined;
}

const LOGIN_API_URL = 'https://6411e02cf9fe8122ae168796.mockapi.io';

export const getUserData = async (loginFunc: loginFunc): Promise<any> => {
  try {
    const res = await fetch(`${LOGIN_API_URL}/login`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
