import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '1m', target: 1000 },
    { duration: '5m', target: 1000 }
  ],
};

const randomNumber = () => {
  return Math.ceil(Math.random() * 10000000)
}

export default function () {
  http.get(`http://localhost:8004/api/helpful/${randomNumber()}`);
  sleep(1);
}