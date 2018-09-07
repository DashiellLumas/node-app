var request = require("supertest");
var app = require("../index.js");


describe("GET /", function(){
  it("respond with hey world", function(done){
    request(app).get("/").expect("hey world", done);
  });
});
