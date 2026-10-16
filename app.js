const m = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "-": "-....-"
};

toy.onclick = () => {
  panel.classList.remove("hidden");
  out.textContent += "> ENTER YOUR BIRTHDAY\n";
  birth.focus();
};

function convertBirthday() {
  let v = birth.value;

  if (!v) return;

  out.textContent +=
    "> PROCESSING...\n\nSECRET CODE\n" +
    [...v].map(c => m[c]).join("   ") +
    "\n> DONE\n";

  panel.classList.add("hidden");
}

// Desktop: press Enter
birth.onkeydown = e => {
  if (e.key === "Enter") {
    convertBirthday();
  }
};

// Mobile: selecting a date automatically converts it
birth.onchange = () => {
  convertBirthday();
};
