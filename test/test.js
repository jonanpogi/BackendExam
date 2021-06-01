const chai = require("chai");
const app = require("../index");
const chaiHttp = require("chai-http");

chai.should();

chai.use(chaiHttp);

describe("TEST APIS", () => {
    // for geting users
    describe("GET", () => {
        it("it should get all users", (done) => {
            chai.request(app)
                .get("/api/users")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
    });
    //for inserting user
    describe("POST", () => {
        it("it should insert user", (done) => {
            chai.request(app)
                .post("/api/users")
                .send({
                    firstName: "jonan",
                    lastName: "123",
                    address: "123",
                    postcode: "123",
                    contactNo: "123123123",
                    email: "123@123.com",
                    username: "123",
                    password: "123123123",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("message");
                    done();
                });
        });
    });
    //for updating user
    describe("PUT", () => {
        it("it should update user with id of 1", (done) => {
            chai.request(app)
                .put("/api/users/1")
                .send({
                    firstName: "jonan",
                    lastName: "123",
                    address: "123",
                    postcode: "123",
                    contactNo: "123123123",
                    email: "123@123.com",
                    username: "123",
                    password: "123123123",
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property("message");
                    done();
                });
        });
    });
    //for deleting user
    describe("DELETE", () => {
        it("it should delete user with id of 1, 2, and 3", (done) => {
            chai.request(app)
                .delete("/api/users")
                .send({
                    ids: [1, 2, 3],
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("message");
                    done();
                });
        });
    });
});
