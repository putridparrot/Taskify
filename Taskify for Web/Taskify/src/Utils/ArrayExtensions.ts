class ArrayExtensions
{
  static firstOrDefault = function<T> (array:Array<T> , predicate: Function) : T | null{
  return array.reduce((prevValue:T | null, currentValue) => {
    if (!prevValue) {
      if (predicate(currentValue)) {
        prevValue = currentValue;
      }
    }
    return prevValue;
  }, null);
}    
}

export {ArrayExtensions}