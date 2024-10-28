# I Need Dummy Data

**I Need Dummy Data** is a flexible and customizable random data generator for testing and prototyping applications, especially useful for testing user databases and related features. Easily generate dummy data in JSON format for fields like names, emails, phone numbers, addresses, and more.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Basic Usage](#basic-usage)

- [Generating Bulk Data](#generating-bulk-data)

- [Supported Fields](#supported-fields)

- [Examples](#examples)

- [API](#api)

- [License](#license)

---

## Installation

Install **I Need Dummy Data** via npm:

```bash

npm install i-need-dummy-data

```

or clone this repository and link it locally using:

```bash

npm link

```

---

## Usage

### Basic Usage

Import the `generateDummyData` function, specify the fields you need, and it will generate random dummy data accordingly.

```javascript
import generateDummyData from "i-need-dummy-data";

const fields = ["name", "email", "phone", "age", "address"];

const data = generateDummyData(fields);

console.log(data);
```

This code will output a JSON object with the specified fields.

### Generating Bulk Data

To generate multiple data entries at once, specify the `count` parameter:

```js
const data = generateDummyData(
  ["name", "email", "phone", "age", "address"],
  10
); // Generates 10 records

console.log(data);
```

The function will return an array of JSON objects, each containing the specified fields.

### Supported Fields

The package currently supports the following fields:

- `name` -- Full name

- `email` -- Email address

- `phone` -- Phone number

- `age` -- Random age between 18 and 100

- `address` -- Nested object with street, city, state, and zip code

- `company` -- Company name

- `jobTitle` -- Job title

- `id` -- UUID for unique identification

- `date` -- Random date

For fields not specified in this list, `null` will be returned by default.

---

## Examples

1\. **Single User Record with Specified Fields**

```js
const userData = generateDummyData(["name", "email", "age"]);

console.log(userData);
```

2\. **Generating Multiple User Records**

```js
const bulkData = generateDummyData(["name", "email", "phone", "address"], 5);

console.log(bulkData); // Array of 5 user data objects
```

3\. **Nested Address Object**

```js
const dataWithAddress = generateDummyData(["name", "address"]);

console.log(dataWithAddress);

// Output: { name: '...', address: { street: '...', city: '...', state: '...', zip: '...' } }
```

---

## API

### `generateDummyData(fields: string[], count?: number): object | object[]`

Generates random data based on user-defined fields.

- **`fields`** (required): An array of field names to include in the generated data.

- **`count`** (optional): Number of data records to generate. Defaults to 1.

#### Returns

- A single object with the specified fields if `count` is `1`.

- An array of objects if `count` is greater than `1`.

---

## License

**I Need Dummy Data** is licensed under the ISC License. See the LICENSE file for more details.
