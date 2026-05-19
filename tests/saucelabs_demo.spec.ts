import { test, expect } from '@playwright/test';
import { Saucelabs_demo } from '../pages/saucelabs_demo';
import { getEnv } from './env';
import data from '../test_data/data.json';
import fs from 'fs';
import csv from 'csv-parser';

getEnv();
const results: any[] = [];
test.beforeAll(async () => {
    await new Promise<void>((resolve) => {
        fs.createReadStream('test_data/data.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve());
    });
});

// data.forEach((data) => {
// test(`Title: Sauce Labs Demo Login ${data.username}`, async ({ page}) => {
//     const saucelabs_demo = new Saucelabs_demo(page);
//     await page.goto(process.env.BASE_URL!);
//     await page.pause();
//     //await saucelabs_demo.login(process.env.USERNAME!, process.env.PASSWORD!);
//     //await page.pause(); 
//     await saucelabs_demo.login(data.username, data.password);
//     await saucelabs_demo.add_products_to_cart();
//     await page.pause(); 
// });
// });

test(`Title: Sauce Labs Demo Login using CSV`, async ({ page}) => {
    for (const data of results) {
       
    const saucelabs_demo = new Saucelabs_demo(page);
    await page.goto(process.env.BASE_URL!);
    //await page.pause();
    //await saucelabs_demo.login(process.env.USERNAME!, process.env.PASSWORD!);
    //await page.pause(); 
    await saucelabs_demo.login(data.username, data.password);
    //await saucelabs_demo.add_products_to_cart();
    //await page.pause(); 
    }
});