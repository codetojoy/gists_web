import { of } from "rxjs";

const now = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

of("TRACER", now, "beethoven", "chopin", "mozart").subscribe(console.log);
