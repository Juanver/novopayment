/**
*
* @param data  - data to send in the response body
* @param status  - any http status code, 200 by default
* @param ok - set it to false if you want the request to fail
*/

export const mockFetch = (data: any, status = 200, ok = true): void => {
  (global as any)["fetch"] = jest.fn().mockImplementationOnce(() => {
    const response = {
      ok,
      status,
      json: () => Promise.resolve(data),
      clone: () => ({ ...response }),
      blob: () => Promise.resolve(data),
    };
    return Promise.resolve(response);
  });
};
