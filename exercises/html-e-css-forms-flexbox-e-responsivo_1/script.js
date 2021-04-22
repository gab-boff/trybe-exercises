const personState = document.querySelector('#person-state');

const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];


function inputState() {
  for (const states in stateOptions) {
    let createOption = document.createElement('option');
    createOption.value = states;
    createOption.innerHTML = stateOptions[states];
    personState.appendChild(createOption);
  }
}

inputState();
