class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return string.split(' ').map((word, index) => {
      if (excludedWords.find(exclude => exclude === word)) {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}

Formatter.titleize("edmond is the best in the world")