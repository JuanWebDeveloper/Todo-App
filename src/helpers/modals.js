// Function to show the modal from create to-do
export const showModalCreateTodo = () => {
  let modal = document.querySelector('.modal');

  modal.classList.contains('hide-modal') && modal.classList.remove('hide-modal');
  modal.classList.add('show-modal');
};

// Function to hide the modal from create to-do
export const hideModalCreateTodo = () => {
  let modal = document.querySelector('.modal');

  modal.classList.remove('show-modal');
  modal.classList.add('hide-modal');
};
