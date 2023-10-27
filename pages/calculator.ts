import { Page } from "@playwright/test";
export default class CalculatorPage {

    constructor (public page: Page) {}
        
    async fillKPRType (KPRType: string) {
        await this.page.click(`//*[@id="${KPRType}"]`);
    }

    async fillTenor(tenor: string) {
        await this.page.locator('//*[@id="calculator-app"]/div[1]/form/div[2]/div[1]/select').selectOption(tenor);
    }

    async fillInterestRate(rate: string) {
        // await this.page.locator('//*[@id="interest_rate"]').fill(rate);
        await this.page.fill('//*[@id="interest_rate"]', rate);
    }

    async fillMargin(margin: string) {
        await this.page.fill('//*[@id="margin"]', margin);
    }

    async fillSalary(salary: string) {
        await this.page.fill('//*[@id="net_salary"]', salary);
    }

    async fillOngoingInstallment(installment: string) {
        await this.page.fill('//*[@id="ongoing_installment"]', installment);
    }

    async elementOngoingInstallment(){
        return this.page.locator('//*[@id="ongoing_installment"]');
    }

    async clickCalculateButton() {
        await this.page.click('//*[@id="calculator-app"]/div[1]/form/div[2]/div[5]/button');
    }

    async resultKPR() {
        return this.page.locator('//*[@id="calculator-app"]/div[2]/div[1]/div[2]/p[2]');
    }

    async elementResultKPR() {
        await this.page.locator('//*[@id="calculator-app"]/div[2]/div[1]/div[2]/p[2]');
    }

    async errorMessage() {
        return this.page.locator('//*[@id="calculator-app"]/div[2]/div/div[2]/div/p[2]');
    }

    async salaryerrorMessage() {
        return this.page.locator('//*[@id="calculator-app"]/div[1]/form/div[2]/p[1]');
    }
}