/* eslint-disable camelcase */
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

export type ExchangesTypes = {
  id: number,
  name: string,
  thumbnail: string,
  longtitude: number,
  latitude: number,
  address: string,
  phone: string,
  fax: string,
  pin: boolean,
}

export type ExchangesParamsTypes = {
  keyword?: string,
  page?: number,
  limit?: number,
  is_pinned?: string,
}
