
const filterByTerm = require("../src/filterByTerm");

describe("Filter Function", () => {
  //test stuff
  test("it should filter by a search term (link)", () => {
  // actual test
  const input = [
    {id: 1, url: "https://www.url1.com"},
    {id: 2, url: "https://www.url2.com"},
    {id: 3, url: "https://www.link3.com"}
  ];

  const output = [{id: 3, url: "https://www.link3.com"}];

  expect(filterByTerm(input,"link")).toEqual(output);
  });

})

//adding a comment 
