import { expect, test } from "@playwright/test";

test("la palette de commandes mène à la page des musiciens", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Control+K");
  await page.getByRole("option", { name: "Trouver des musiciens" }).click();
  await expect(page).toHaveURL(/\/musiciens$/);
});
