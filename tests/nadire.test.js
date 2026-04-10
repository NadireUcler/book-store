const supertest = require("supertest");

describe("Products API - GET", () => {

    it("should return product list successfully", async () => {

        const api = supertest("https://book-store-9yxy.onrender.com");

        const res = await api.get("/products");

        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);

    }, 20000);

});