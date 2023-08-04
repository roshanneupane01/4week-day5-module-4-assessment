let choices = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getRandomFortune: (req, res) => {
    const fortunes = [
      "A lifetime of happiness lies ahead of you.",
      "Accept something that you cannot change, and you will feel better.",
      "All the effort you are making will ultimately pay off.",
      "Allow compassion to guide your decisions.",
      "At the touch of love, everyone becomes a poet.",
    ];

    // choose random fortune
    let index = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[index];

    res.status(200).send(randomFortune);
  },

  addChoiceToList: (req, res) => {
    const selectedChoices = req.body.choices;

    choices = choices.filter((choice) => selectedChoices.includes(choice));

    // Merge the newly selected choices with the updated choices
    choices = [...new Set([...choices, ...selectedChoices])];

    res.status(200).send(choices);
  },
};
