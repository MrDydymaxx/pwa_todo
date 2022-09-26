import { Component, Input } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public tasks: string[] = [];
	public newTask: string = '';
	public finishedTasks: string[] = [];

	addTask() {
		if (this.newTask == '') {
		}
		else {
			this.tasks.push(this.newTask);
			this.newTask = '';
		}
    console.log(this.tasks);
	}
	taskComplete(index:any) {
		this.finishedTasks.push(this.tasks[index]);
		this.tasks.splice(index, 1);

	}
	taskUncomplete(index: any) {
		this.tasks.push(this.finishedTasks[index]);
		console.log(this.tasks);
		this.finishedTasks.splice(index, 1);
	}

	modifyTask(index: number) {
		console.log(index);
	}

	deleteTask(index: number) {
		this.tasks.splice(index, 1);
	}

	modifyFinishedTask(index: number) {
		console.log(index);
	}

	deleteFinishedTask(index: number) {
		this.finishedTasks.splice(index, 1);
	}

	deleteDoneTask() {
		this.finishedTasks = [];
	}

	deleteAllTask() {
		this.tasks = [];
		this.finishedTasks = [];
	}
	filterUndoneTask() {
		var done: any = document.getElementById('done');
		done.style.display = 'none';
		var undone: any = document.getElementById('undone');
		undone.style.display = 'flex';
	}

	filterDoneTask() {
		var done: any = document.getElementById('done');
		done.style.display = 'flex';
		var undone: any = document.getElementById('undone');
		undone.style.display = 'none';
	}

	filterAllTask() {
		var done: any = document.getElementById('done');
		done.style.display = 'flex';
		var undone: any = document.getElementById('undone');
		undone.style.display = 'flex';
	}
}
