import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../interface';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Change Detection is very important, it prevents annesesary changes(or allows)
// if change happens in room list, we want to live room component unchangable - On Push(has to have requirements (input, output, statemanagement libraries)), else - default
// if we use OnPush then we should understand the fact, that we will see changes only!! if we dont change object (roomList by pressing addRoom), we should create a new ONE, so no this.roomList.push, it changes, doesnt create a new one
export class RoomsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  // NgOnChange can be only applied if component has input, wich make sence i guess
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  // creating html property rooms in html tags
  // Input is a way to pass info between components
  @Output() selectedRoom = new EventEmitter<RoomList>();
  // emitter - imitate event
  // RoomList - data, that we send to parent
  // A way to communicate from CHILD to PARENT
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
    // trigger event with room as param
  }
}
