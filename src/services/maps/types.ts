/* eslint-disable camelcase */
export type MapsParamsTypes = {
  city_id?: number;
  project_id?: number;
}

export type City = {
  id: number;
  name: string;
}

export type DataMapsTypes = {
  id: number;
  pointX: number;
  pointY: number;
  projects: number[];
  city: City;
}
