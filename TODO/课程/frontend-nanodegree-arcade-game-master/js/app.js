// 我们的玩家必须避免的敌人
var Enemy = function() {
    // 应用于每个实例的变量如下：
    // 我们为您提供了一个开始

    // The image/sprite for our enemies, this uses
    // 我们提供的帮助程序，可以轻松加载图像
    this.sprite = 'images/enemy-bug.png';
};

// 更新敌人位置，游戏所需方法
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // 应将任何移动乘以dt参数
    // 这将确保游戏以相同的速度运行
    // 所有计算机
};

// 在屏幕上绘制敌人，游戏所需的方法
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在编写自己的player类
// 此类需要update（）、render（）和handleinput（）方法。


// 现在实例化对象
// 将所有敌方对象放在一个称为allenemies的数组中
// 将player对象放入名为player的变量中



// 这将侦听按键并将按键发送到
// player.handleinput（）方法。你不需要修改这个
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
