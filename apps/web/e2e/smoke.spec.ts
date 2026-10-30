import { expect, test } from '@playwright/test'

test('the empty app loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'BagBuddy' })).toBeVisible()
})
