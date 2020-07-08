<template>
    <div class="imageshow">
        <p class="listencount">2389万</p>
        <img src="../image/IMG_20200126_173323.jpg" alt="">
        <p class="disc">高考加油：星光不问赶路人 时光不负有心人</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scope>
.imageshow{
    width: 100%;
    height: 100%;
    margin: 10px;
} 

.imageshow img{
    margin-top: 0;
    min-height: 140px;
    min-width: 140px;
    max-height: 160px;
    max-width: 160px;
    position: relative;
    z-index: 0;
}

.imageshow .listencount{
    position:relative;
    left: 0px;
    top: 36px;
    z-index: 1;
    background-image: linear-gradient(to right,rgba(248, 244, 244, 0), rgba(99, 96, 96, 0.7));
    opacity: 0.7;
    width: 160px;
    color: white;
    text-align: right;
}
.imageshow .disc{
    word-wrap:break-word;
    word-break: normal;
    width: 150px;
    font-size: 12px;
}
</style>