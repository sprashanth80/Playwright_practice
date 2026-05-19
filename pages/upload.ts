import {Page, Locator} from '@playwright/test';
import path from 'path';
export class Upload {
    page: Page;
    choosefile: Locator;
    uploadbutton: Locator;
    download_button: Locator;
    constructor(page: Page) {
        this.page = page;
        this.choosefile = page.locator('[id="uploadFile"]');
        this.uploadbutton = page.locator('[id="file-submit"]')
        this.download_button = page.locator('[id="downloadButton"]');
    }
    public async upload_file(filepath: string) {
        await this.choosefile.setInputFiles(filepath);
        
    }
    public async download_file() {
        const downloadpromise = this.page.waitForEvent('download');
        await this.download_button.click();
        const download = await downloadpromise;
        const filepath = path.join(__dirname, 'downloadedfile.jpeg');
        await download.saveAs(filepath);
}
}