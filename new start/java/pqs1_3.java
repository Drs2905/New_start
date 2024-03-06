import java.util.*;
public class pqs1_3{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        float pencil=sc.nextFloat();
        float pen=sc.nextFloat();
        float eraser=sc.nextFloat();
        float total=pen+pencil+eraser;
        System.out.println(total);
        float gst=total+(0.18f*total);
        System.out.println(gst);
    }
}