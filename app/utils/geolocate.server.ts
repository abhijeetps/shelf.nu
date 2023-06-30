export const geolocate = async (
  address: string | null
): Promise<{ lat: number; lon: number } | null> => {
  if (!address || address === "") return null;
  const request = await fetch(`https://geocode.maps.co/search?q=${address}`);
  const response = await request.json();
  // `https://geocode.maps.co/search?q=${location.address}`
  /** Here we take the frist entry of the array.
   * When there are more entries that means the address is not accurate enought so we just take the first option
   */
  const mapData = {
    lat: response[0].lat,
    lon: response[0].lon,
  };

  return mapData || null;
};
