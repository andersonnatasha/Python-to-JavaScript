
// Our customers are going to buy lots of melons!

const melonsToAdd= ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

// Take in a list and return a dictionary of # of melons by melon type.
const countMelons = (melonArrays) => {
  const melonCounts = {};

  for (const melon of melonArrays) {
    if (melonCounts[melon]) {
    melonCounts[melon] += 1;
   } else {
     melonCounts[melon] = 1;
    }
  }
  return melonCounts;
}

console.log(countMelons(melonsToAdd))
// def count_melons(melon_list):
//     """Take in a list and return a dictionary of # of melons by melon type."""

//     melon_counts = {}

//     for melon in melon_list:
//         if melon in melon_counts:
//             melon_counts[melon] = melon_counts[melon] + 1

//         else:
//             melon_counts[melon] = 1

//     return melon_counts

