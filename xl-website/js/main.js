// 1. 寻找目标方块：用 document.getElementById 找到我们在 HTML 里写好的那个按钮
const copyBtn = document.getElementById('copy-ip-btn');

// 你服务器的真实 IP，你可以把这里改成 xl 小镇的真实域名或 IP 端口
const serverIP = 'play.xl-town.com';

// 2. 接上红石线：给按钮添加一个“点击事件监听器” (Event Listener)
copyBtn.addEventListener('click', () => {

    // 3. 激活命令方块：使用浏览器自带的 clipboard API 把 IP 写入玩家的剪贴板
    navigator.clipboard.writeText(serverIP).then(() => {

        // --- 下面是给玩家的反馈（点亮红石灯） ---

        // 记住按钮原来的文字，方便一会变回来
        const originalText = copyBtn.innerText;

        // 修改按钮的文字和颜色，告诉玩家成功了
        copyBtn.innerText = '✅ IP 已复制！快去游戏里添加吧';
        copyBtn.style.backgroundColor = '#2E7D32'; // 变成更深的绿色

        // 4. 红石中继器延迟：使用 setTimeout 设置一个 3 秒（3000毫秒）的延迟
        setTimeout(() => {
            // 3秒后，把文字和颜色恢复原样（熄灭红石灯）
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = ''; // 清空这里，就会自动用回 CSS 里的颜色
        }, 3000);

    }).catch(err => {
        // 如果因为浏览器权限等问题复制失败了，弹窗提示玩家（防爆措施）
        console.error('复制失败:', err);
        alert('哎呀，自动复制失败了，请手动输入 IP: ' + serverIP);
    });
});