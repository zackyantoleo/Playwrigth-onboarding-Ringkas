import { test, expect, Page } from "@playwright/test";
import CalculatorPage from "../pages/calculator";

test.describe('Syariah Calculator', () => {
    let page: Page;
    let calculator: CalculatorPage;

    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        calculator = new CalculatorPage(page);

        console.log("Open Website");
        await page.goto('https://ringkas.co.id/');
        await page.waitForTimeout(3000);
    })

    test("Syariah Calculator", async () => {        

        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4')
        await calculator.fillSalary('10000000') 
        await calculator.fillOngoingInstallment('0') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const result = await calculator.resultKPR();
        await expect(result).toHaveText('Rp 471.428.571') // Result
    }); 

    test("Invalid 'Margin'", async () => {        

        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('asd') 
        await calculator.fillSalary('10000000')  
        await calculator.fillOngoingInstallment('0') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const error = await calculator.errorMessage();
        await expect(error).toBeVisible();        

    })

    test("Invalid 'Salary'", async () => {

        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4') 
        await calculator.fillSalary('asd')  
        await calculator.fillOngoingInstallment('0') 
        await calculator.clickCalculateButton()
        
        console.log("Check Result");
        const error = await calculator.errorMessage();        
        await expect(error).toBeEmpty();

    })

    test("Invalid 'Ongoing Installment'", async () => {
        
        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4') 
        await calculator.fillSalary('10000000')  
        await calculator.fillOngoingInstallment('asd') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const result = await calculator.resultKPR();        
        await expect(result).toHaveText('Rp 471.428.571') // Result

    })

    test("Salary & instalment ratio haven't reached the requirements", async () => {
        
        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4') 
        await calculator.fillSalary('10000000')  
        await calculator.fillOngoingInstallment('9000000') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const error = await calculator.errorMessage();        
        await expect(error).toHaveText("Rasio penghasilan & cicilan kamu tidak memenuhi syarat KPR. Kamu dapat menambahkan penghasilan, gabungkan penghasilan pasangan, atau selesaikan cicilan.");
    })

    
    test("Empty Salary", async () => {
        
        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4') 
        await calculator.fillSalary('0')  
        await calculator.fillOngoingInstallment('9000000') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const error = await calculator.salaryerrorMessage();        
        await expect(error).toHaveText("Gaji bersih tidak boleh kosong");
    })

    test("Ongoing instalments is higher than salary", async () => {
        
        console.log("Fill Calculator Data");
        await calculator.fillKPRType('syariah'); //'conventional' or 'syariah'
        await calculator.fillTenor('10') 
        await calculator.fillMargin('4') 
        await calculator.fillSalary('20000000')  
        await calculator.fillOngoingInstallment('21000000') 
        await calculator.clickCalculateButton()

        console.log("Check Result");
        const error = await calculator.errorMessage();        
        await expect(error).toHaveText("Total cicilan berjalan tidak boleh melebihi penghasilan kamu. Mohon periksa kembali atau hubungi Ringkas untuk informasi lebih lanjut.");
    })

    test.afterAll(async ({browser}) => {
        page = await browser.newPage();
        await page.close();
    });
}) 