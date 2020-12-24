class ArrayExtensions {
  static firstOrDefault = <T>(
    array: Array<T>,
    predicate: (T) => boolean
  ): T | null => {
    return array.reduce((prevValue: T | null, currentValue) => {
      let pValue = prevValue;
      if (!pValue) {
        if (predicate(currentValue)) {
          pValue = currentValue;
        }
      }
      return pValue;
    }, null);
  };
}

export default ArrayExtensions;
