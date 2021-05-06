const convertNameToEmail = (nome) => {
  const splitName = nome.split(' ');
  let email = '';
  for (let i = 0; i < splitName.length; i += 1) {
    email += splitName[i];
    if (i < splitName.length -1) {
      email += '_';
    } 
  }
  email += '@trybe.com';
  return email;
}

const newEmployees = () => {
  const employees = {
    id1: (name1) => {
      objId1 = { nomeCompleto: name1, email:`${convertNameToEmail(name1)}`}
      return objId1;
    },
    id2: (name2) => {
      objId2 = { nomeCompleto: name2, email:`${convertNameToEmail(name2)}`}
      return objId2;
    },
    id3: (name3) => {
      objId3 = { nomeCompleto: name3, email:`${convertNameToEmail(name3)}`}
      return objId3;
    },
  
  };
  return employees;
};
console.log(newEmployees().id1('Gabriel Menin')); 
console.log(newEmployees().id2('Gabriel Menin')); 
console.log(newEmployees().id3('Gabriel Menin')); 