// you need to run this script on k6
import { sleep } from "k6";
import http from "k6/http";
export let options = {
  duration: "10s",
  vus: 50,
};
export default function () {
  http.get("http://test.k6.io/contacts.php");
  sleep(1);
}
