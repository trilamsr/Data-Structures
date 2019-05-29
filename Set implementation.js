class SetBuiltIn {
  constructor(dataArray) {
    this.storage = [];
    this.length = 0;
    (() => {
      for (let ele of dataArray) {
        if (this.storage.includes(ele)) {
          continue;
        }
        this.storage.push(ele);
      }
      this.length = this.storage.length;
    })();
  }
  show() {
    return this.storage;
  }
  add(data) {
    if (this.storage.includes(data)) {
      throw new Error("The set already has this data");
    } else {
      this.storage.push(data);
      this.length++;
    }
  }
  remove(data) {
    if (this.storage.includes(data)) {
      let index = this.storage.indexOf(data);
      this.length--;
      return this.storage.splice(index, 1);
    } else {
      return "Set does not have this data";
    }
  }
  size() {
    return this.length;
  }
  union(set) {
    if (set instanceof SetBuiltIn) {
      console.log(
        "Union return a new instance of set with data from both sets"
      );
      return new SetBuiltIn([...set.storage, ...this.storage]);
    } else {
      throw new Error("This set is not an instance of SetBuiltIn");
    }
  }
  subsetOf(set) {
    if (set instanceof SetBuiltIn) {
      for (let data of this.storage) {
        if (!set.storage.includes(data)) {
          return false;
        }
      }
      return true;
    } else {
      throw new Error("This set is not an instance of SetBuiltIn");
    }
  }

  intersect(set) {
    if (set instanceof SetBuiltIn) {
      console.log(
        "Intersect return a new instance of set with data both sets have in common"
      );
      let dataArray = [];
      for (let ele of this.storage) {
        if (set.storage.includes(ele)) {
          dataArray.push(ele);
        }
      }
      return new SetBuiltIn(dataArray);
    } else {
      throw new Error("This set is not an instance of SetBuiltIn");
    }
  }
  difference(set) {
    if (set instanceof SetBuiltIn) {
      console.log(
        "Difference return a new instance of set with data in the first set that are not in the second set"
      );
      let dataArray = [];
      for (let ele of this.storage) {
        if (!set.storage.includes(ele)) {
          dataArray.push(ele);
        }
      }
      return new SetBuiltIn(dataArray);
    } else {
      throw new Error("This set is not an instance of SetBuiltIn");
    }
  }
}
