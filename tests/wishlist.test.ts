import { test, expect } from '@playwright/test';


test('wishlist', async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/login')
    await page.getByPlaceholder('Please Enter Your Email').first().fill('dfsdfggfhgh@gmail.com'); //понимаю, что first() это плохой вариант, но на странице абсолютно два одинаковых поля, я не придумал, как по другому можно подвязаться к нужному
    await page.getByPlaceholder('Please Enter Your Password').fill('al235bn19');
    await page.getByRole('button').getByText('Login').click();
    await page.waitForTimeout(500);
    await page.goto('https://shopdemo-alex-hot.koyeb.app/shop');
    await page.locator(`.heart-icon`).first().click()
    await page.goto('https://shopdemo-alex-hot.koyeb.app/dashboard/wishlist');
    await page.getByText('CHERRY TOMATOES')
    await page.locator(`.custom-btn-danger`).click() // тут я удаляю из вишлиста айтем, чтобы при повторном запуске его можно было опять добавить
});
