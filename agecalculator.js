document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  const birthdateInput = document.getElementById("birthdate");
  const resultDiv = document.getElementById("result");

  calculateBtn.addEventListener("click", function () {
    const birthdateValue = birthdateInput.value;

    if (!birthdateValue) {
      resultDiv.textContent = "⚠️ Please enter your birthdate.";
      resultDiv.style.color = "red";
      return;
    }

    const birthDate = new Date(birthdateValue);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    resultDiv.textContent = `🎉 You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    resultDiv.style.color = "#E52B50";
    
    setTheme(getRandomThemeNumber());
    function getRandomThemeNumber() {
  return Math.floor(Math.random() * 10) + 11; // 11 to 20
}
  });
});

// Theme apply function
function setTheme(themeNumber) {
  const themes = {
    11: {
      background: "#78866B", // কূটবেশ সবুজ
      colors: ["#C41E3A", "#954535", "#FF2400"] // Cardinal, Chestnut, Bright Red
    },
    12: {
      background: "teal",
      colors: ["indigo", "magenta", "#002FA7"]
    },
    13: {
      background: "    #007BA7    ",
      colors: ["darkblue", "#8B008B", "dodgerblue"]
    },
    14: {
      background: "#003153", // Prussian Blue
      colors: ["teal", "#4B5320", "#3F00FF"]
    },
    15: {
      background: "#708090",
      colors: ["#082567", "#4682B4", "#003153"]
    },
    16: {
      background: "#c9a0dc", // Wisteria
      colors: ["purple", "white", "turquoise"]
    },
    17: {
      background: "#08457E",
      colors: ["#3D2B1F", "#9966CC", "#7BA05B"]
    },
    18: {
      background: "midnightblue",
      colors: ["#0095B6", "#0047AB", "#ACE1AF"]
    },
    19: {
      background: "    #1560BD    ",
      colors: ["#116062", "#08457E", "#A9A9A9"]
    },
    20: {
      background: "#40826D", // Viridian
      colors: ["#F28500", "#007BA7", "#DE3163"]
    }
  };

  const theme = themes[themeNumber];
  if (theme) {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.colors[0];
  }
}