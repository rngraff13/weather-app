import { Clouds } from "./clouds";
import { Coordinates } from "./coordinates";
import { Rain } from "./rain";
import { Sys } from "./sys";
import { TempMain } from "./temp-main";
import { Weather } from "./weather";
import { Wind } from "./wind";

export interface WeatherResult{
    coord: Coordinates;
    weather: Array<Weather>;
    base: string;
    main: TempMain;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}