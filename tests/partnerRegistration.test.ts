import { randomUUID } from 'node:crypto';
import { test, expect } from '@playwright/test';

test('registration', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/sell')
    await page.getByPlaceholder('Your Email Addres').fill(`dfsdfggfhgh+${randomUUID()}@gmail.com`); //понимаю, что first() это плохой вариант, но на странице абсолютно два одинаковых поля, я не придумал, как по другому можно подвязаться к нужному
    await page.getByPlaceholder('Your Full Name').fill('test');
    await page.getByPlaceholder('Your Phone Number').fill('0508292298');
    await page.getByPlaceholder('Your Business Brand').fill('testtest');
    await page.getByPlaceholder('Please Describe Your Business').fill('testtesttesttest');
    await page.getByRole('button').getByText('Submit').click();
    await page.getByText('We recived')
  });