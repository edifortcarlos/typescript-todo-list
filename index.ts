// Import stylesheets
import './style.css';
import { TaskList } from './task-list';

const inputTxt = document.getElementById('task-input');
const taskBtn = document.getElementById('task-btn');
const ul = document.getElementById('task-list');
let mytasks = new TaskList(ul);

taskBtn.addEventListener('click', () => {
  let task = (<HTMLInputElement>inputTxt).value;
  (<HTMLInputElement>inputTxt).value = '';
  mytasks.add(task);
});
