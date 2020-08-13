window.addEventListener("load", thingToMeasure);

function thingToMeasure() {
  persomance.mark("start")
  fetch("/api")
    .then(result => result.json())
    .then(json => {
      json.images.forEach(image => console.log(image.name));
      persomance.mark("end")
      persomance.measure("Fetching Image")
      const measurents = performance.getEntriesByType("measure")
      console.log(measurents)
    });
}
