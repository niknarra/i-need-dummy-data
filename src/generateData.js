import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

function generateFieldValue(field) {
  switch (field) {
    case "name":
      return faker.person.fullName();
    case "email":
      return faker.internet.email();
    case "phone":
      return faker.phone.number({ style: "national" });
    case "age":
      return faker.number.int({ min: 18, max: 100 });
    case "address":
      return {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode(),
      };
    case "company":
      return faker.company.name();
    case "jobTitle":
      return faker.person.jobTitle();
    case "id":
      return uuidv4();
    case "date":
      return faker.date.anytime();
    default:
      return null;
  }
}

export function generateDummyData(fields = [], count = 1) {
  const dataArray = [];
  for (let i = 0; i < count; i++) {
    const dataObject = {};
    fields.forEach((field) => {
      dataObject[field] = generateFieldValue(field);
    });
    dataArray.push(dataObject);
  }
  return count === 1 ? dataArray[0] : dataArray;
}
