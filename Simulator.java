import java.awt.*;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.awt.event.MouseEvent;

public class Simulator {

    public static void main(String[] args) throws AWTException, InterruptedException {

        PointerInfo pinfo = MouseInfo.getPointerInfo();
        Point p = pinfo.getLocation();
        int mx = (int) p.getX();
        int my = (int) p.getY();
        for(int i = 0 ;  ; i ++){
            //初始化robot
            Robot robot = new Robot();

            // 1. 按回车
            Thread.sleep(1000);
            robot.keyPress(KeyEvent.VK_ENTER);
            Thread.sleep(100);
            robot.keyRelease(KeyEvent.VK_ENTER);

            // 2. 按F12
            Thread.sleep(1000);
            robot.keyPress(KeyEvent.VK_F12);
            Thread.sleep(100);
            robot.keyRelease(KeyEvent.VK_F12);

            // 3. 按↑
            Thread.sleep(1000);
            //鼠标移动到某一点
            robot.mouseMove(819,849);

            //模拟鼠标按下左键
            robot.mousePress(InputEvent.BUTTON1_MASK);
            //模拟鼠标松开左键
            robot.mouseRelease(InputEvent.BUTTON1_MASK);

            robot.keyPress(KeyEvent.VK_UP);
            Thread.sleep(100);
            robot.keyRelease(KeyEvent.VK_UP);


            // 4. 按回车
            Thread.sleep(1000);
            robot.keyPress(KeyEvent.VK_ENTER);
            Thread.sleep(100);
            robot.keyRelease(KeyEvent.VK_ENTER);
        }
    }
}
