let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "myTheme2",
  buttonTheme: [
    {
      class: "myTheme2b",
      buttons: "{bksp} {shift} {enter} {tab} {lock}"
    },
    {
      class: "bottomButtonTheme",
      buttons: "{space}"
    },
    {
      class: "capsLockTheme",
      buttons: "{lock}"
    }
  ],
  display: {
    "{enter}": "Enter",
    "{bksp}": "Back",
    "{lock}": "Caps Lock",
    "{shift}": "Shift",
    "{tab}": "Tab",
    "{space}": " "
  },
  layout: {
    default: [
      "0 1 2 3 4 5 6 7 8 9 ö ü ó {bksp}",
      "q w e r t z u i o p ő ú",
      "{lock} a s d f g h j k l é á ű {enter}",
      "í y x c v b n m , . -",
      ".hu {space} @"
    ],
    shift: [
      "0 1 2 3 4 5 6 7 8 9 Ö Ü Ó {bksp}",
      "Q W E R T Z U I O P Ő Ú",
      "{lock} A S D F G H J K L É Á Ű {enter}",
      "Í Y X C V B N M ? : _",
      ".hu {space} @"
    ]
  }
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
