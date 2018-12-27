import { number } from "prop-types";

interface IComment {
  date: Date;
  message: string;
}

interface IDataService {
  getData(): unknown;
}

let service: IDataService;

const response = service.getData();
response.a.b.c; // response의 type이 any였다면 error를 뱉지 않는다. unknown type으로 runtime error를 막는  

if (typeof response === 'string') {
  console.log(response);
} else if (isCommet(response)) {
  response.date;
} else {
  const numbers = <number[]>response;
  numbers.indexOf(1);
}


function isCommet(type: any): type is IComment {
  return (<IComment>type).message !== undefined;
}