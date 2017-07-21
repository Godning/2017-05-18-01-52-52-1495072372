module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(
    `o) 最小值 = ${sequence.minimum()}\no) 最大值 = ${sequence.maxnum()}\no) 元素数量 = ${sequence.arraysize()}\no) 平均值 = ${sequence.arrayavg()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.num = input;
  }

  minimum() {
    // Write your code here
    let remin = 9999;
    for(let i of this.num){
        if(i<remin){
            remin = i;
        }
    }
    return remin;
  }
  // Write your code here
  maxnum(){
    let remax = -9999;
    for(let i of this.num){
        if(i>remax){
            remax = i;
        }
    }
    return remax;
  }
  
  arraysize(){
      return this.num.length;
  }
  
  arrayavg(){
      let sum = 0;
      for(let a of this.num){
          sum += a;
      }
      return (sum/this.arraysize()).toFixed(2);
  }
}
