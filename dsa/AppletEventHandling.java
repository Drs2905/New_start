import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Color; 
import java.awt.Font;
public class AppletEventHandling extends Applet implements MouseListener { 
StringBuffer strBuf;
public void init() {
addMouseListener(this); 
strBuf = new StringBuffer(); 
addItem("i am "); 
addItem(" mannat"); 
}
public void start() { 
addItem(" FROM delhi ");
}
public void stop() { 
addItem(" STUDYING MCA ");
}
public void destroy() { 
addItem("IN AIIT"); 
addItem("Good Bye!!");
}
void addItem(String word) {
System.out.println(word); 
strBuf.append(word);
repaint();
}
public void paint (Graphics g) { 
Font f=new Font("Algerian",3,40);
g.setFont(f);
g.drawString(strBuf.toString(), 20, 200);
setForeground (Color.blue);
setBackground (Color.green);
}
public void mouseEntered (MouseEvent event) {
}
public void mouseExited (MouseEvent event) { 
}
public void mousePressed(MouseEvent event) {
} 
public void mouseReleased (MouseEvent event) {
}
public void mouseClicked (MouseEvent event) {
addItem("  MOUSE CLOCKED!!");
}
}
/*
<applet code="AppletEventHandling.class" width=1200 height=500> 
</applet> */