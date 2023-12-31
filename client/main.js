const complimentBtn = document.getElementById("complimentButton");
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
complimentBtn.addEventListener("click", getCompliment);

// -----------------Random Fortune-------------------
const fortuneBtn = document.getElementById("fortuneButton");
const getRandomFortune = (event) => {
  event.preventDefault();
  axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => {
      const fortune = res.data;
      alert(fortune);
    })
    .catch((err) => {
      console.error(err);
    });
};

fortuneBtn.addEventListener("click", getRandomFortune);

// ----------------List of Choices------------------
const form = document.getElementById("goals");
const choiceList = document.getElementById("list");
const checkBoxChoices = document.querySelectorAll(".checkbox");

const generateChoices = (list) => {
  choiceList.innerHTML = "";
  list.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = item;
    choiceList.appendChild(li);
    deleteChoices(choiceList, li, index);
  });
};

const addToList = (event) => {
  event.preventDefault();
  let selectedChoices = [];
  checkBoxChoices.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedChoices.push(checkbox.name);
    }
  });
  let choiceObj = {
    choices: selectedChoices,
  };
  axios
    .post("http://localhost:4000/api/list", choiceObj)
    .then((res) => {
      console.log(res.data);
      generateChoices(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteChoices = (list, li) => {
  let btnDelete = document.createElement("button");
  btnDelete.innerText = "X";

  const itemName = li.textContent.trim();

  li.appendChild(btnDelete);

  btnDelete.addEventListener("click", () => {
    axios.delete(`http://localhost:4000/api/list/${encodeURIComponent(itemName)}`)
      .then(() => {
        list.removeChild(li);
        console.log(`${itemName}, deleted!`)
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

form.addEventListener("submit", addToList);

const getChoices = () => {
  axios
    .get("http://localhost:4000/api/list")
    .then((res) => {
      console.log(res.data);
      generateChoices(res.data);
    })
    .catch((err) => {
      console.error(err.message, "Don't worry, no choices selected yet:");
    });
};

getChoices();
