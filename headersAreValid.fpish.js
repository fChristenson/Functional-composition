const tokenHeaderIsValid = (header, val) => {
  return header === "x-token" && val === "valid";
};

const clientHeaderIsInvalid = (header, val) => {
  return header === "x-client" && val !== "foo";
};

// imagine that our previous example was created several months ago and now we
// have a new requirement, now the logic just got more complex
// thank goodness that we have unit tests
const headersAreValid = validators => headers => {
  // Check your types, headers could be anything
  if (typeof headers !== "object" || Array.isArray(headers)) return false;

  const keys = Object.keys(headers);

  for (const key of keys) {
    // the keys can be in any case so we need to lowercase them
    const lower = key.toLowerCase();
    const val = headers[key];

    if (tokenHeaderIsValid(lower, val) && clientHeaderIsInvalid(lower, val))
      return false;
    if (tokenHeaderIsValid(lower, val)) return true;
  }

  return false;
};

/**
 * The problem with this approach is that this function can grow
 * very complex very quickly and what happens if we want to create
 * multiple validation functions with slightly different validators?
 */
module.exports = headersAreValid;
