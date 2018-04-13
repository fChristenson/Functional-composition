const tokenHeaderIsValid = (header, val) => {
  return header === "x-token" && val === "valid";
};

const headersAreValid = headers => {
  // Check your types, headers could be anything
  if (typeof headers !== "object" || Array.isArray(headers)) return false;

  const keys = Object.keys(headers);

  for (const key of keys) {
    // the keys can be in any case so we need to lowercase them
    const lower = key.toLowerCase();
    const val = headers[key];

    // here is where we would simply add our validation conditions
    if (tokenHeaderIsValid(lower, val)) return true;
    // we would add a case for each type of check we want to make
  }

  return false;
};

/**
 * The problem with this approach is that this function can grow
 * very complex very quickly and what happens if we want to create
 * multiple validation functions with slightly different validators?
 * 
 * tokenHeaderIsValidButOtherHeadersAreNot
 * tokenHeaderIsInvalidButOtherHeadersAreValid
 * someOtherHeaderIsInSomeState
 * 
 * What we want is a way to create multiple functions that can answer
 * these questions without having to copy paste or create a mega function.
 */
module.exports = headersAreValid;
