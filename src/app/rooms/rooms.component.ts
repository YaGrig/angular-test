import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './interface';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  title = 'Room list';

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  // created a new instance of HeaderComponent, in case we dont have access to him in this component, we can now use headerComponent
  // static true makes it possible to access headerComponent on ngOnInit, else onViewInit
  // dont use static true if component has async functionality
  // @ViewChild(HeaderComponent, { static: true })
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Room',
      amenities: 'Wi-fi',
      price: 500,
      photo: 'photo',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      rating: 5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe room',
      amenities: 'bath',
      price: 1000,
      photo: 'photo',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      rating: 4.5,
    },
    {
      roomNumber: 3,
      roomType: 'Private room',
      amenities: 'Wi-fi, bath',
      price: 1500,
      photo: 'photo',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      rating: 3.5,
    },
  ];

  constructor() {}
  ngAfterViewChecked(): void {}
  // after view init means when everything in this component is ready to use you can start working with components(tags) from other places which are inside of this component
  // to get access to new instant of headerComponent
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Room TITLE VIEW';
  }
  // docheck listen to any event happening in whole application like ngonchange etc, very expensive
  ngDoCheck(): void {
    console.log('on changes is called');
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms Lists';
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Not-Private room',
      amenities: 'Wi-fi, bath',
      price: 500,
      photo: 'photo',
      checkInTime: new Date(),
      checkOutTime: new Date(),
      rating: 3.57,
    };
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room];
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
