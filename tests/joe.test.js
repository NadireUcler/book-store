const supertest = require("supertest"); //imports supertest

describe("Store Module - GET /products", function() { 

    jest.setTimeout(10000); // extend timeout for slow Render wake-up	
    it("returns an array of products from deployed API", async () => {

        const client = supertest("https://joes-store-module.onrender.com");

        const res = await client.get("/products");

        expect(res.status).toBe(200); // Expect successful response
        expect(res.body).toBeInstanceOf(Array); // Response should be an array

    });

});