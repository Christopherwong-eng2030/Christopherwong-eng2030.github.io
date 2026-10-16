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

const toy = document.getElementById("toy");
const panel = document.getElementById("panel");
const out = document.getElementById("out");
const birth = document.getElementById("birth");
const convert = document.getElementById("convert");

toy.onclick = () => {
  panel.classList.remove("hidden");
  out.textContent += "> ENTER YOUR BIRTHDAY\n";
  birth.focus();
};

function convertBirthday() {
  const v = birth.value.trim();

  if (!v) return;

  out.textContent +=
    "> PROCESSING...\n\nSECRET CODE\n" +
    [...v].map(c => m[c] || c).join("   ") +
    "\n> DONE\n";

  panel.classList.add("hidden");
  birth.value = "";
}

convert.onclick = convertBirthday;
