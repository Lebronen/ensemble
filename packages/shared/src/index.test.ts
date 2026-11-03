import { expect, test } from "vitest";
import { profileSchema } from "./index";

const valid = {
  displayName: "Les Fauves",
  kind: "band",
  instruments: ["batterie"],
  genres: ["rock"],
  city: "Paris",
};

test("accepte un profil valide", () => {
  expect(profileSchema.safeParse(valid).success).toBe(true);
});

test("refuse un nom trop court", () => {
  expect(profileSchema.safeParse({ ...valid, displayName: "A" }).success).toBe(false);
});
