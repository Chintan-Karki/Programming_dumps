function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) console.error("Stop-watch is already running");
    running = true;
    startTime = new Date();
    console.log("started");
  };

  this.stop = function () {
    if (!running) {
      console.error("Stop-watch not running.");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    console.log(`${duration} seconds`);
  };

  this.reset = function () {
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
    console.log("Reset successful.");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
console.log(sw);
