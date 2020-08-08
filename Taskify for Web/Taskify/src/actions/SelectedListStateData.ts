export  class SelectedListStateData{
  get isUser(): boolean {
    return this._isUser;
  }

  set isUser(value: boolean) {
    this._isUser = value;
  }
  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }  
  get isSystem(): boolean {
    return this._isSystem;
  }

  set isSystem(value: boolean) {
    this._isSystem = value;
  }
  
  private _id: Number;
  private _isSystem: boolean;
  private _isUser: boolean;  
  
  constructor(id: Number, isSystem:boolean, isUser:boolean) {
    this._id = id;
    this._isSystem = isSystem;
    this._isUser = isUser;    
  }
}