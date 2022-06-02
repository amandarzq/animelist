const containsSpecialChars = (string) => {
  if (!string) return
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split('').some(specialChar => {
    if (string.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}

export {
  containsSpecialChars,
}

