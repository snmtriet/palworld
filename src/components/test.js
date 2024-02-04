const palElement = document.querySelector(".pal");
const leftElement = document.querySelector(".left");
const rightElement = document.querySelector(".right");
const elementsArray = [];
const dropsArray = [];
const statsArray = [];
const combinationsArray = [];
const workSuitabilityArray = [];
const partnerSkillInfo = {};
const activeSkillsArray = [];

const elementsContainer = palElement.querySelector(".elements");
const elementItems = elementsContainer.querySelectorAll(".element");

const dropsContainer = leftElement.querySelector(".drops");
let dropItems2 = dropsContainer.querySelectorAll("tr");
dropItems2 = Array.from(dropItems2).slice(1);

const statsContainer = leftElement.querySelector(".stats");
const statItems = statsContainer.querySelectorAll(".item");

const combinationsContainer = rightElement.querySelector(".pal-combinations");
const combinationItems = combinationsContainer.querySelectorAll(".pal");

const workSuitabilityContainer = document.querySelector(".work-suit");
const workItems = workSuitabilityContainer.querySelectorAll(".item");

const partnerSkillContainer = document.querySelector(".passive.skills");
const partnerSkillItems = partnerSkillContainer.querySelectorAll(".item");

const activeSkillsContainer = document.querySelector(".active.skills");
const activeSkillItems = activeSkillsContainer.querySelectorAll(
  ".item:not([class*=' '])"
);

elementItems.forEach((element) => {
  const elementInfo = {
    name: element.querySelector(".name").textContent,
    image: element.querySelector("img").getAttribute("src"),
    className: element.classList[1],
  };

  elementsArray.push(elementInfo);
});

dropItems2.forEach((dropItem) => {
  const image = dropItem.querySelector(".item-td img").getAttribute("src");
  const name = dropItem.querySelector(".item-td .name").textContent;
  const amount = dropItem.querySelectorAll("td")[1].textContent;
  const rate = dropItem.querySelectorAll("td")[2].textContent;
  const dropInfo = {
    image,
    name,
    amount,
    rate,
  };
  dropsArray.push(dropInfo);
});

statItems.forEach((statItem) => {
  const name = statItem.querySelector(".name").textContent;
  const value = statItem.querySelector(".value").textContent;
  const statInfo = {
    name,
    value,
  };
  statsArray.push(statInfo);
});

combinationItems.forEach((combinationItem) => {
  const malePalLink = combinationItem.querySelector(".male");
  const femalePalLink = combinationItem.querySelector(".female");
  const resultPalLink = combinationItem.querySelector(".result");
  const combinationInfo = {
    male: {
      name: malePalLink.querySelector(".name").textContent,
      imageSrc: malePalLink.querySelector(".image img").getAttribute("src"),
    },
    female: {
      name: femalePalLink.querySelector(".name").textContent,
      imageSrc: femalePalLink.querySelector(".image img").getAttribute("src"),
    },
    result: {
      name: resultPalLink.querySelector(".name").textContent,
      imageSrc: resultPalLink.querySelector(".image img").getAttribute("src"),
    },
  };
  combinationsArray.push(combinationInfo);
});

workItems.forEach((workItem) => {
  const workName = workItem.querySelector(".name").innerText;
  const isActive = workItem.classList.contains("active");
  const workLevelElement = workItem.querySelector(".level");
  const workLevel = isActive
    ? workLevelElement.querySelector(".value").innerText
    : null;
  const workImageSrc = workItem.querySelector(".image img").getAttribute("src");
  const workInfo = {
    name: workName,
    isActive,
    level: workLevel,
    imageSrc: workImageSrc,
  };
  workSuitabilityArray.push(workInfo);
});

partnerSkillItems.forEach((partnerSkillItem) => {
  const skillName = partnerSkillItem.querySelector(".name").textContent;
  const skillDescription =
    partnerSkillItem.querySelector(".content p").textContent;

  partnerSkillInfo.name = skillName;
  partnerSkillInfo.description = skillDescription;
});

activeSkillItems.forEach((activeSkillItem) => {
  const skillName = activeSkillItem.querySelector(".header .name");
  const skillLevel = activeSkillItem.querySelector(".header .level");
  const skillElementSrc = activeSkillItem
    .querySelector(".waza-element img")
    ?.getAttribute("src");
  const skillPower = activeSkillItem.querySelector(".stats .item.red .value");
  const skillCooldown = activeSkillItem.querySelector(
    ".stats .item.yellow .value"
  );
  const skillRange = activeSkillItem.querySelector(".stats .item.grey .value");
  const skillDescription = activeSkillItem.querySelector(".content p");

  activeSkillsArray.push({
    name: skillName ? skillName.innerText : null,
    level: skillLevel ? skillLevel.innerText : null,
    image: skillElementSrc,
    power: skillPower ? skillPower.innerText : null,
    coolDown: skillCooldown ? skillCooldown.innerText : null,
    range: skillRange ? skillRange.innerText : null,
    description: skillDescription ? skillDescription.innerText : null,
  });
});

const pal = {
  name: palElement.querySelector(".name").textContent || "Unnamed",
  title: palElement.querySelector("p").textContent,
  rarity: {
    name: palElement.querySelector(".rarity .name").textContent,
    level: palElement.querySelector(".rarity .lv").textContent,
    class: palElement.querySelector(".rarity .name").textContent.toLowerCase(),
  },
  elements: elementsArray,
  description: palElement.querySelector(".about").textContent,
  drops: dropsArray,
  stats: statsArray,
  uniqueCombinations: combinationsArray,
  workSuitability: workSuitabilityArray,
  partnerSkill: partnerSkillInfo,
  activeSkills: activeSkillsArray,
};

console.log(pal);
