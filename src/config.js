let config = {
  api: "http://123xxx.dev/",
  home: "home"
}

let proxy = new Proxy(config, {
    get(target, name, receiver) {
        if(!name.match(/^_/)){
          return Reflect.get(target, name);
        }else{
          name = name.replace(/^_/, "");
          return Reflect.get(target, 'api').replace(/\/$/, "") + "/" + Reflect.get(target, name);
        }
      }
});

export default proxy;