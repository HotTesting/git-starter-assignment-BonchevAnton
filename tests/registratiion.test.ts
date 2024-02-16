import { randomUUID } from 'node:crypto';
import { test, expect } from '@playwright/test';


test('registration', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/register')
  await page.getByPlaceholder('Please Enter Your Email').first().fill(`dfsdfggfhgh+${randomUUID()}@gmail.com`); //понимаю, что first() это плохой вариант, но на странице абсолютно два одинаковых поля, я не придумал, как по другому можно подвязаться к нужному
  await page.getByPlaceholder('Please Enter Your Last Name').fill('test');
  await page.getByPlaceholder('Please Enter Your First Name').fill('test');
  await page.getByPlaceholder('Please Enter Your Password').fill('testtest');
  await page.getByRole('button').getByText('Sign Up').click();
  await page.waitForURL('https://shopdemo-alex-hot.koyeb.app/dashboard'); // проверяем, что нас отредиректило на нужную страницу после регистрации
  await page.getByText('dfsdfggfhgh') // проверяем, что на странице есть наш имейл, что свидетельствует об успешной регистрации
});