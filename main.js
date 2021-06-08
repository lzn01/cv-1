// 第一步 获取到demo1
let demo1 = document.querySelector("#demo1") // 通过css选择器找到这个元素demo
// 第二步 设置demo1里面的内容
demo1.innerHTML = 1
// 第三步 从1变2
setTimeout(() => {
    demo1.innerHTML = 2
}, 3000)

// 上面的代码,demo不能一直改变,要想实现效果要用到setInterval
// 第一步 获取demo2
let demo2 = document.querySelector("#demo2")
let n = 1
// 第二步 设置demo2内容
demo2.innerHTML = n
// 第三步 每3秒执行一次
setInterval(() => {
    n += 1
    demo2.innerHTML = n
}, 1000)

// 使用setTimeout模拟setInterval，好处是可以随时停止
let demo3 = document.querySelector("#demo3")
let string = `你好，我是一名前端新人`
let m = 0
demo3.innerHTML = string.substring(0, m) // 从索引0开始，到m结束

let step = () => {
    setTimeout(() => {
        m += 1
        demo3.innerHTML = string.substring(0, m)
        if (m >= string.length) {
            return
        }
        step()
        // 如果m < 10则调用下一次step
        // if (m < 10) {
        //     step()
        // } else {
        // }

    }, 200)
}

step() // 1 => 2