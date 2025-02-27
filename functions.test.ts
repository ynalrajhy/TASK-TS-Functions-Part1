import { faker } from "@faker-js/faker";

import {
  printAge,
  printHello,
  printMax,
  printName,
  LanguageType,
} from "./functions";

describe("functions", () => {
  describe("printName", () => {
    it("prints the correct name", () => {
      const spy = jest.spyOn(console, "log");
      const names = Array(10)
        .fill(0)
        .map(() => faker.person.firstName());

      names.forEach((name) => {
        printName(name);
        expect(spy).toHaveBeenCalledWith(name);
      });

      spy.mockRestore();
    });
  });

  describe("printAge", () => {
    it("prints the correct age", () => {
      const spy = jest.spyOn(console, "log");
      const birthYears = Array(10)
        .fill(0)
        .map(() =>
          new Date(
            faker.date.birthdate({ mode: "age", min: 5, max: 100 })
          ).getFullYear()
        );

      birthYears.forEach((YOB) => {
        printAge(YOB);
        expect(spy).toHaveBeenCalledWith(new Date().getFullYear() - YOB);
      });
    });
  });

  describe("printHello", () => {
    it("greets someone in the correct language", () => {
      const spy = jest.spyOn(console, "log");
      const names = Array(10)
        .fill(0)
        .map(() => faker.person.firstName());

      const languages: Record<LanguageType, string> = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
        tr: "Merhaba",
      };

      names.forEach((name) => {
        (Object.keys(languages) as LanguageType[]).forEach((language) => {
          expect(printHello(name, language)).toBe(
            `${languages[language]} ${name}`
          );
        });
      });

      spy.mockRestore();
    });
  });

  describe("printMax", () => {
    it("prints the bigger number", () => {
      const spy = jest.spyOn(console, "log");
      const numbers = Array(10)
        .fill(0)
        .map(() => [
          faker.number.int({ min: 0, max: 100 }),
          faker.number.int({ min: 0, max: 100 }),
        ]);

      numbers.forEach(([a, b]) => {
        printMax(a, b);
        expect(spy).toHaveBeenCalledWith(Math.max(a, b));
      });

      spy.mockRestore();
    });
  });
});
