import {ipcRenderer} from 'electron'

class WindowUtil {
    // 窗口最小化
    minWindow() {
        ipcRenderer.send('minimize')
    }

    // 窗口最大化或者还原窗口
    maxWindow() {
        ipcRenderer.send('maximize')
    }

    // 设置窗口是否能改变大小，参数true/false
    setResizable(resizable) {
        ipcRenderer.send('setResizable',resizable)
    }

    // 隐藏窗口
    hide() {
        ipcRenderer.send('hide')
    }

    // 显示窗口
    show() {
        ipcRenderer.send('show')
    }

    // 设置窗口最前端显示
    setAlwaysOnTop(top) {
        ipcRenderer.send('setAlwaysOnTop',top)
    }

    // 关闭窗口
    close() {
        ipcRenderer.send('close')
    }
}

export default  WindowUtil