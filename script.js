const tags_holder = document.getElementById("tags_holder");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", (e) => {
  const tags = extract_tags_from_textArea(e);
  insert_tags_into_dom(tags);
  if (e.key === "Enter") {
    set_interval();
    choose_choice();
  }
});

const extract_tags_from_textArea = (e) => {
  //bad logic to be fixed later
  const raw_tags = e.target.value;
  const sliced_tags = raw_tags.trim().split(",");
  const processed_tags = sliced_tags.filter((tag) => tag !== "");
  const trimed_tags = processed_tags.map((tag) => tag.trim());
  trimed_tags.filter((tag) => tag !== "");
  return trimed_tags;
};

const insert_tags_into_dom = (tags) => {
  tags_holder.innerHTML = "";
  tags.forEach((tag) => {
    let tagEl = document.createElement("div");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tags_holder.appendChild(tagEl);
  });
};

const set_interval = () => {
  const tags = document.querySelectorAll(".tag");
  const interval = setInterval(() => {
    const random_index = Math.floor(Math.random() * tags.length);
    tags[random_index].classList.add("selected");
    setTimeout(() => {
      tags[random_index].classList.remove("selected");
    }, 300);
  }, 500);
  setTimeout(() => {
    clearInterval(interval);
  }, tags.length * 800);
};

const choose_choice = () => {
  textarea.value = " ";
  const tags = document.querySelectorAll(".tag");
  setTimeout(() => {
    const random_index = Math.floor(Math.random() * tags.length);
    tags[random_index].classList.add("selected");
  }, tags.length * 850);
};
