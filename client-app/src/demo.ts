﻿export interface ICar {
    color: string;
    model: string;
    topspeed?: number;

}

const car1: ICar = {
    color: 'blue',
    model: 'bmw'
}
const car2: ICar = {
    color: 'red',
    model: 'mercedes',
    topspeed: 100
}

const multiply = (x: number, y: number): string => {
    return (x * y).toString();
}

export const cars = [car1, car2];
