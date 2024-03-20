import java.awt.*;
import java.applet.*;
public class AppletDec extends Applet{
public void init()
{
setBackground(Color.PINK);
setForeground(Color.blue);
}
public void paint (Graphics g)
{
g.setColor(Color.black);
Font f=new Font("Algerian",2,40);
g.setFont(f);
g.drawString("MANNAT",100,240);
}
}
/* <applet code="AppletDec.class" width=500 height=500>
</applet>*/