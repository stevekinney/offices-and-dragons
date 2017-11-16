import shuffle from 'lodash/shuffle';

const roles = ['Warrior', 'Mage', 'Cleric', 'Thief', 'Necromancer', 'Paladin', 'Hunter'];

const getLevel =  () => Math.round(Math.random() * 16);
const getHp =  () => Math.round(Math.random() * 200 + 50);
const getMana = () => Math.round(Math.random() * 200 + 50);
const getRole = () => {
  const [ role ] = shuffle(roles);
  return role;
}

export default (friend) => {
  const level = getLevel();
  const hp = getHp();
  const mana = getMana();
  const role = getRole();

  return {...friend, level, hp, mana, role }
}
