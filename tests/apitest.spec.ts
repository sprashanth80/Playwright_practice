import {test, expect} from '@playwright/test';
test('@get @smoke get: api test', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.userId).toBe(1);
    expect(responseBody.id).toBe(1);
    expect(responseBody.title).toBe('delectus aut autem');
    expect(responseBody.completed).toBe(false);
});

test('@delete delete: api test', async ({request}) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({});
});

test('post: api test', async ({request}) => {
    const requestBody = {
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2026-05-14T03:34:30.406Z",
  "status": "placed",
  "complete": true
}

    const response = await request.post('https://petstore.swagger.io/v2/store/order', {
        data: requestBody
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.quantity).toBe(0);
    expect(responseBody.shipDate).toContain('2026-05-14T03:34:30.406');
    expect(responseBody.status).toBe('placed');
    expect(responseBody.complete).toBe(true);
});
