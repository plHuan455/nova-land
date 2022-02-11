export type NearestExchangesTypes = {
  id: number,
  name: string,
  thumbnail: string,
  longtitude: number,
  latitude: number,
  address: string,
  phone: string,
  fax: string,
  distanceMetters: number,
}

export type NearestExchangesParamsTypes = {
  longtitude: number,
  latitude: number,
}
