import java.applet.*;

import java.awt.event.*;

import java.awt.*;

public class Checkboxgroupdemo extends Applet

{
 public void init()

{

CheckboxGroup cbg=new CheckboxGroup();

Checkbox c1=new Checkbox("mca", cbg, true);
Checkbox c2=new Checkbox("mba", cbg, false); 
Checkbox c3=new Checkbox("mbbs", cbg, false);
Checkbox c4=new Checkbox("law", cbg, false); add(c1);
add(c1);
add(c2); 
add(c3);
add(c4);

}

public void paint (Graphics g) 
{ 
g.drawString("Checkbox DEMO", 100, 100);

} }
/*
<html>

<body> 
<applet code = "Checkboxgroupdemo.class" width="500" height="500"> 
</html>

</applet>

</body>

*/