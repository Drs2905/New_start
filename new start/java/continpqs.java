//displayy all numbers entered by user except multiples of 10.
import java.util.*;
public class continpqs {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        do{
            int a=sc.nextInt();
            if(a%10==0){
                continue;
            }
            System.out.println("number was : "+ a);
        }while(true);
    }
}
