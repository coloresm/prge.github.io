//获取浏览器的宽度
let vieWidth = document.documentElement.clientWidth || document.body.clientWidth
//获取视图
let slideWrap = document.getElementById('slide-wrap')
//获取左边箭头
let prev = slideWrap.getElementsByClassName('slide-prev')[0].getElementsByTagName('a')[0]
//获取右边箭头
let next = slideWrap.getElementsByClassName('slide-next')[0].getElementsByTagName('a')[0]
//获取滚动区域
let slideContent = slideWrap.getElementsByClassName('slide-content')[0]
//获取li的length
let liList = slideContent.getElementsByTagName('li')
//获取a,length
let aList = slideWrap.getElementsByClassName('slide-nav')[0].getElementsByTagName('a')
//设置视图的宽度
slideWrap.style.width = vieWidth + 'px'
//设置滚动区域的宽度
slideContent.style.width = vieWidth*liList.length + 'px'
//定时器开关
let flagTime = autoTime = null
//设置li的宽度/触发偏移事件
for ( let i = 0; i < liList.length; i++) {
    flag = false;
    ia = 0;
    liList[i].style.width = vieWidth + 'px';
    aList[i].onclick = () => {
        ia = i;
        slide(i);
    };
    prev.onclick = () => {
        if( flag ) return;
        flag = true;
        autoPrev()
    };
    next.onclick = () => {
        if (flag) return;
        flag = true;
        ia--;
        if (ia < 0) { ia = liList.length - 1};
        slide(ia)
    }
}
//自动定时器
autoTime = setInterval(() => autoPrev(),3000)
//鼠标进入清除自动定时器
slideWrap.onmouseenter = () => clearInterval(autoTime)
//鼠标离开打开自动定时器
slideWrap.onmouseleave = () => {
    autoTime = setInterval(() => autoPrev(),3000)
}
//左箭头/自动-重用
function autoPrev() {
    ia++;
    if ( ia == liList.length) { ia = 0};
    slide(ia)
}
//偏移/高光/定时器-重用
function slide(ik) {
    let left = ik*vieWidth;
    slideContent.style.left = -left + 'px';
    for ( let i = 0; i < liList.length; i++) {
        aList[i].className = '';
    };
    aList[ik].className = 'current';
    flagTime = setTimeout(() => {
        flag = false;
        clearTimeout(flagTime)
    }, 1000);
}


//医生轮播
//定宽度
let wh = 1200
let doctor = document.getElementById('doctor')
//获取滚动范围
let doctorSlide = doctor.getElementsByClassName('doctor-slide')[0]
//获取滚动范围数组
let doctorA = doctorSlide.children
//设置滚动范围宽度
doctorSlide.style.width = wh * doctorA.length + 'px'
//获取添加a的位置
let SlideA =document.getElementById('slideA').children
//设置内容区宽度
for( let i = 0; i < doctorA.length; i++) {
    doctorA[i].style.width = wh + 'px';
    SlideA[i].onclick = function () {
        doctorRight(i);
        clearInterval(autoTimeDoctor);
    }
}
let k = 0;
function automatic(){
    k++;
    if( k == doctorA.length) { k = 0}
    doctorRight(k);
}
autoTimeDoctor = null
//鼠标进入暂停自动播放
doctorSlide.onmouseenter = () => {
    clearInterval(autoTimeDoctor)
}
//自动播放
autoTimeDoctor = setInterval(() => {
    automatic();
}, 3000);
//离开
doctorSlide.onmouseleave = () => {
    autoTimeDoctor = setInterval(() => {
        automatic();
    }, 3000);
}
//高光/偏移
function doctorRight(left) {
    iA = wh * left;
    doctorSlide.style.left = -iA + 'px';
    for(let ik = 0; ik < doctorA.length; ik++) {
        SlideA[ik].className = 'slide-a';
    };
    SlideA[left].className = 'slide-a current';
}
