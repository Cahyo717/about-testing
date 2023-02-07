describe('demoqa web testing', () => {
    it('form testing', async() => {
        await browser.url("https://demoqa.com/automation-practice-form");
        await browser.execute(() => {
           return document.body.style.zoom = '50%';
        });
        await browser.pause(2000);
        const firstNameTextField = $("#firstName");
        const lastNameTextField = $("#lastName");
        const emailInput = $("#userEmail");
        await firstNameTextField.setValue("Cahyo");
        await lastNameTextField.setValue("Novianto");
        await emailInput.setValue("cahyo@gmail.com");
        await browser.pause(2000);
    })
})