/* Engine.js
此文件提供游戏循环功能（更新实体和渲染）,在屏幕上绘制初始游戏板，然后调用更新和在你的player和enemy对象上渲染方法（在你的app.js中定义）.

A游戏引擎通过一遍又一遍地绘制整个游戏屏幕, 就像你小时候创作的动画书一样. 
当你的球员移动过屏幕, 可能只是Image/Character在moving或being
但事实并非如此.真正发生的是整个“场景”
一次又一次地被画出来，呈现出动画的错觉。
 

This engine makes the canvas' context (ctx) object globally available to make writing app.js a little simpler to work with.
这个引擎使canvas的context（ctx）对象全局可用，使编写app.js变得更简单。
 */

var Engine = (function(global) {
    /* 预先定义我们将在这个范围内使用的变量,
    创建canvas元素, 获取 the 2D context for that canvas
    设置canvas元素的高度/宽度并将其添加到DOM
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    /* 此函数用作游戏循环本身的起始点，并正确处理调用更新和呈现方法。*/
    function main() {
        /* 获取我们的时间增量信息需要平滑动画。
        因为每个人的计算机处理
        指令在不同的速度下，我们需要一个恒定的值
        对每个人都一样（不管他们的电脑速度有多快）
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* 调用更新/呈现函数，将时间增量传递给我们的更新功能，因为它可以用于平滑动画。
         */
        update(dt);
        render();

        /* 设置上次用于确定时间增量的时间变量
        下次调用此函数时.
         */
        lastTime = now;

        /* 使用浏览器的requestAnimationFrame函数调用
        当浏览器能够绘制另一帧时，再次运行.
         */
        win.requestAnimationFrame(main);
    }

    /* 此函数执行一些只应发生一次的初始设置，
    尤其是设置
    游戏循环。
     */
    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    /* 这个函数由main（我们的游戏循环）调用，它本身调用可能需要更新实体数据的函数。
    基于如何实现碰撞检测（当两个实体占用相同的空间时，例如当您的角色应该消失时）
    你可能会发现这里需要添加一个额外的函数调用。 
    现在，我们已经将其注释掉了——您可能希望也可能不希望通过这种方式实现此功能（您可以只对app.js文件中的实体本身实现冲突检测）。
     */
    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    /* 这是由更新函数调用的，并按照app.js中的定义循环遍历allenemies数组中的所有对象，并调用它们的update（）方法。
    然后它将调用播放器对象的更新函数。这些更新方法应该只关注更新与对象相关的数据/属性。
    在渲染方法中绘制
     */
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    /* 此函数最初绘制 "game level"，然后调用renderities函数。
    记住，这个功能被称为每个游戏标记（或游戏引擎的循环），因为这就是游戏的工作原理——它们是动画的动画书，但实际上它们只是一遍又一遍地绘制整个屏幕。
     */
    function render() {
        /* 此数组保存用于 "game level" 特定行的图像的相对URL。
         */
        var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        // 绘图前，清除现有canvas
        ctx.clearRect(0,0,canvas.width,canvas.height);

        /* 循环遍历上面定义的行数和列数，并使用rowImages数组为 "grid" 的该部分绘制正确的图像。
         */
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* canvas上下文元素的drawImage函数需要3个参数：要绘制的图像、要开始绘制的X坐标和要开始绘制的Y坐标。
                我们正在使用我们的资源帮助器来引用我们的图像，这样我们就可以获得缓存这些图像的好处，因为我们一次又一次地使用它们。
                 */
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    /* 此函数由渲染函数调用，并在每个游戏标记上调用。
    它的目的是调用您在app.js中对敌人和玩家实体定义的渲染函数。
     */
    function renderEntities() {
        /* 循环遍历allenemies数组中的所有对象，并调用您定义的呈现函数。
         */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
    }

    /* 这个功能什么也不做，但它可能是一个处理游戏重置状态的好地方——可能是一个新的游戏菜单，或者是一个屏幕上的游戏。它只被init（）方法调用一次。
     */
    function reset() {
        // noop
    }

    /* 继续加载我们知道需要绘制的所有图像。然后将init设置为回调方法，这样当所有这些图像都正确加载时，我们的游戏就会开始。
     */
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
    ]);
    Resources.onReady(init);

    /* 将canvas的上下文对象分配给全局变量（在浏览器中运行时为窗口对象），这样开发人员就可以更容易地从app.js文件中使用它。
     */
    global.ctx = ctx;
})(this);
