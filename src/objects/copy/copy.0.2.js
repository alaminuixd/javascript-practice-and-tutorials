// Function to Perform Deep Merge of Multiple Objects, Including Nested Properties
const deepMergeObjects = (...objects) => {
  const merge = (target, source) => {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        // If both target and source have a nested object, merge them
        target[key] = merge(target[key] || {}, source[key]);
      } else {
        // Otherwise, copy the value from source
        target[key] = source[key];
      }
    }
    return target;
  };

  return objects.reduce((merged, current) => merge(merged, current), {});
};

// Example usage
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
console.log(mergedData);
