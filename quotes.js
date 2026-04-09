const quotes = [
  {
    "q": "Things cannot forever go downward. There are limits to everything—even the cold, and the darkness, and the wind, and the dying.",
    "a": "Ming-Dao Deng"
  },
  {
    "q": "The chief enemy of creativity is good sense.",
    "a": "Pablo Picasso"
  },

  {
      "q": "If you have only one smile in you give it to the people you love.",
    "a": "Maya Angelou",
  },

  {
    "q": "Change is hard at first, messy in the middle and gorgeous at the end.",
    "a": "Robin Sharma",
  },
  
  { "q": "Stand up to your obstacles and do something about them. You'll find they haven't half the strength you think they have.",
    "a": "Norman Vincent Peale",
  },

  {
    "q": "I do not seek. I find.",
    "a": "Pablo Picasso"
  },

  {
      "q": "No matter what happens, always be yourself.",
    "a": "Dale Carnegie",
  },

  {
      "q": "The power of man has grown in every sphere, except over himself.",
    "a": "Winston Churchill",
  },

  {
      "q": "Do not use life to give life to death. Do not use death to bring death to life.",
    "a": "Zhuangzi",
  },

  {
      "q": "We suffer for the simple reason that suffering is biologically useful. It is nature's preferred agent for inspiring change.",
    "a": "Mark Manson",
  },

];

const container = document.getElementById("quotes-container");

for (let i = 0; i < quotes.length; i++) {
  const card = document.createElement("div");
  card.classList.add("quote-card");

  card.innerHTML = `
    <div>
      <p>"${quotes[i].q}"</p>
     <p class="author">– ${quotes[i].a}</p>
    </div>
  `;

  container.appendChild(card);
}