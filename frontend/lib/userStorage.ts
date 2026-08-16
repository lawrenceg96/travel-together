"use client";


export type Planner =
  | "Lawrence"
  | "Ciara";



export function setCurrentPlanner(
  planner: Planner
){

  localStorage.setItem(
    "currentPlanner",
    planner
  );

}



export function getCurrentPlanner(){

  return localStorage.getItem(
    "currentPlanner"
  );

}