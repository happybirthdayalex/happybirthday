const lib = {
  "noun": [
    "yaoi",
    "cum",
    "catboy",
    "bottom growth",
    "HRT",
    "testosterone",
    "ERP",
    "pussy",
    "dick",
    "Brazil",
    "hyperpop",
    "nightcore",
    "gore",
    "futa",
    "Furby",
    "bottom surgery",
    "top surgery",
    "euphoria",
    "dysphoria"
  ],
  "adj": [
    "based",
    "masc",
    "trans",
    "furry",
    "communist",
    "cis",
    "normal",
    "transphobic",
    "cisphobic",
    "chronically online",
    "gay",
    "lesbian",
    "Brazilian",
    "NSFW",
    "fujoshi"
  ],
  "verb": [
    "pumping",
    "packing",
    "ERPing",
    "stimming",
    "transitioning",
    "uploading furry avatars",
    "watching yaoi",
    "mirror dwelling",
    "watching Jerma"
  ],
  "status": [
    "I'm so {adj} and {noun}-pilled",
    "pls send {noun} pics",
    "can't talk, watching {adj} vids",
    "can't talk, watching {noun} vids",
    "I'm not {adj} I just like {noun}",
    "friend me for free {noun}",
    "pls send money for {noun}",
    "currently {verb}",
    "I love my {adj} {noun}",
    "can't stop {verb} today",
    "sorry ladies, I'm already married to {noun}",
    "do not talk to me unless you are {adj}",
    "not {verb} before marriage, sorry",
    "{noun}... que legal!",
    "{noun} campeão do mundo!!",
    "you're either {adj} or you're {verb}",
    "block me if you don't like {noun}",
    "I promise I'm not {verb}",
    "I only like {adj} {noun}",
    "allergic to {noun}, pls be mindful",
    "addicted to {noun}",
    "paying off {noun} debt",
    "I am so real for this ({verb})",
    "{noun} is not a joke",
    "You can be {adj} without being chronically online",
    "{noun}-lover up for adoption",
    "fired for {verb}, anything helps"
  ]
};

function getRandom(arr) {
  const result = arr[Math.floor(Math.random()*arr.length)];
  return result;
};

function getStatus() {
  const template = getRandom(lib.status);
  let status = template.replace('{noun}', getRandom(lib.noun));

  status = status.replace('{noun2}', getRandom(lib.noun));
  status = status.replace('{noun3}', getRandom(lib.noun));
  status = status.replace('{adj}', getRandom(lib.adj));
  status = status.replace('{adj2}', getRandom(lib.adj));
  status = status.replace('{adj3}', getRandom(lib.adj));
  status = status.replace('{verb}', getRandom(lib.verb));
  status = status.replace('{verb2}', getRandom(lib.verb));
  status = status.replace('{verb3}', getRandom(lib.verb));

  document.getElementById("status").textContent = status;
};

function copyText() {
  const statusDiv = document.getElementById("status");
  const statusText = statusDiv.textContent;

  navigator.clipboard.writeText(statusText);
}

window.onload = () => {
  const btn = document.getElementById("generateBtn");
  btn.addEventListener('click', getStatus);

  const statusContainer = document.getElementById("statusContainer");
  statusContainer.addEventListener('click', copyText);

  const ferrari = new Audio("./media/Ferrari.mp3");
  ferrari.play();
  getStatus();
};