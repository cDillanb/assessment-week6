import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    await driver.sleep(1000);
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test("I can place an X in the top left square", async () => {

    await driver.sleep(1000);
    let cell0 = await driver.findElement(By.id('cell-0'));
    await cell0.click();
    expect(await cell0.getText()).toBe('X');

});

test("The O gets placed to the right of my X", async () => {
    
    await driver.sleep(1000);
    let cell1 = await driver.findElement(By.id('cell-1'));
    expect(await cell1.getText()).toBe('O');
});

test("I can place an X in the top right square", async () => {

    await driver.sleep(1000);
    let cell2 = await driver.findElement(By.id('cell-2'));
    await cell2.click();
    expect(await cell2.getText()).toBe("X");

});

test("I can place an X in the bottom right square", async () => {
    
    await driver.sleep(1000);
    let cell8 = await driver.findElement(By.id('cell-8'));
    await cell8.click();
    expect(await cell8.getText()).toBe('X');

});
