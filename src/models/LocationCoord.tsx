export interface ILocationCoord {
  country: string;
  name: string;
  lat: number;
  lon: number;
  local_names: { [x: string]: string }[];
}
