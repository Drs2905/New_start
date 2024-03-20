import java.applet.*; 
import java.awt.*;
import java.awt.event.*;
 public class Checkboxdemo extends Applet
{
 public void init() 
{
Checkbox c1=new Checkbox("sky diving");
Checkbox c2=new Checkbox("singing"); 
Checkbox c3=new Checkbox("driving");
Checkbox c4=new Checkbox("dancing");

add(c1);
add(c2); 
add(c3);
add(c4);
}
public void paint (Graphics g)
{
g.drawString("Checkbox DEMO", 100, 100);
} 
}
/*
<html>
<body>
<applet code = "Checkboxdemo.class" width="500" height="500">
</applet>
</body> 
</html>
*/