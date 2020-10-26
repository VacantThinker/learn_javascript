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
    console.log('\n----------------\n','prop\n',target, prop); // { name: 'tony', gender: 'male' }
    // console.log(prop); // age, name, gender

    if (prop in target) { // 如果该prop属性存在于target对象中
      return target[prop]; // 返回该prop属性
    } else {
      return 'sorry, cant find it' // 否则, 告诉TA找不到该prop属性
    }
  }
});

console.log(myProxy.age); // 获取一个myObj所没有的属性age,
console.log(myProxy.gender);
console.log(myObj.name);
console.log(myObj.age);



