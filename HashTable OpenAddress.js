
//Hash Table simple Open Addressing
//NOTE OPEN ADDRESSING REQUIRE M > N where M = table size and N = number of data points

class HashTableOpenAddress {
    constructor(size = 97) {
      this.table = new Array(size);
      this.size = size;
    }
    //Multiplication methods
    hashFunction(data) {
      const A = 0.6180339887;
      let hashCode = Math.floor(((data * A) % 1) * this.size);
      return hashCode;
    }
    putting(data) {
      let hashCode = this.hashFunction(data);
      while (this.table[hashCode] !== undefined) {
        hashCode++;
      }
      this.table[hashCode] = data;
    }
    removing(data) {
      let hashCode = this.hashFunction(data);
      while (this.table[hashCode] !== data) {
        hashCode++;
      }
      this.table[hashCode] = undefined;
    }
  
    //getting return position on table
    getting(data) {
      let hashCode = this.hashFunction(data);
      while (this.table[hashCode] !== data) {
        hashCode++;
      }
      return hashCode;
    }
  }
  
  let aloha2 = new HashTableOpenAddress();
  console.log(aloha2);
  console.log(aloha2.table.filter(x => x).length);
  
  for (let i = 55; i < 130; i++) {
    aloha2.putting(i);
  }
  console.log(aloha2);
  console.log(aloha2.table.filter(x => x).length);
  
  //Mulitplication method
  /*
      a/Choose CONSTANT A between 0 < A < 1 - According to Knuth A = 0.6180339887 - is a good choice.
      b/ Multiply k by A
      b/ Extract fractional parks of kA
      c/ Multiply said fraction to size (m)
      d/ Math.floor() it.
  
  */
  /* 