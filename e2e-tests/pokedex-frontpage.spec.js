// eslint-disable-next-line no-unused-vars
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('navigate from the main page to the page of a particular Pokemon', async ({ page }) => {
    await page.goto('')
    await page.click('text="ivysaur"')
    await expect(page).toHaveURL(/\/pokemon\/ivysaur$/)
    await expect(page.getByText('ivysaur')).toBeVisible()
  })

})
