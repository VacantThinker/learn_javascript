let map = new Map([
  [
    'name',
    'tony'
  ]
]);

let mapProxy = new Proxy(map, {
  get(target, key, receiver) {
    let val = Reflect.get(...arguments);
    let val2 = Reflect.get(target, key, receiver);
    // console.log(val2);

    // console.log("取值:",...arguments)
    return typeof val == 'function' ? val.bind(target) : val
  }
});
// mapProxy.get("name");
let name = mapProxy.get("name");
console.log('name\n', name);