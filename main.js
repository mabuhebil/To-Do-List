document.querySelector('button').onclick = function () {
    if (document.querySelector('input').value.length == 0) {
        alert('Please Enter A Task')
    }
    else {
        document.querySelector('.bottom').innerHTML += `
        <div class='task'>
           <span id="taskname">
            ${document.querySelector('input').value}
           </span>
           <button class="delete">
             <i class="fa-solid fa-trash"></i>
           </button>
        </div>
        `;
        const deletes = document.querySelectorAll('.delete');
        for (let i = 0; i < deletes.length; i++) {
            deletes[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        const tasks = document.querySelectorAll('.task')
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
        document.querySelector('input').value = '';
    }
}