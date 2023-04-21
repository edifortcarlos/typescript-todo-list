const TODO_LIST = 'tudo-list';
export class TaskList {
  list: string[] = [];
  ul: HTMLElement;

  constructor(el: HTMLElement) {
    this.ul = el;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem(TODO_LIST, JSON.stringify(this.list));
  }

  read() {
    let saved = localStorage.getItem(TODO_LIST);
    if (saved) this.list = JSON.parse(saved);
  }

  render() {
    this.ul.innerHTML = '';
    this.list.forEach((task) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');

      btn.innerHTML = '-';
      btn.addEventListener('click', () => {
        this.remove(task);
      });

      li.innerHTML = task;
      li.appendChild(btn);
      this.ul.appendChild(li);
    });
  }

  add(task: string) {
    this.list.push(task);
    this.save();
    this.render();
  }

  remove(task) {
    const index = this.list.indexOf(task);
    if (index >= 0) this.list.splice(index, 1);
    this.save();
    this.render();
  }
}
