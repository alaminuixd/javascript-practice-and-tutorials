// Function to Merge Multiple Objects with Shallow Merge
const deepMergeObjects = (...objects) => {
  const deepCopyObjects = objects.map((object) =>
    JSON.parse(JSON.stringify(object))
  );
  return deepCopyObjects.reduce(
    (merged, current) => ({ ...merged, ...current }),
    {}
  );
};

// Example usage:
const countries = {
  USA: {
    capital: "Washington D.C.",
    emoji: "🇺🇸",
    population: 331000000,
  },
};

const countriesDetails = {
  USA: {
    language: "English",
    currency: "USD",
  },
  Germany: {
    capital: "Berlin",
    emoji: "🇩🇪",
    language: "German",
    currency: "EUR",
    population: 83000000,
  },
};

const mergedData = deepMergeObjects(countries, countriesDetails);
