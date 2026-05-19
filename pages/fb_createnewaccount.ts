import { Locator, Page } from "@playwright/test";
class Fb_createnewaccount {
    page: Page;
    firstname: Locator;
    surname: Locator;
    dob_day: Locator;
    dob_month: Locator;
    dob_year: Locator;
    gender: Locator;
    mobileemail: Locator;
    password: Locator;
    submitbutton: Locator;
    Ialreadyhaveaccount: Locator;
        constructor(page) {
        this.page = page;
        this.firstname = page.getByRole('textbox', { name: 'Name First name Surname' })
        this.surname = page.getByRole('textbox', { name: 'Surname', exact: true })
        this.dob_day = page.
        this.dob_month = page.locator('#month')
        this.dob_year = page.locator('#year')
        }
    }