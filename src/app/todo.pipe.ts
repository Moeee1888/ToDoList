import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'todoPipe'
})
export class TodoPipe implements PipeTransform {

  transform(todo:Todo): string {
    let myclass:string='todo '
    let today=new Date ()
    let todoDate=new Date(todo.date) //la date de la planification du task
    if (todoDate.getTime()-today.getTime()<=2*3600*24*1000)
    myclass=myclass+'border border-danger border-3'
    return myclass ;
  }

}
