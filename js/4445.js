// let sh = document.getElementById('sh');
// let ty = document.getElementById('ty');
// let ss = document.getElementById('ss');

// let wen1 = document.getElementById('wen1');
// let wen2 = document.getElementById('wen2');
// let wen3 = document.getElementById('wen3');
// 写法1.
//常规
// sh.onclick = function (){
//         wen1.style.display = 'none';
//         wen2.style.display = 'none';
//         wen3.style.display = 'none';
//         wen1.style.display = 'block';  
// };
// ty.onclick = function (){
//     wen1.style.display = 'none';
//     wen2.style.display = 'none';
//     wen3.style.display = 'none';
//     wen2.style.display = 'block';  
// };

// ss.onclick = function (){
//     wen1.style.display = 'none';
//     wen2.style.display = 'none';
//     wen3.style.display = 'none';
//     wen3.style.display = 'block';  
// };

// 写法2.
// //简化
// function dakai(wena) {
//     return function () {
//     wen1.style.display = 'none';
//     wen2.style.display = 'none';
//     wen3.style.display = 'none';
//     wena.style.display = 'block';
//     }
// }
// sh.onclick = dakai(wen1);
// ty.onclick = dakai(wen2);
// ss.onclick = dakai(wen3);

// 写法3.
//简化
// function dakai(wena) {
//     wen1.style.display = 'none';
//     wen2.style.display = 'none';
//     wen3.style.display = 'none';
//     wena.style.display = 'block';
// }

// sh.onclick = function () {
//     dakai(wen1);
// };
// ty.onclick = function () {
//     dakai(wen2);
// };
// ss.onclick = function () {
//     dakai(wen3);
// };


//语言js写中文选择
let lang = document.getElementById('lang');
let xians = document.getElementById('xians');

//二维码弹出

let erwei = document.getElementById('erwei');
let xians1 = document.getElementById('xians1');

//打开||关闭函数
function open(a) {
    a.style.display = 'block';
}
function xopen(b) {
    b.style.display = 'none';
}
//中文
lang.onmousemove = function () {
    open(xians);
};
lang.onmouseout = function () {
    xopen(xians);
};

//二维码

erwei.onmousemove = function () {
    open(xians1);
};

erwei.onmouseout = function () {
    xopen(xians1)
};



// lang.onmousemove = function () {
//     xians.style.display = 'block';
// };

// lang.onmouseout = function () {
//     xians.style.display = 'none';
// };
// erwei.onmousemove = function () {
//     xians1.style.display = 'block';
// };

// erwei.onmouseout = function () {
//     xians1.style.display = 'none';
// };

// function shubiao(ab) {
//     return function () {
//         xians.style.display = 'ab';
//     }   
// }
// lang.onmousemove = shubiao('block');
// lang.onmouseout = shubiao('none');
// console.log(shubiao);

// //方法一：逐步获取
//获取浏览器的宽度
let vieWidth = document.documentElement.clientWidth || document.body.clientWidth

//获取包裹层
let slideWrap = document.getElementById('slide-wrap')
//设置包裹层宽度
slideWrap.style.width = vieWidth + 'px'

//获取内容区
let slideContent = document.getElementsByClassName('slide-content')[0]
//获取ul下的li列表
let liList = slideContent.getElementsByTagName('li')
//设置内容区的宽度
slideContent.style.width = vieWidth * liList.length + 'px'
//设置每个li的宽度
for (let i = 0; i < liList.length; i++) {
    liList[i].style.width = vieWidth + 'px'
}

// //获取底部小方框下的a
// let aList = document.getElementsByClassName('slide-nav')[0].getElementsByTagName('a')
// for ( let i = 0; i< aList.length; i++) {
//     aList[i].onclick = function () {
//         slide(i)
//     }
// }

// //滚动

// function slide(iZ) {
//     let left = iZ * vieWidth;
//     slideContent.style.left = -left + 'px' 
// }

//获取浏览器的宽度
let vieWidth = document.documentElement.clientWidth || document.body.clientWidth
//获取视图
let slideWrap = document.getElementById('slide-wrap');
//获取可视区
let slideContent = slideWrap.getElementsByClassName('slide-content')[0];;
//获取li索引-数组
let liList = slideContent.getElementsByTagName('ul')[0].getElementsByTagName('li');
//获取a的索引-数组
slideNavA = slideWrap.getElementsByClassName('slide-nav')[0].getElementsByTagName('a')
//获取右箭头下的a
let next = slideWrap.getElementsByClassName('slide-next')[0].children[0];
//获取右箭头下的
let prev = slideWrap.getElementsByClassName('slide-prev')[0].children[0];
console.log(next)
//设置视图的宽度
slideWrap.style.width = vieWidth + 'px';
//设置滚动区域的宽度
slideContent.style.width = vieWidth * liList.length + 'px';
//循环
for (let i = 0; i < liList.length; i++) {
    ik = 0;
    liList[i].style.width = vieWidth + 'px';
    slideNavA[i].onclick = function () {
        ik = i;
        slide(i);
    };
    //右箭头偏移
    next.onclick = function () {
        ik--;
        if (ik < 0) { ik = liList.length - 1 };
        slide(ik);
    };
    //左尖头偏移
    prev.onclick = function () {
        ik++;
        if (ik > liList.length - 1) { ik = 0 }
        slide(ik);
    }
    //偏移/高光清除/打开-重用
    function slide(k) {
        for (let ia = 0; ia < liList.length; ia++) {
            slideNavA[ia].className = '';
        };
        slideNavA[k].className = 'current';
        let left = vieWidth * k;
        slideContent.style.left = -left + 'px';
    }
}

//获取浏览器的宽度
let vieWidth = document.documentElement.clientWidth || document.body.clientWidth
//获取视图
let slideWrap = document.getElementById('slide-wrap');
//获取可视区
let slideContent = slideWrap.getElementsByClassName('slide-content')[0];;
//获取li索引-数组
let liList = slideContent.getElementsByTagName('ul')[0].getElementsByTagName('li');
//获取a的索引-数组
slideNavA = slideWrap.getElementsByClassName('slide-nav')[0].getElementsByTagName('a')
//获取右箭头下的a
let next = slideWrap.getElementsByClassName('slide-next')[0].children[0];
//获取右箭头下的
let prev = slideWrap.getElementsByClassName('slide-prev')[0].children[0];
console.log(next)
//设置视图的宽度
slideWrap.style.width = vieWidth + 'px';
//设置滚动区域的宽度
slideContent.style.width = vieWidth * liList.length + 'px';

//循环
for (let i = 0; i < liList.length; i++) {
    let ik = 0;
    //滚动开关标记
    let flag = false;
    let flagOn = null;

    //自动播放
    let autoplay1 = null;



    liList[i].style.width = vieWidth + 'px';
    slideNavA[i].onclick = function () {
        ik = i;
        slide(i);
    };
    //右箭头偏移
    next.onclick = function () {
        if (flag) { return false };
        flag = true;
        ik--;
        if (ik < 0) { ik = liList.length - 1 };
        slide(ik);
    };
    //左尖头偏移
    prev.onclick = function () {
        if (flag) { return false };
        flag = true;
        zuobian();
    };

    //左边
    //进入
    slideWrap.onmouseenter = function () {
        clearInterval(autoplay);
        console.log(autoplay)
    };
    autoplay1 = setInterval(function () {
        zuobian();
    }, 3000);

    function zuobian() {
        ik++;
        if (ik > liList.length - 1) { ik = 0 }
        slide(ik);
    };
    //偏移/高光清除/打开-重用
    function slide(k) {
        for (let ia = 0; ia < liList.length; ia++) {
            slideNavA[ia].className = '';
        };
        slideNavA[k].className = 'current';
        let left = vieWidth * k;
        slideContent.style.left = -left + 'px';
        //定时器
        flagOn = setTimeout(function () {
            flag = false;
            clearTimeout(flagOn)
        }, 1000)
    };

}



let flag = true

a.onclick = function () {
    if (flag != true) { return flase };
    flag = true;
    //下面标记代码忽略

}

/* 流程
    if (flag) { return flase}; 等同于 if (flag != flase) { return flase}; 
        
    当未点击前flag值为flase，因为条件为 不等于他if 不赋值
    当第一次点击后赋值为true，此时的满足了 flag != flase ，当点击第二次时赋值为flase，不执行后续代码


*/