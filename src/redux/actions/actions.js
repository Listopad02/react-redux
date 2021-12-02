import { ADD, SUB, ADD_NUMBER, ADD2 } from "./actionTypes"

export function add() {
    return {
        type: ADD
    }
} 

export function sub(number) {
    return {
        type: SUB,
        payload: number
    }
} 

export function addNumber() {
    return {
        type: ADD_NUMBER
    }
} 

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
} 