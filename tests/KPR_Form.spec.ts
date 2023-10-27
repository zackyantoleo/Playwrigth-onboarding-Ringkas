// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://ringkas.co.id/');
//   await page.getByRole('button', { name: 'Ajukan KPR' }).click();
//   await page.getByRole('textbox', { name: 'Nama lengkap sesuai KTP' }).click();
//   await page.getByRole('textbox', { name: 'Nama lengkap sesuai KTP' }).fill('Test');
//   await page.getByPlaceholder('0812-345-678').click();
//   await page.getByPlaceholder('0812-345-678').fill('087213312213');
//   await page.getByPlaceholder('Email Address').click();
//   await page.getByPlaceholder('Email Address').fill('test@test.com');
//   await page.locator('#ff_4_dropdown').selectOption('Lajang');
//   await page.locator('#ff_4_dropdown_1').selectOption('Karyawan Tetap');
//   await page.getByText('Lokasi Properti- Select -- Select -Remove item- Select -AmbonBandar LampungBandu').click();
//   await page.getByLabel('- Select -').fill('jaka');
//   await page.getByRole('option', { name: 'Jakarta Press to select' }).click();
//   await page.getByLabel('false').click();
//   await page.getByLabel('false').fill('mandiri');
//   await page.getByRole('option', { name: 'Bank Mandiri Press to select' }).click();
//   await page.getByRole('option', { name: 'Bank CIMB Niaga Press to select' }).click();
//   await page.getByRole('option', { name: 'Bank Permata Press to select' }).click();
//   await page.getByRole('textbox', { name: 'Kode Referral' }).click();
//   await page.getByLabel('Dengan ini saya menyetujui Syarat dan Ketentuan dan Kebijakan Privasi Ringkas dan bersedia untuk dihubungi oleh tim Ringkas terkait proses verifikasi data').check();
//   await page.getByLabel('Dengan ini saya setuju untuk menyerahkan informasi terkait data pribadi saya kepada Ringkas untuk melakukan proses pengumpulan dan penyimpanan data').check();
//   await page.locator('#fluentform_4').getByRole('button', { name: 'Ajukan KPR' }).click();
// });