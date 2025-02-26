import { faker } from "@faker-js/faker";

import { printAge, printHello, printMax, printName } from "./functions";

test("printName function", () => {
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

test("printAge function", () => {
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

test("printHello function", () => {
  const spy = jest.spyOn(console, "log");
  const names = Array(10)
    .fill(0)
    .map(() => faker.person.firstName());
  const languages = {
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
    tr: "Merhaba",
  };

  names.forEach((name) => {
    Object.keys(languages).forEach((language) => {
      printHello(name, language);
      expect(spy).toHaveBeenCalledWith(`${languages[language]} ${name}`);
    });
  });

  spy.mockRestore();
});

test("printMax Function", () => {
  const spy = jest.spyOn(console, "log");
  const numbers = Array(10)
    .fill(0)
    .map(() => [
      faker.number.int({ min: 0, max: 100 }),
      faker.number.int({ min: 0, max: 100 }),
    ]);

  numbers.forEach((nums) => {
    printMax(...nums);
    expect(spy).toHaveBeenCalledWith(Math.max(...nums));
  });

  spy.mockRestore();
});
