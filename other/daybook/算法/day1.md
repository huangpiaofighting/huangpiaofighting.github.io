> 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal

## 网路

```js
function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handle = -1;
    this.start = () => {
        this.handle = setTimeout(() => {
            fn();
            this.time++;
            this.start();
            console.log( this.a + this.time * this.b);
        }, this.a + this.time * this.b);
    }

    this.stop = () => {
        clearTimeout(this.handle);
        this.time = 0;
    }
}

var a = new mySetInterVal(() => {console.log('123')},1000, 2000 );
a.start();
a.stop();
```



## myself

```js
function mySetInterVal(fn, a, b){
    let count = 0;
    let timer = null;
    let stop = false;
    let clearTime = function (params) {
        clearTimeout(params)
    }
    let exeTimer = function () {
        clearTime(timer)
        if(stop){
            console.log("执行结束")
            return;
        }
        let gap = a + count*b;
        timer = setTimeout(() => {
            fn()
            console.log("开始执行",gap)
            exeTimer(a +b)
            count = count + 1;
        }, gap);
    }
    exeTimer(a)
    return ()=>{
        stop = true;
        clearTime();
        count = 0;
    }
}
function testFn() {
    console.log("this is testFn")
}
console.log("开始运行函数")
let myClear = mySetInterVal(testFn,1000,500);
myClear()
```

