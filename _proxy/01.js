// Proxy对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。

// 语法
// const p = new Proxy(target, handler)

// 参数
// target
// 要使用Proxy包装的目标对象（可以时任何类型的对象，包括原生数据，函数，甚至另一个代理）。
// handler
// 一个通常以函数作为属性的对象, 各属性中的函数分别定义了在执行各种操作时代理 实例p 的行为。

const myObj = {
  name: 'tony',
  gender: 'male'
};

// new Proxy(target, handler);
// target -> 要处理的目标对象
// handler -> 处理行为 -> [针对]要处理的目标对象 [的方法]
const myProxy = new Proxy(myObj, {

  get(target, prop) {
    console.log(`要查找的属性${prop}\n`, target, prop); // { name: 'tony', gender: 'male' }
    // console.log(prop); // age, name, gender

    if (prop in target) { // 如果该prop属性存在于target对象中
      let propVal = target[prop];
      propVal = `已找到属性${prop}\t对应值${propVal}\n`;
      return propVal; // 返回该prop属性
    } else {
      return `对不起, 找不到属性${prop}\n`; // 否则, 告诉TA找不到该prop属性
    }
  }
});

console.log(myProxy.age); // 访问代理, age, 输出sorry, cant find it
console.log(myProxy.gender); // 访问代理, gender, 输出gender属性对应的值

console.log(myObj.name); // 访问原对象实例, name, 输出tony
console.log(myObj.age); // 访问原对象实例, age, 输出undefined



