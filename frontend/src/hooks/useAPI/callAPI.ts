/**
 * Sole purpose of this function is to fetch data from the API.  It is used in the useApi hook.
 * By making this function a separate file, we can mock it in our tests and we can change out the functionality
 * to use a different API if we need to (such as axios).
 *
 * @param endPoint
 * @param options
 * @returns
 */

export const callAPI = async <TDataType>(
  endPoint: string,
  options: RequestInit
): Promise<TDataType | null> => {
  const url = `/api/${endPoint}`;
  const response = await fetch(url, options);

  if (response.ok) {
    if (options?.method?.toLowerCase() === 'delete') return null as TDataType;

    const payload = await response.json();

    return payload as TDataType;
  }

  const errorPayload = await response.json();
  // eslint-disable-next-line no-console
  console.error('Server Error Message:', errorPayload);

  throw new Error(response.statusText);
};

export default callAPI;
